import { TOKEN_ABI } from '@/config/abi'
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import useLottery from './useLottery'
import { LOTTERY_ADDRESS, TOKEN_ADDRESS } from '@/config/address'

export default function useApprove(amount: number) {
  const { address } = useAccount()
  const { lotteryData } = useLottery()

  const tokenContract = {
    address: TOKEN_ADDRESS,
    abi: TOKEN_ABI,
  }

  const ticketPrice = parseInt(lotteryData?.[2].result?.toString() as string)
  const totalTokens = amount * ticketPrice * 10 ** 18

  const { data: currentAllowance } = useContractRead({
    cacheTime: 0,
    watch: true,
    ...tokenContract,
    account: address,
    functionName: 'allowance',
    args: [address as `0x${string}`, LOTTERY_ADDRESS],
  })

  const isAllowance =
    Number(currentAllowance) === 0 || Number(currentAllowance) < totalTokens

  console.log(Number(currentAllowance))
  console.log(isAllowance)

  const prepareApprove = usePrepareContractWrite({
    cacheTime: 0,
    account: address,
    gas: BigInt(8000000),
    functionName: 'approve',
    ...tokenContract,
    args: [LOTTERY_ADDRESS, BigInt(Number.isInteger(totalTokens))],
  })

  const approve = useContractWrite(prepareApprove.config)

  const pendingApproveTx = useWaitForTransaction({
    cacheTime: 0,
    hash: approve.data?.hash,
  })

  return { isAllowance, approve, pendingApproveTx }
}
