export default function Portfolio() {
  const apps = [
    {
      name: 'Finish Line Coach',
      description: 'A coaching app designed to help users achieve their goals and cross their personal finish lines.',
      href: 'https://finishline-2og1.vercel.app/',
    },
    {
      name: 'Homerun to Happiness',
      description: "AI-powered life coaching that uses the HomeRun Method to help you discover your deepest WHY and build a clear path to the life you want.",
      href: 'https://homerun-happiness.vercel.app/',
    },
    {
      name: 'Relationship Quiz',
      description: 'An interactive app that helps users understand and improve their relationships.',
      href: 'https://relationship-flash-cards.vercel.app/',
    },
    {
      name: '3 Word Journal',
      description: 'A minimalist journaling app that encourages reflection through three-word entries.',
      href: 'https://3-word-journal-v1.vercel.app/',
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
            <a
              key={app.name}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-loam-cream to-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-loam-brown-200 hover:border-loam-green-400 block cursor-pointer"
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
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-loam-text/80 mb-6 max-w-3xl mx-auto">
            If you have an idea for an app that you'd like help with, go through our app intake portal to define and submit your idea. We will then reach out to you with pricing and next steps. Your ideas will be kept completely confidential.
          </p>
          <a
            href="https://business-app-intake.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-loam-teal text-white rounded-lg font-semibold hover:bg-loam-teal/90 transition-colors"
          >
            Submit Your App Idea
          </a>
        </div>
      </div>
    </section>
  )
}

