import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold text-base transition-colors inline-block text-center'
  
  const variantStyles = {
    primary: 'bg-loam-teal text-white hover:bg-loam-teal/90',
    secondary: 'bg-transparent border-2 border-loam-teal text-loam-teal hover:bg-loam-teal hover:text-white',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}

