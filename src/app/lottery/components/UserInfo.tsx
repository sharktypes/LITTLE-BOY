import { Card, ScrollArea, Table, Text } from '@radix-ui/themes'
import { Syne } from 'next/font/google'
import SearchNumbers from './SearchNumbers'
import useLottery from '@/hooks/useLottery'
import { nFormatter } from '@/utils/nFormatter'
import useClient from '@/hooks/useClient'
import styles from './lottery.module.css'

const syne = Syne({ subsets: ['latin'], weight: ['700'] })

export default function UserInfo() {
  const isClient = useClient()
  const { tokenBalance, myTickets } = useLottery()

  const balances = parseInt(tokenBalance?.formatted as string)

  if (!isClient) {
    return (
      <Card className='w-5/6 !mx-auto' size='3'>
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
            LBC Balances
          </Text>
        </div>

        <div className='mt-8'>
          <SearchNumbers />
        </div>

        <div
          className='mt-7 flex items-center justify-center'
          style={{ height: 219.97 }}
        >
          <Text size='5'>Loading tickets...</Text>
        </div>
      </Card>
    )
  }

  return (
    <Card className='w-5/6 !mx-auto' size='3'>
      <div className='flex flex-col text-center gap-y-3 mt-5'>
        <Text size='9' weight='bold'>
          {nFormatter(balances)}
        </Text>
        <Text color='gray' size='6' weight='medium' className={syne.className}>
          LBC Balances
        </Text>
      </div>

      <div className='mt-8'>
        <SearchNumbers />
      </div>

      <div className={`mt-7 ${styles.noScroll}`} style={{ height: 220 }}>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className='!text-xl'>
                Ticket Numbers
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          {myTickets!?.length < 1 ? (
            <div
              className={`${
                myTickets!?.length < 1 && 'flex items-center justify-center'
              }`}
              style={{ height: 220 }}
            >
              <Text size='5'>No tickets found.</Text>
            </div>
          ) : (
            <Table.Body>
              {myTickets?.map((item, i) => (
                <Table.Row key={i}>
                  <Table.RowHeaderCell className='!text-lg'>
                    {item.toString()}
                  </Table.RowHeaderCell>
                </Table.Row>
              ))}
            </Table.Body>
          )}
        </Table.Root>
      </div>
    </Card>
  )
}
