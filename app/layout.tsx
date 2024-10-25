import type { Metadata } from 'next'
import { Inter, Noto_Sans_Thai } from 'next/font/google'
import './globals.css'
import Navbar from './components/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })
const notoSansThai = Noto_Sans_Thai({ subsets: ['thai', 'latin'] })

export const metadata: Metadata = {
  title: 'Memory of Baan Poon',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${notoSansThai.className} pt-20 min-h-screen bg-[#efeeeb]`}>
      <Navbar />
        {children}
      </body>
    </html>
  )
}
