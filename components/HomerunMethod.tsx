export default function HomerunMethod() {
  const steps = [
    {
      position: 'At Bat',
      question: 'Why are you doing what you do?',
      icon: 'circle',
      color: 'loam-brown',
    },
    {
      position: '1st Base',
      question: 'Who are your customers really?',
      icon: 'square',
      color: 'loam-green',
    },
    {
      position: '2nd Base',
      question: 'What do they want?',
      icon: 'square',
      color: 'loam-green',
    },
    {
      position: '3rd Base',
      question: 'How do we get them what they want?',
      icon: 'square',
      color: 'loam-green',
    },
    {
      position: 'Home',
      question: 'Why does what you provide matter?',
      icon: 'diamond',
      color: 'loam-green',
    },
  ]

  return (
    <section id="homerun-method" className="py-20 px-4 bg-loam-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-loam-text mb-4">
            The Homerun Method
          </h2>
          <p className="text-xl text-loam-text/80 max-w-3xl mx-auto">
            A simple framework that guides you through the foundational questions every business needs to answer.
          </p>
        </div>

        {/* Horizontal Timeline Flow */}
        <div className="relative">
          {/* Connecting line - hidden on mobile, visible on desktop, positioned at icon level */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-loam-sage/30 transform -translate-y-1/2" style={{ marginLeft: '10%', marginRight: '10%' }}></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-8 md:gap-4 mb-12">
            {steps.map((step, index) => (
              <div key={step.position} className="flex-1 flex flex-col items-center relative">
                {/* Icon/Badge - All same size and aligned at top */}
                <div className={`relative z-10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg mb-4 ${
                  step.icon === 'circle' 
                    ? 'bg-loam-brown rounded-full' 
                    : step.icon === 'diamond'
                    ? 'bg-loam-teal'
                    : 'bg-loam-teal rounded-lg'
                }`}
                style={step.icon === 'diamond' ? { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' } : {}}
                >
                  <span className="text-white text-xs md:text-sm font-bold text-center px-2">
                    {step.position.toUpperCase()}
                  </span>
                </div>

                {/* Question Card - Aligned below icon, fixed height */}
                <div className="bg-loam-white border-2 border-loam-sage/30 rounded-lg p-4 shadow-md w-full max-w-[200px] text-center min-h-[80px] md:min-h-[100px] flex items-center justify-center">
                  <p className="font-semibold text-loam-text text-sm">
                    {step.question}
                  </p>
                </div>

                {/* Arrow connector - hidden on mobile, positioned between icons */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-loam-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-loam-text/80 italic">
            A framework you'll use long after we're done working together.
          </p>
        </div>
      </div>
    </section>
  )
}

