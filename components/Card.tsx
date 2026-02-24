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
}: CardProps) {
  const cardContent = (
    <div className={`bg-loam-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-loam-tan/30 ${href ? 'cursor-pointer' : ''} ${className}`}>
      {label && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-loam-teal bg-loam-sage/20 px-3 py-1 rounded-full">
            {label}
          </span>
        </div>
      )}
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
      {icon && !image && (
        <div className="mb-4">
          <div className="w-10 h-10 rounded-lg bg-loam-teal flex items-center justify-center text-white text-lg">
            {icon}
          </div>
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

