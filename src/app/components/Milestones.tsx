'use client'

import {
  CheckCircledIcon,
  ChevronDownIcon,
  CrossCircledIcon,
} from '@radix-ui/react-icons'
import { Card, Heading, Separator, Text } from '@radix-ui/themes'

const plans = [
  {
    phase: 'PHASE 1',
    title: 'Take Off',
    milestones: [
      {
        done: true,
        title: 'Airdrop',
      },
      {
        done: true,
        title: 'Site Release',
      },
      {
        done: true,
        title: 'Lottery',
      },
    ],
  },
  {
    phase: 'PHASE 2',
    title: 'Launch',
    milestones: [
      {
        done: true,
        title: 'CEX Listing',
      },
      {
        done: false,
        title: 'Casino',
      },
      {
        done: false,
        title: 'Community Ideas',
      },
    ],
  },
  {
    phase: 'PHASE 3',
    title: 'Growth',
    milestones: [
      {
        done: false,
        title: 'Marketing',
      },
      {
        done: false,
        title: 'DEX/Crosschain',
      },
      {
        done: false,
        title: 'New Games',
      },
      {
        done: false,
        title: 'Shop',
      },
    ],
  },
]

export default function Milestones() {
  return (
    <div className='grid gap-y-7 sm:gap-y-16 lg:grid-cols-3 mt-10 sm:mt-16 justify-items-center sm:grid-cols-2'>
      {plans.map((plan, i) => (
        <Card size='3' className='w-4/5' key={i}>
          <Text color='gray'> {plan.phase} </Text>
          <Heading mt='4' as='h3' className='flex items-center justify-between'>
            {plan.title}
            <ChevronDownIcon width={17} height={17} />
          </Heading>

          <ol className='mt-7 space-y-5'>
            {plan.milestones.map((mt, i) => (
              <Card key={i}>
                <li className='flex items-center gap-x-2'>
                  {mt.done ? <CheckCircledIcon /> : <CrossCircledIcon />}
                  {mt.title}
                </li>
              </Card>
            ))}
          </ol>
        </Card>
      ))}
    </div>
  )
}
