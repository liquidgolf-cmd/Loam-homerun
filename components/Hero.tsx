export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-loam-cream via-loam-white to-loam-cream px-4 pt-20 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-loam-text mb-6 leading-tight">
          From<br />
          <span className="text-loam-sage text-6xl md:text-7xl lg:text-8xl">Stuck and Scattered</span><br />
          to clear and focused
        </h1>
        <p className="text-xl md:text-2xl text-loam-text/80 mb-4 text-balance">
          You started this business. You have the answers. We combine human strategy and AI tools to help you see what you've been missing, faster and with less guess work
        </p>
        <p className="text-lg md:text-xl text-loam-teal font-semibold text-balance">
          Turn scattered ideas into a clear, AI-enhanced plan
        </p>
      </div>
    </section>
  )
}

