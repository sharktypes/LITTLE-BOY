import useCheckTicket from '@/hooks/useCheckTicket'
import { Button } from '@radix-ui/themes'

export default function TicketButton({
  number,
  isNumberSelected,
  onClick,
  children,
}: {
  number: bigint
  isNumberSelected: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  const isSold = useCheckTicket(number)

  return (
    <Button
      size='3'
      radius='full'
      color={isNumberSelected ? 'green' : 'blue'}
      onClick={onClick}
      disabled={isSold}
    >
      {children}
    </Button>
  )
}
