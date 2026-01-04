import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Course', href: '/course' },
    { label: 'Work With Me', href: '/work-with-me' },
    { label: 'Apps', href: '/apps' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-loam-brown text-loam-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/loamstrategylogo.jpg"
                alt="Loam Strategy Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-loam-cream/80 text-sm">
              Turn scattered ideas into a clear, focused strategy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-loam-cream/80 hover:text-loam-cream text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:loamstrategy@gmail.com"
                className="block text-loam-cream/80 hover:text-loam-cream text-sm transition-colors"
              >
                loamstrategy@gmail.com
              </a>
              <a
                href="/#book-consultation"
                className="inline-block px-4 py-2 bg-loam-teal text-white rounded-lg font-semibold text-sm hover:bg-loam-teal/90 transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-loam-tan/30 pt-8 text-center text-sm text-loam-cream/60">
          <p>© {currentYear} Loam Strategy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

