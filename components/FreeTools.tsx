export default function FreeTools() {
  const aiAuditServices = [
    {
      title: 'Personal Brand Audit',
      description: 'AI-powered analysis of your personal brand presence and opportunities for authentic growth.',
      href: '#', // TODO: Add actual URL
    },
    {
      title: 'Strategic Blind Spot Audit',
      description: 'Leverage AI to identify hidden gaps in your strategy that you might not see on your own.',
      href: '#', // TODO: Add actual URL
    },
    {
      title: 'Visual Identity Audit',
      description: 'Comprehensive AI assessment of your visual brand elements and how they align with your goals.',
      href: '#', // TODO: Add actual URL
    },
    {
      title: 'Business App Development Audit',
      description: 'AI-enhanced evaluation of your app strategy and development needs to serve your customers better.',
      href: '#', // TODO: Add actual URL
    },
  ]

  return (
    <section id="free-tools" className="py-20 px-4 bg-loam-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-loam-text mb-4">
            Start with Free AI Audits
          </h2>
          <p className="text-xl text-loam-text/80 max-w-3xl mx-auto">
            All our AI-powered audits are free to use. Get instant insights, then decide if you want deeper, personalized support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiAuditServices.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="bg-loam-cream p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-t-4 border-loam-teal transform hover:-translate-y-1 block cursor-pointer relative"
            >
              {/* Large FREE Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-4xl md:text-5xl font-bold text-loam-teal">
                  FREE
                </span>
              </div>

              {/* AI-POWERED Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-loam-teal bg-loam-sage/20 px-3 py-1 rounded-full">
                  AI-POWERED
                </span>
              </div>

              <h4 className="text-2xl font-bold text-loam-text mb-4 pr-20">
                {service.title}
              </h4>
              <p className="text-loam-text/80 text-lg">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

