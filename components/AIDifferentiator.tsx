export default function AIDifferentiator() {
  return (
    <section id="ai-differentiator" className="py-20 px-4 bg-gradient-to-br from-loam-green-50 to-loam-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-loam-teal bg-loam-sage/20 px-4 py-2 rounded-full">
              WHAT MAKES US DIFFERENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-loam-text mb-4">
            AI-Enhanced Strategy
          </h2>
          <p className="text-xl text-loam-text/80 max-w-3xl mx-auto">
            Human insight + AI-powered audits for owners who are growing but can't quite break through to the next level. We leverage AI to accelerate your discovery process—without replacing the human insight that makes strategy meaningful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-loam-white p-8 rounded-xl shadow-sm border-l-4 border-loam-teal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-loam-sage/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-loam-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-loam-text">
                Faster Insights
              </h3>
            </div>
            <p className="text-loam-text/80 text-lg">
              We use AI as a co-strategist to surface patterns in minutes that might take hours manually. You still have the answers—we just help you find them faster.
            </p>
          </div>

          <div className="bg-loam-white p-8 rounded-xl shadow-sm border-l-4 border-loam-teal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-loam-sage/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-loam-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-loam-text">
                Enhanced Discovery
              </h3>
            </div>
            <p className="text-loam-text/80 text-lg">
              AI doesn't replace our questioning process—it enhances it. We use AI to surface patterns and insights that inform better questions, leading to deeper self-discovery.
            </p>
          </div>
        </div>

        <div className="bg-loam-brown-900 text-white p-8 md:p-12 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The Best of Both Worlds
            </h3>
            <p className="text-lg text-loam-brown-200 leading-relaxed mb-6">
              Traditional consultants give you answers. AI tools give you data. We combine AI's speed and analytical power with The Homerun Method's proven framework—helping you discover <em>your</em> answers faster, with more clarity, and greater confidence.
            </p>
            <p className="text-lg font-semibold text-loam-green-300">
              You still have the answers. AI just helps us ask better questions, faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

