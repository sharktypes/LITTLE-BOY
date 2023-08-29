import { LOTTERY_ABI } from '@/config/abi'
import { LOTTERY_ADDRESS, TOKEN_ADDRESS } from '@/config/address'
import {
  useAccount,
  useBalance,
  useContractRead,
  useContractReads,
} from 'wagmi'

export default function useLottery() {
  const { address } = useAccount()

  const lotteryContract = {
    address: LOTTERY_ADDRESS,
    abi: LOTTERY_ABI,
  }

  const { data: totalTickets } = useContractRead({
    watch: true,
    ...lotteryContract,
    functionName: 'getTotalAvailableTickets',
  })

  const { data: prizePool } = useContractRead({
    watch: true,
    ...lotteryContract,
    functionName: 'currentPrizePool',
  })

  const { data: lotteryData } = useContractReads({
    watch: true,
    contracts: [
      { ...lotteryContract, functionName: 'ticketsSoldCount' },
      { ...lotteryContract, functionName: 'ticketPriceInTokens' },
      { ...lotteryContract, functionName: 'lotteryEndTime' },
    ],
  })

  const { data: tokenBalance } = useBalance({
    watch: true,
    address: address,
    token: TOKEN_ADDRESS,
  })

  const { data: myTickets } = useContractRead({
    watch: true,
    ...lotteryContract,
    functionName: 'getTicketsOwnedBy',
    args: [address as `0x${string}`],
  })

  return { totalTickets, prizePool, lotteryData, tokenBalance, myTickets }
}
