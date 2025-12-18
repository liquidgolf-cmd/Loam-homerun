import Link from 'next/link'

interface CardProps {
  title?: string
  description?: string
  label?: string
  href?: string
  image?: string
  children?: React.ReactNode
  className?: string
}

export default function Card({
  title,
  description,
  label,
  href,
  image,
  children,
  className = '',
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
        <div className="mb-4">
          <img src={image} alt={title || ''} className="w-full h-48 object-cover rounded-lg" />
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

