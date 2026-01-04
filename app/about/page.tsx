import Section from '@/components/Section'
import Button from '@/components/Button'

export default function AboutPage() {
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
    <main className="min-h-screen">
      {/* Hero */}
      <Section bgColor="cream" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-loam-text mb-6">
            About Loam Strategy
          </h1>
        </div>
      </Section>

      {/* Your Story */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-6">
            Your story
          </h2>
          <p className="text-lg text-loam-text/80 leading-relaxed mb-4">
            You started this business. You know it better than anyone. My role isn't to tell you what to do—it's to ask the right questions at the right time, helping you unlock the insights you already possess but can't quite see.
          </p>
          <p className="text-lg text-loam-text/80 leading-relaxed">
            Loam Strategy helps small business owners move from confusion to clarity through guided conversations, AI-powered audits, and a simple framework you'll keep using long after we're done.
          </p>
        </div>
      </Section>

      {/* The Philosophy */}
      <Section bgColor="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-8 text-center">
            The Philosophy
          </h2>
          <div className="space-y-6">
            <div className="bg-loam-white p-8 rounded-xl border-l-4 border-loam-brown-600">
              <h3 className="text-2xl font-bold text-loam-text mb-4">
                You Have the Answers
              </h3>
              <p className="text-lg text-loam-text/80 leading-relaxed">
                Unlike traditional consultants who provide solutions, I guide you through a process of self-discovery. The HomeRun Method gives you a framework to continue using long after our engagement ends, building capability rather than dependency.
              </p>
            </div>
            <div className="bg-loam-white p-8 rounded-xl border-l-4 border-loam-teal">
              <h3 className="text-2xl font-bold text-loam-text mb-4">
                Question-Based Discovery
              </h3>
              <p className="text-lg text-loam-text/80 leading-relaxed">
                We use guided conversations, AI-powered audits, and a simple framework to help you see what you've been missing. The real work is in the questions we ask and the decisions you make.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Like Loam Soil */}
      <Section bgColor="sage">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-4">
              Like Loam Soil
            </h2>
            <p className="text-lg text-loam-text/80 max-w-3xl mx-auto">
              Loam is the ideal soil—a perfect balance of sand, silt, and clay that creates fertile ground where plants naturally thrive. Your business needs the same kind of balance.
            </p>
          </div>

          <div className="bg-loam-white rounded-2xl p-6 md:p-8 shadow-lg">
            {components.map((component, index) => (
              <div
                key={component.soil}
                className={`flex flex-col md:flex-row gap-4 ${
                  index < components.length - 1 ? 'mb-4 pb-4 border-b border-loam-tan/30' : ''
                }`}
              >
                <div className={`${component.bgColor} rounded-lg w-full md:w-32 h-20 flex items-center justify-center flex-shrink-0`}>
                  <span className={`${component.textColor} text-xl font-bold text-center px-2`}>
                    {component.keyword}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-loam-text mb-1">
                    {component.soil} – {component.business}
                  </h3>
                  <p className="text-base text-loam-text/80 leading-relaxed">
                    {component.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="white">
        <div className="text-center">
          <Button href="/#book-consultation" variant="primary">
            Book a consultation
          </Button>
        </div>
      </Section>
    </main>
  )
}



