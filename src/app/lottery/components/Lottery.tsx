import useClient from '@/hooks/useClient'
import useCountdown from '@/hooks/useCountdown'
import useLottery from '@/hooks/useLottery'
import { nFormatter } from '@/utils/nFormatter'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { Button, Card, IconButton, Separator, Text } from '@radix-ui/themes'
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['700'] })

export default function Lottery({
  btnDisabledState,
  btnContent,
  handleOnBuy,
}: {
  btnDisabledState: boolean
  btnContent: JSX.Element | 'Approve' | 'Purchase'
  handleOnBuy: () => void
}) {
  const isClient = useClient()
  const { prizePool, lotteryData } = useLottery()

  const timestamp = lotteryData?.[2].result?.toString() as string
  const { formatTime, remainingTime } = useCountdown(parseInt(timestamp))

  const countdown =
    remainingTime > 0 ? formatTime(remainingTime) : '00:00:00:00'

  const dataTitle = ['Ticket Sold', 'Ticket Price', 'Countdown']

  if (!isClient) {
    return (
      <Card className='w-5/6 !mx-auto' size='3'>
        <div className='text-end'>
          <IconButton variant='ghost'>
            <QuestionMarkCircledIcon width={27} height={27} />
          </IconButton>
        </div>

        <div className='flex flex-col text-center gap-y-3 mt-5'>
          <Text size='9' weight='bold'>
            0
          </Text>
          <Text
            color='gray'
            size='6'
            weight='medium'
            className={syne.className}
          >
            Prize Pool
          </Text>
        </div>

        <Separator orientation='horizontal' size='4' mt='6' />

        <div className='mt-10'>
          <ul className='space-y-8'>
            <li className='flex justify-between'>
              <Text size='5' color='gray' className={syne.className}>
                Ticket Sold :
              </Text>
              <Text size='5'>0</Text>
            </li>
            <li className='flex justify-between'>
              <Text size='5' color='gray' className={syne.className}>
                Ticket Price :
              </Text>
              <Text size='5'>0</Text>
            </li>
            <li className='flex justify-between'>
              <Text size='5' color='gray' className={syne.className}>
                Countdown :
              </Text>
              <Text size='5'>00:00:00:00</Text>
            </li>
          </ul>
        </div>

        <div className='mt-8'>
          <Button size='4' className='w-full' disabled>
            Loading...
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className='w-5/6 !mx-auto' size='3'>
      <div className='text-end'>
        <IconButton variant='ghost'>
          <QuestionMarkCircledIcon width={27} height={27} />
        </IconButton>
      </div>

      <div className='flex flex-col text-center gap-y-3 mt-5'>
        <Text size='9' weight='bold'>
          {nFormatter(Number(prizePool))}
        </Text>
        <Text color='gray' size='6' weight='medium' className={syne.className}>
          Prize Pool
        </Text>
      </div>

      <Separator orientation='horizontal' size='4' mt='6' />

      <div className='mt-10'>
        <ul className='space-y-8'>
          {lotteryData?.map((data, i) => (
            <li className='flex justify-between' key={i}>
              <Text size='5' color='gray' className={syne.className}>
                {dataTitle[i]} :
              </Text>
              <Text size='5'>
                {i < 2 ? data.result?.toString() : countdown}
              </Text>
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-8'>
        <Button
          size='4'
          className='w-full'
          disabled={btnDisabledState}
          onClick={handleOnBuy}
        >
          {btnContent}
        </Button>
      </div>
    </Card>
  )
}
