import { Heading, Section } from '@radix-ui/themes'
import Milestones from './Milestones'
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['700'] })

export default function Roadmap() {
  return (
    <Section id='roadmap'>
      <Heading
        as='h2'
        align='center'
        size='8'
        className={`lg:!text-5xl ${syne.className}`}
      >
        Roadmap
      </Heading>

      <Milestones />
    </Section>
  )
}
