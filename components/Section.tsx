interface SectionProps {
  id?: string
  bgColor?: 'white' | 'cream' | 'sage' | 'tan'
  padding?: 'sm' | 'md' | 'lg'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  children: React.ReactNode
  className?: string
}

export default function Section({
  id,
  bgColor = 'white',
  padding = 'md',
  maxWidth = 'lg',
  children,
  className = '',
}: SectionProps) {
  const bgColors = {
    white: 'bg-loam-white',
    cream: 'bg-loam-cream',
    sage: 'bg-loam-sage/30',
    tan: 'bg-loam-tan/20',
  }

  const paddings = {
    sm: 'py-12 px-4',
    md: 'py-16 md:py-20 px-4',
    lg: 'py-24 md:py-32 px-4',
  }

  const maxWidths = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <section
      id={id}
      className={`${bgColors[bgColor]} ${paddings[padding]} ${className}`}
    >
      <div className={`${maxWidths[maxWidth]} mx-auto`}>
        {children}
      </div>
    </section>
  )
}



