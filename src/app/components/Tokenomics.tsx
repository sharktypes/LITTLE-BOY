import { Button, Heading, Section, Text } from '@radix-ui/themes'
import Chart from './Chart'
import { Syne } from 'next/font/google'
import { FileTextIcon } from '@radix-ui/react-icons'
import CopyAddress from './CopyAddress'

const syne = Syne({ subsets: ['latin'], weight: ['500', '600', '700', '800'] })

const tokenData = [
  {
    title: 'Type',
    value: 'ERC20',
  },
  {
    title: 'Name',
    value: 'LittleBoyCoin',
  },
  {
    title: 'Symbol',
    value: 'LBC',
  },
  {
    title: 'Network',
    value: 'Octa Space',
  },
  {
    title: 'Total Supply',
    value: '1 Billion',
  },
  {
    title: 'Token Contract',
    value: `0x6296acA7f6CB68fA94B4271007e83c530aCFC64C`.substring(0, 8),
  },
]

export default function Tokenomics() {
  return (
    <Section id='tokenomics'>
      <div className='grid md:grid-cols-2 md:px-10 md:gap-x-10 md:items-center'>
        <Chart />

        <div className='px-5 mt-10 sm:px-28 md:mt-24 md:px-28 md:order-3 xl:mt-0 xl:order-1 md:col-span-full xl:px-[400px] lg:px-64'>
          <Heading
            as='h2'
            align='center'
            size='8'
            className={`lg:!text-5xl ${syne.className}`}
          >
            What is LBC?
          </Heading>

          <Text
            align='center'
            as='p'
            mt='5'
            size={{ initial: '4', md: '5', lg: '6' }}
            color='gray'
            className='sm:!mt-7'
          >
            LBC functions as a deflationary token that is primarily used as
            currency in the purchase of casino chips, as well as in the funding
            of charitable causes.
          </Text>

          <div className='text-center mt-10'>
            <Button size='4' variant='outline'>
              <FileTextIcon width={21} height={21} />
              Read our whitepaper
            </Button>
          </div>
        </div>

        <div className='mt-24 px-6 sm:px-28 xl:mt-20 sm:mt-20 md:mt-0 md:px-0 md:order-2 xl:order-3 lg:px-7 xl:px-16'>
          <Heading
            as='h2'
            align='center'
            size='8'
            className={`lg:!text-5xl ${syne.className}`}
          >
            Token Details
          </Heading>

          <ol className='mt-10 space-y-4 xl:mt-16'>
            {tokenData.map((token, i) => (
              <li key={i} className='flex justify-between'>
                <Text
                  size={{ initial: '4', md: '5', lg: '6' }}
                  weight='bold'
                  as='span'
                >
                  {token.title} :
                </Text>
                <Text
                  size={{ initial: '4', md: '5', lg: '6' }}
                  as={i === 5 ? 'div' : 'span'}
                  className={`${i === 5 && 'flex items-center gap-x-3'}`}
                >
                  {i === 5 && <CopyAddress />}
                  {token.value}
                </Text>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
