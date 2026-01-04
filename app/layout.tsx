import type { Metadata } from 'next'
import './globals.css'
import BookingLinkHandler from '@/components/BookingLinkHandler'

export const metadata: Metadata = {
  title: 'loam strategy - You have the answers. I just ask the right questions.',
  description: 'Transform your business from stuck and scattered to clear and focused. Strategy consulting for small business owners using The Homerun Method.',
  icons: {
    icon: '/loamstrategylogo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BookingLinkHandler />
        {children}
      </body>
    </html>
  )
}

