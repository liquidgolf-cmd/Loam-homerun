'use client'

import { useState } from 'react'

export default function Services() {
  const [activeTab, setActiveTab] = useState<'strategy' | 'ai'>('strategy')

  const strategyServices = [
    {
      title: 'Brand Strategy',
      description: 'Discover your authentic brand identity and how to communicate it effectively to the right audience.',
    },
    {
      title: 'Business Strategy',
      description: 'Identify blind spots and develop a clear path forward that aligns with your true purpose and customer needs.',
    },
    {
      title: 'App Strategy',
      description: 'Determine if an app is right for your business and how it should serve your customers.',
    },
    {
      title: 'App Development Support',
      description: 'Get guidance on building apps that truly serve your customers and support your business goals.',
    },
  ]

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
    <section id="services" className="py-20 px-4 bg-loam-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-loam-text mb-4">
            Services
          </h2>
          <p className="text-xl text-loam-text/80 max-w-3xl mx-auto">
            Comprehensive strategy consulting that helps you see what you can't see.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-loam-white rounded-lg p-1 shadow-md border border-loam-tan/30">
            <button
              onClick={() => setActiveTab('strategy')}
              className={`px-6 py-3 rounded-md font-semibold text-lg transition-all ${
                activeTab === 'strategy'
                  ? 'bg-loam-teal text-white shadow-md'
                  : 'text-loam-text/70 hover:text-loam-text'
              }`}
            >
              Strategy Consulting
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-3 rounded-md font-semibold text-lg transition-all ${
                activeTab === 'ai'
                  ? 'bg-loam-teal text-white shadow-md'
                  : 'text-loam-text/70 hover:text-loam-text'
              }`}
            >
              AI Audit Services
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          {/* Strategy Consulting Tab */}
          <div
            className={`transition-all duration-300 ${
              activeTab === 'strategy'
                ? 'opacity-100 block'
                : 'opacity-0 hidden absolute inset-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {strategyServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-loam-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-t-4 border-loam-teal transform hover:-translate-y-1"
                >
                  <h4 className="text-2xl font-bold text-loam-text mb-4">
                    {service.title}
                  </h4>
                  <p className="text-loam-text/80 text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-loam-text/80 max-w-3xl mx-auto">
                These services are delivered through advanced, personalized consultations tailored to your specific needs. Contact us for pricing and availability.
              </p>
            </div>
          </div>

          {/* AI Audit Services Tab */}
          <div
            className={`transition-all duration-300 ${
              activeTab === 'ai'
                ? 'opacity-100 block'
                : 'opacity-0 hidden absolute inset-0'
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-loam-text mb-4">
                Start with Free AI Audits
              </h3>
              <p className="text-lg text-loam-text/80 max-w-3xl mx-auto">
                All our AI-powered audits are free to use. Get instant insights, then decide if you want deeper, personalized support.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {aiAuditServices.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="bg-loam-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-t-4 border-loam-teal transform hover:-translate-y-1 block cursor-pointer relative"
                >
                  {/* FREE Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-3xl md:text-4xl font-bold text-loam-teal">
                      FREE
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-loam-teal bg-loam-sage/20 px-3 py-1 rounded-full">
                      AI-POWERED
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-loam-text mb-4 pr-16">
                    {service.title}
                  </h4>
                  <p className="text-loam-text/80 text-lg">
                    {service.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

