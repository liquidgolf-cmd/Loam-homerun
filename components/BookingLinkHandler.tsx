'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function BookingLinkHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Handle hash in URL - jump to booking section (no smooth scroll)
    const handleHashScroll = () => {
      if (window.location.hash === '#book-consultation') {
        const targetElement = document.getElementById('book-consultation')
        if (targetElement) {
          // Jump directly without smooth scroll
          targetElement.scrollIntoView({ behavior: 'auto', block: 'start' })
        }
      }
    }

    // Check on mount
    handleHashScroll()
    
    // Also check after a short delay to handle client-side navigation
    const timeoutId = setTimeout(handleHashScroll, 150)

    // Handle hash changes
    const handleHashChange = () => {
      handleHashScroll()
    }
    window.addEventListener('hashchange', handleHashChange)

    // Intercept clicks on booking links
    const handleBookingLinks = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href*="#book-consultation"]') as HTMLAnchorElement
      
      if (link) {
        const href = link.getAttribute('href')
        if (href && href.includes('#book-consultation')) {
          // If already on homepage, prevent default and jump
          if (pathname === '/' && (href === '#book-consultation' || href === '/#book-consultation')) {
            e.preventDefault()
            e.stopPropagation()
            const targetElement = document.getElementById('book-consultation')
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'auto', block: 'start' })
            }
          }
          // For navigation from other pages, Next.js handles it and hash will trigger scroll
        }
      }
    }

    // Add event listener to document
    document.addEventListener('click', handleBookingLinks, true)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('hashchange', handleHashChange)
      document.removeEventListener('click', handleBookingLinks, true)
    }
  }, [pathname])

  return null
}

