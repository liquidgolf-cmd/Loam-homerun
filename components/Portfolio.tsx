export default function Portfolio() {
  const apps = [
    {
      name: 'Finish Line Coach',
      description: 'A coaching app designed to help users achieve their goals and cross their personal finish lines.',
    },
    {
      name: 'Car Mileage Tracker',
      description: 'Track and manage your vehicle mileage for business or personal use with ease.',
    },
    {
      name: 'Business Development',
      description: 'Strategic tools and frameworks to accelerate business growth and development.',
    },
    {
      name: 'Relationship Quiz',
      description: 'An interactive app that helps users understand and improve their relationships.',
    },
    {
      name: '3 Word Journal',
      description: 'A minimalist journaling app that encourages reflection through three-word entries.',
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-loam-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-loam-text mb-4">
            Apps We've Built
          </h2>
          <p className="text-xl text-loam-text/80 max-w-3xl mx-auto">
            Real examples of business apps we've developed—each designed to solve specific problems and serve real customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div
              key={app.name}
              className="bg-gradient-to-br from-loam-cream to-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-loam-brown-200 hover:border-loam-green-400"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-loam-teal flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <span className="text-xs font-semibold text-loam-teal bg-loam-sage/20 px-2 py-1 rounded">
                  LIVE APP
                </span>
              </div>
              <h3 className="text-xl font-bold text-loam-text mb-2">
                {app.name}
              </h3>
              <p className="text-loam-text/80">
                {app.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-loam-text/80 mb-6">
            These apps demonstrate our ability to understand customer needs, design effective solutions, and build apps that truly serve businesses.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-loam-teal text-white rounded-lg font-semibold hover:bg-loam-teal/90 transition-colors"
          >
            Discuss Your App Idea
          </a>
        </div>
      </div>
    </section>
  )
}

