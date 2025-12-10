export default function TargetAudience() {
  return (
    <section className="py-20 px-4 bg-loam-sage/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-loam-text mb-4">
            Who This Is For
          </h2>
        </div>

        <div className="bg-loam-white p-8 md:p-12 rounded-xl shadow-lg">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-loam-text mb-3">
                Small Business Owners
              </h3>
              <p className="text-lg text-loam-text/80">
                You've poured everything into your business. You're getting some traction, but the next level still feels out of reach. You're growing, but something's not working.
              </p>
            </div>

            <div className="border-t border-loam-brown-200 pt-6">
              <h4 className="text-xl font-semibold text-loam-text mb-3">
                You might be experiencing:
              </h4>
              <ul className="space-y-2 text-loam-text/80">
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>You're not sure how to get beyond your current plateau.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>You're spending time and money on people who aren't the right fit.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Your message feels fuzzy—you're trying to be "for everyone."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>You feel scattered, tired, and worried you might lose what you've built.</span>
                </li>
              </ul>
            </div>

            <div className="bg-loam-sage/20 p-6 rounded-lg mt-6">
              <p className="text-lg text-loam-text font-semibold">
                What you're really seeking: Clarity on what you might not be seeing, and an exciting new path forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

