import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Loam Strategy - From stuck & scattered to clear & focused',
  description: 'The HomeRun Method helps you turn scattered ideas into a simple 90-day strategy—powered by human insight and AI.',
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

