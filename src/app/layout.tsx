import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import RainbowKitWrapper from './rainbowkit'
import './theme-config.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body className={inter.variable}>
        <Theme
          accentColor='blue'
          grayColor='slate'
          panelBackground='solid'
          appearance='dark'
          scaling='100%'
          radius='large'
        >
          <RainbowKitWrapper>
            <header className='top-0 z-10 sticky border-b border-slate6'>
              <Navbar />
            </header>

            {children}
          </RainbowKitWrapper>
        </Theme>
      </body>
    </html>
  )
}
