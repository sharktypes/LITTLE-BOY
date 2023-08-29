import { Text } from '@radix-ui/themes'
import { Syne } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['500', '600', '700', '800'] })

export default function Footer() {
  const links = [
    {
      title: 'MARKET',
      hrefs: [
        {
          title: 'Xeggex',
          link: '#',
        },
      ],
    },
    {
      title: 'ABOUT US',
      hrefs: [
        {
          title: 'Whitepaper',
          link: '#',
        },
        {
          title: 'Documentation',
          link: '#',
        },
      ],
    },
    {
      title: 'FOLLOW US',
      hrefs: [
        {
          title: 'Twitter',
          link: '#',
        },
        {
          title: 'Discord',
          link: '#',
        },
        {
          title: 'Telegram',
          link: '#',
        },
      ],
    },
  ]

  return (
    <footer id='links' className='border-t border-slate6 px-5 py-16'>
      <div className='grid grid-cols-2 gap-y-10 sm:grid-cols-3 sm:justify-items-center'>
        {links.map((link, i) => (
          <div className='flex flex-col gap-y-5' key={i}>
            <Text
              as='span'
              size={{ md: '5' }}
              color='gray'
              className={syne.className}
            >
              {link.title}
            </Text>

            <div className='flex flex-col gap-y-3'>
              {link.hrefs.map((item, i) => (
                <a href={item.link} key={i}>
                  <Text
                    as='span'
                    color='gray'
                    highContrast
                    size={{ initial: '4', md: '5' }}
                  >
                    {item.title}
                  </Text>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className='flex flex-col items-center col-span-full mt-10'>
          <Text as='span' color='gray'>
            © 2023 LittleBoyCoin.
          </Text>
          <Text as='span' color='gray'>
            All Rights Reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
