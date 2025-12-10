export default function WhyLoam() {
  const components = [
    {
      soil: 'Organic Matter',
      business: 'Insight',
      keyword: 'Clarity',
      description: 'The living element that enriches everything below. Through blind spot audits and insights, we bring awareness to what\'s hidden.',
      bgColor: 'bg-loam-sage',
      textColor: 'text-white',
    },
    {
      soil: 'Silt',
      business: 'Connection',
      keyword: 'Narrative',
      description: 'The medium that connects everything. Your story links strategy to design, values to audience, creating meaning and resonance.',
      bgColor: 'bg-loam-cream',
      textColor: 'text-loam-text',
    },
    {
      soil: 'Sand',
      business: 'Expression',
      keyword: 'Design',
      description: 'Provides texture and flow. Design gives your strategy tangible expression and allows your brand to adapt and move.',
      bgColor: 'bg-loam-tan',
      textColor: 'text-loam-text',
    },
    {
      soil: 'Clay',
      business: 'Foundation',
      keyword: 'Strategy',
      description: 'The binding agent. Strategy provides structure, holds nutrients, and gives direction to everything that grows above it.',
      bgColor: 'bg-loam-brown',
      textColor: 'text-white',
    },
  ]

  return (
    <section id="why-loam" className="pt-4 pb-10 px-4 bg-loam-sage/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-2">
            Why Loam?
          </h2>
          <p className="text-lg text-loam-text/80 max-w-3xl mx-auto">
            Loam is the ideal soil—a perfect balance of sand, silt, and clay that creates fertile ground where plants naturally thrive. Your business needs the same kind of balance.
          </p>
        </div>

        <div className="bg-loam-white rounded-2xl p-4 md:p-6 shadow-lg">
          {components.map((component, index) => (
            <div
              key={component.soil}
              className={`flex flex-col md:flex-row gap-4 ${
                index < components.length - 1 ? 'mb-4 pb-4 border-b border-loam-tan/30' : ''
              }`}
            >
              {/* Left Block with Keyword */}
              <div className={`${component.bgColor} rounded-lg w-full md:w-32 h-20 flex items-center justify-center flex-shrink-0`}>
                <span className={`${component.textColor} text-xl font-bold text-center px-2`}>
                  {component.keyword}
                </span>
              </div>

              {/* Right Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-loam-text mb-1">
                  {component.soil} - {component.business}
                </h3>
                <p className="text-base text-loam-text/80 leading-relaxed">
                  {component.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

