import { LOTTERY_ABI } from '@/config/abi'
import { LOTTERY_ADDRESS } from '@/config/address'
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'

export default function usePurchase(tickets: number[]) {
  const { address } = useAccount()

  const lotteryContract = {
    address: LOTTERY_ADDRESS,
    abi: LOTTERY_ABI,
  }

  const prepareBuy = usePrepareContractWrite({
    cacheTime: 0,
    ...lotteryContract,
    account: address,
    gas: BigInt(8000000),
    functionName: 'purchaseTickets',
    args: [tickets],
  })

  const buy = useContractWrite(prepareBuy.config)

  const pendingBuyTx = useWaitForTransaction({
    cacheTime: 0,
    hash: buy.data?.hash,
  })

  return { buy, pendingBuyTx }
}
