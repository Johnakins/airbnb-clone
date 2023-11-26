import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import RegisterModal from '@/components/modals/RegisterModal'
import LoginModal from '@/components/modals/LoginModal'
import ToasterProvider from '@/Providers/ToasterProvider'
import getCurrentUser from '@/libs/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser = {currentUser} />
        {children}
        </body>
    </html>
  )
}
