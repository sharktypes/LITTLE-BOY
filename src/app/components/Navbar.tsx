'use client'

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Badge, IconButton } from '@radix-ui/themes'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Syne } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const syne = Syne({ subsets: ['latin'], weight: ['700'] })

const navLink = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '#tokenomics',
    title: 'Tokenomics',
  },
  {
    href: '#roadmap',
    title: 'Roadmap',
  },
  {
    href: '#links',
    title: 'Links',
  },
  {
    href: '/lottery',
    title: 'Lottery',
  },
  {
    href: '#',
    title: 'Casino',
  },
]

function NavbarLink({ url }: { url: string }) {
  return navLink.map((link, i) => (
    <li key={i}>
      <Link
        href={link.href}
        className={`text-lg text-slate11 hover:text-slate12 ${
          i === 5 && 'cursor-not-allowed'
        } ${url === link.href && 'text-blue10'}`}
      >
        {link.title}
      </Link>
    </li>
  ))
}

function MobileNavbarLink({
  onClick,
  url,
}: {
  onClick: () => void
  url: string
}) {
  return navLink.map((link, i) => (
    <li key={i}>
      <Link
        href={link.href}
        className={`text-lg text-slate11 hover:text-slate12 ${
          i === 5 && 'cursor-not-allowed'
        } ${url === link.href && 'text-blue10'}`}
        onClick={onClick}
      >
        {link.title}
        {i === 5 && (
          <Badge ml='3' color='sky'>
            Coming Soon
          </Badge>
        )}
      </Link>
    </li>
  ))
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const pathname = usePathname()

  return (
    <nav className='p-5 bg-slate1'>
      <div className='flex items-center justify-between flex-wrap'>
        <div>
          <Link href='/'>
            <span
              className={`text-4xl font-bold text-slate12 ${syne.className}`}
            >
              LBC
            </span>
          </Link>
        </div>

        <div className='hidden md:block'>
          <ul className='flex items-center gap-x-6'>
            <NavbarLink url={pathname} />
          </ul>
        </div>

        <div className='flex items-center gap-x-3'>
          <ConnectButton
            label='CONNECT'
            accountStatus='address'
            showBalance={false}
          />
          <div className='md:hidden'>
            {isOpen ? (
              <IconButton size='3' variant='soft' onClick={handleIsOpen}>
                <Cross1Icon width={21} height={21} />
              </IconButton>
            ) : (
              <IconButton size='3' variant='soft' onClick={handleIsOpen}>
                <HamburgerMenuIcon width={21} height={21} />
              </IconButton>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='pt-7'>
          <ul className='flex flex-col gap-y-5'>
            <MobileNavbarLink onClick={handleIsOpen} url={pathname} />
          </ul>
        </div>
      )}
    </nav>
  )
}
