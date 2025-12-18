export default function BasepathIllustration() {
  const bases = [
    { position: 'At Bat', question: 'Why are you doing what you do?' },
    { position: '1st Base', question: 'Who are your customers really?' },
    { position: '2nd Base', question: 'What do they actually want?' },
    { position: '3rd Base', question: 'How will you deliver it?' },
    { position: 'Home', question: 'Why does what you provide matter?' },
  ]

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-2">
      {bases.map((base, index) => (
        <div key={base.position} className="flex-1 flex flex-col items-center text-center">
          <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg font-bold text-white text-xs md:text-sm mb-2 ${
            base.position === 'At Bat' 
              ? 'bg-loam-brown' 
              : base.position === 'Home'
              ? 'bg-loam-teal'
              : 'bg-loam-teal'
          }`}>
            {base.position}
          </div>
          <p className="text-sm text-loam-text/80 max-w-[120px]">
            {base.question}
          </p>
          {index < bases.length - 1 && (
            <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-1/2">
              <svg className="w-6 h-6 text-loam-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

