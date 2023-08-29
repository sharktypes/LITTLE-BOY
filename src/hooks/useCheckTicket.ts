import { LOTTERY_ABI } from '@/config/abi'
import { LOTTERY_ADDRESS } from '@/config/address'
import { useContractRead } from 'wagmi'

export default function useCheckTicket(number: bigint) {
  const lotteryContract = {
    address: LOTTERY_ADDRESS,
    abi: LOTTERY_ABI,
  }

  const { data } = useContractRead({
    cacheTime: 0,
    watch: true,
    ...lotteryContract,
    functionName: 'isTicketSold',
    args: [number],
  })

  return data
}
