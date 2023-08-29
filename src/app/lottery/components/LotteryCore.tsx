'use client'

import { Section, Text } from '@radix-ui/themes'
import LotteryNumber from './LotteryNumber'
import Lottery from './Lottery'
import UserInfo from './UserInfo'
import { useEffect, useState } from 'react'
import useApprove from '@/hooks/useApprove'
import usePurchase from '@/hooks/usePurchase'
import useClient from '@/hooks/useClient'
import { useAccount, useNetwork } from 'wagmi'

export default function LotteryCore() {
  const isClient = useClient()
  const { isConnected } = useAccount()
  const { chain } = useNetwork()

  const [inputValue, setInputValue] = useState<number[]>([])
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([])

  const handleNumberButtonClick = (number: string) => {
    const selectedNumber = parseInt(number, 10)
    setSelectedNumbers((prevSelected) =>
      prevSelected.includes(number)
        ? prevSelected.filter((num) => num !== number)
        : [...prevSelected, number]
    )

    setInputValue((prevValue) =>
      prevValue.includes(selectedNumber)
        ? prevValue.filter((num) => num !== selectedNumber)
        : [...prevValue, selectedNumber]
    )
  }

  const isNumberSelected = (number: string) => selectedNumbers.includes(number)

  const { isAllowance, approve, pendingApproveTx } = useApprove(
    inputValue.length
  )
  const { buy, pendingBuyTx } = usePurchase(inputValue)

  const isChainId = typeof chain?.id === 'number' && chain?.id !== 11155111

  const isApproving = approve.isLoading
  const isApproveTxPending = pendingApproveTx.isLoading

  const isBuying = buy.isLoading
  const isBuyTxPending = pendingBuyTx.isLoading

  const isSelected = inputValue.length < 1

  const btnDisabledState =
    !isClient ||
    !isConnected ||
    isChainId ||
    isApproving ||
    isApproveTxPending ||
    isBuying ||
    isBuyTxPending ||
    isSelected

  const btnContent =
    isApproving || isApproveTxPending || isBuying || isBuyTxPending ? (
      <Text>Please wait...</Text>
    ) : isAllowance ? (
      'Approve'
    ) : (
      'Purchase'
    )

  const handleOnBuy = () => {
    if (isAllowance) {
      approve.write?.()
    } else {
      buy.write?.()
    }
  }

  useEffect(() => {
    if (!isBuyTxPending) {
      setSelectedNumbers([])
      setInputValue([])
    }
  }, [isBuyTxPending])

  return (
    <Section className='grid gap-y-10 md:grid-cols-2 xl:grid-cols-3'>
      <LotteryNumber
        isNumberSelected={isNumberSelected}
        onClick={handleNumberButtonClick}
      />
      <Lottery
        btnDisabledState={btnDisabledState}
        btnContent={btnContent}
        handleOnBuy={handleOnBuy}
      />
      <UserInfo />
    </Section>
  )
}
