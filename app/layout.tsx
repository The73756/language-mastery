import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
})
const poppins = Poppins({ subsets: ['latin'], weight: ['700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Language Mastery',
  description:
    'Инновационный центр обучения языкам, который стремится изменить ваш подход к изучению и владению иностранными языками.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
