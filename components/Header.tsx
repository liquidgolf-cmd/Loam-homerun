'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Why Loam', href: '#why-loam' },
    { label: 'The Method', href: '#homerun-method' },
    { label: 'Services', href: '#services' },
    { label: 'AI Advantage', href: '#ai-differentiator' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-loam-white/95 backdrop-blur-sm border-b border-loam-tan/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center">
              <Image
                src="/loamstrategylogo.jpg"
                alt="Loam Strategy Logo"
                width={210}
                height={70}
                className="h-14 md:h-[70px] w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-loam-text hover:text-loam-teal font-medium text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            {/* CTAs */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-loam-tan/30">
              <a
                href="#contact"
                className="px-4 py-2 bg-loam-teal text-white rounded-lg font-semibold text-sm hover:bg-loam-teal/90 transition-colors"
              >
                Book Consultation
              </a>
              <a
                href="#homerun-method"
                className="px-4 py-2 bg-loam-white text-loam-teal border-2 border-loam-teal rounded-lg font-semibold text-sm hover:bg-loam-cream transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-loam-text hover:text-loam-teal focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-loam-tan/30">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-loam-text hover:text-loam-teal font-medium text-base py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              {/* Mobile CTAs */}
              <div className="flex flex-col space-y-2 pt-2 border-t border-loam-tan/30 mt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 bg-loam-teal text-white rounded-lg font-semibold text-sm hover:bg-loam-teal/90 transition-colors text-center"
                >
                  Book Consultation
                </a>
                <a
                  href="#homerun-method"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 bg-loam-white text-loam-teal border-2 border-loam-teal rounded-lg font-semibold text-sm hover:bg-loam-cream transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

