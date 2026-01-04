'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function BookingLinkHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Temporarily disable smooth scroll, then jump
    const jumpToBooking = () => {
      const targetElement = document.getElementById('book-consultation')
      if (targetElement) {
        // Temporarily disable smooth scroll
        const html = document.documentElement
        const originalScrollBehavior = html.style.scrollBehavior
        html.style.scrollBehavior = 'auto'
        
        // Jump directly
        targetElement.scrollIntoView({ behavior: 'auto', block: 'start' })
        
        // Restore smooth scroll after a brief moment
        setTimeout(() => {
          html.style.scrollBehavior = originalScrollBehavior || ''
        }, 100)
      }
    }

    // Handle hash in URL - jump to booking section (no smooth scroll)
    const handleHashScroll = () => {
      if (window.location.hash === '#book-consultation') {
        jumpToBooking()
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
          // Always prevent default for booking links to control scroll behavior
          e.preventDefault()
          e.stopPropagation()
          
          // If navigating from another page, navigate first
          if (pathname !== '/' && href.startsWith('/')) {
            window.location.href = href
            return
          }
          
          // Jump immediately
          jumpToBooking()
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

