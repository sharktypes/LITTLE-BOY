import { ArrowRightIcon, RocketIcon } from '@radix-ui/react-icons'
import { Button, Heading, Section, Text } from '@radix-ui/themes'
import { Syne } from 'next/font/google'
import Image from 'next/image'
import Footer from './components/Footer'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'

const syne = Syne({ subsets: ['latin'], weight: ['700'] })

export default function Home() {
  return (
    <main>
      <Section id='intro' className='p-4 sm:px-10 md:px-16 mt-14'>
        <div className='lg:flex lg:flex-row lg:items-center xl:justify-between'>
          <div className='lg:basis-3/4 xl:basis-1/2'>
            <div className='space-y-5'>
              <Heading as='h1' size='9' className={syne.className}>
                Ultimate Gambling Experience
              </Heading>

              <Text size={{ initial: '5', md: '6' }} as='p' color='gray'>
                Dive into deflationary riches, play favorite games, and change
                lives with charitable donations - all in one token! Join the
                winning revolution today!
              </Text>
            </div>

            <div className='flex flex-col sm:flex-row sm:gap-x-6 gap-y-5 mt-12'>
              <Button size='4'>
                <RocketIcon width={21} height={21} />
                Buy our tokens
              </Button>

              <Button size='4' variant='outline'>
                Play the games
                <ArrowRightIcon width={21} height={21} />
              </Button>
            </div>
          </div>

          <div className='hidden lg:block'>
            <Image
              src='/vector-1.png'
              alt='casino realistic vector'
              width={560}
              height={309}
              priority
            />
          </div>
        </div>
      </Section>
      <Tokenomics />
      <Roadmap />
      <Footer />
    </main>
  )
}
