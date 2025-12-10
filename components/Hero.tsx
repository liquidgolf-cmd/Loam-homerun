export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-loam-cream via-loam-white to-loam-cream px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-loam-text mb-6 text-balance leading-tight">
          You started this business. You have the answers. I just ask the right questions.
        </h1>
        <p className="text-xl md:text-2xl text-loam-text/80 text-balance">
          Transform from <span className="font-semibold text-loam-text">"stuck and scattered"</span> to <span className="font-semibold text-loam-teal">"clear and focused"</span>
        </p>
      </div>
    </section>
  )
}

