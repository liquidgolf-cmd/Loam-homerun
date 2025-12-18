export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-loam-brown to-loam-text text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to See What You Can't See?
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Let's work together to discover the answers you already have. Book a consultation to learn how The Homerun Method can help transform your business.
        </p>
        <a
          href="https://calendly.com/liquidgolf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-loam-teal text-white rounded-lg font-semibold text-lg hover:bg-loam-teal/90 transition-colors shadow-lg hover:shadow-xl"
        >
          Book a Consultation
        </a>
        <p className="mt-6 text-white/80">
          Or email us at{' '}
          <a href="mailto:hello@loamstrategy.com" className="underline hover:text-white">
            hello@loamstrategy.com
          </a>
        </p>
      </div>
    </section>
  )
}

