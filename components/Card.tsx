import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  title?: string
  description?: string
  label?: string
  href?: string
  image?: string
  children?: React.ReactNode
  className?: string
  icon?: React.ReactNode
  heroVariant?: 'finishLine' | 'homerunHappiness' | 'forTheRecord' | 'relationshipQuiz' | 'threeWordJournal' | 'default'
}

export default function Card({
  title,
  description,
  label,
  href,
  image,
  children,
  className = '',
  icon,
  heroVariant,
}: CardProps) {
  const renderHeroStrip = () => {
    if (!heroVariant || image) return null

    if (heroVariant === 'finishLine') {
      return (
        <div className="mb-4">
          <div className="h-10 w-full rounded-lg bg-gradient-to-r from-loam-teal to-loam-brown-500 relative overflow-hidden">
            <div className="absolute -left-4 top-1 h-8 w-8 rotate-12 bg-loam-cream/30" />
            <div className="absolute left-6 top-1 h-8 w-8 rotate-12 bg-loam-cream/20" />
          </div>
        </div>
      )
    }

    if (heroVariant === 'homerunHappiness') {
      return (
        <div className="mb-4">
          <div className="h-10 w-full rounded-lg bg-gradient-to-br from-loam-cream to-loam-brown-300 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-loam-cream/70" />
            </div>
          </div>
        </div>
      )
    }

    if (heroVariant === 'forTheRecord') {
      return (
        <div className="mb-4">
          <div className="h-10 w-full rounded-lg bg-loam-brown-300/60 border border-loam-brown-500/70 flex flex-col justify-center px-3">
            <div className="h-px bg-loam-brown-700 mb-1" />
            <div className="h-px bg-loam-brown-600 mb-1" />
            <div className="h-px bg-loam-brown-500" />
          </div>
        </div>
      )
    }

    if (heroVariant === 'relationshipQuiz') {
      return (
        <div className="mb-4">
          <div className="h-10 w-full rounded-lg bg-loam-cream relative overflow-hidden">
            <div className="absolute left-3 top-1 w-7 h-6 rounded-lg bg-loam-teal/80" />
            <div className="absolute left-7 top-3 w-7 h-6 rounded-lg bg-loam-sage/70" />
          </div>
        </div>
      )
    }

    if (heroVariant === 'threeWordJournal') {
      return (
        <div className="mb-4">
          <div className="h-10 w-full rounded-lg bg-loam-cream flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-loam-teal" />
            <span className="w-2 h-2 rounded-full bg-loam-brown-500" />
            <span className="w-2 h-2 rounded-full bg-loam-sage" />
          </div>
        </div>
      )
    }

    if (heroVariant === 'default') {
      return (
        <div className="mb-4">
          <div className="h-10 w-full rounded-lg bg-loam-cream" />
        </div>
      )
    }

    return null
  }

  const cardContent = (
    <div className={`bg-loam-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-loam-tan/30 ${href ? 'cursor-pointer' : ''} ${className}`}>
      {label && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-loam-teal bg-loam-sage/20 px-3 py-1 rounded-full">
            {label}
          </span>
        </div>
      )}
      {renderHeroStrip()}
      {image && (
        <div className="mb-4 relative w-full h-64 rounded-lg overflow-hidden bg-loam-cream/30 flex items-center justify-center">
          <Image
            src={image}
            alt={title || 'Book cover'}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      {title && (
        <h3 className="text-xl font-bold text-loam-text mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-loam-text/80 mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  )

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="block"
        >
          {cardContent}
        </a>
      )
    }
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

