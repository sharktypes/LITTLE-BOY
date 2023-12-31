import useClient from '@/hooks/useClient'
import useLottery from '@/hooks/useLottery'
import { Card, ScrollArea, Text } from '@radix-ui/themes'
import TicketButton from './TicketButton'
import { block, For } from 'million/react'

const TicketButtonBlock = block(TicketButton)

export default function LotteryNumber({
  isNumberSelected,
  onClick,
}: {
  isNumberSelected: (number: string) => boolean
  onClick: (number: string) => void
}) {
  const isClient = useClient()
  const { totalTickets } = useLottery()

  if (!isClient) {
    return (
      <Card className='w-5/6 !mx-auto' size='3'>
        <div
          className='flex justify-center items-center'
          style={{ height: 465 }}
        >
          <Text size='5'>Please Wait...</Text>
        </div>
      </Card>
    )
  }

  return (
    <Card className='w-5/6 !mx-auto' size='3'>
      <ScrollArea
        type='auto'
        scrollbars='vertical'
        style={{ height: 465 }}
        size='2'
        radius='medium'
      >
        <div className='grid grid-cols-5 pr-6 gap-4'>
          <For each={totalTickets as bigint[]}>
            {(num, i) => (
              <TicketButtonBlock
                number={num}
                key={i}
                isNumberSelected={isNumberSelected(num.toString())}
                onClick={() => onClick(num.toString())}
              >
                {num.toString()}
              </TicketButtonBlock>
            )}
          </For>
        </div>
      </ScrollArea>
    </Card>
  )
}
