import Section from '@/components/Section'
import Button from '@/components/Button'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Section bgColor="cream" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-loam-text mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-loam-text/80 mb-8">
            Ready to turn scattered ideas into a clear, focused strategy? Let's talk.
          </p>
        </div>
      </Section>

      <Section bgColor="white">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-loam-text mb-4">
              Email
            </h2>
            <a
              href="mailto:hello@loamstrategy.com"
              className="text-xl text-loam-teal hover:text-loam-teal/80 transition-colors"
            >
              hello@loamstrategy.com
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-loam-text mb-4">
              Book a Consultation
            </h2>
            <p className="text-lg text-loam-text/80 mb-6">
              Schedule a call to discuss how the HomeRun Method can help your business.
            </p>
            <Button href="/#book-consultation" variant="primary">
              Book a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}



