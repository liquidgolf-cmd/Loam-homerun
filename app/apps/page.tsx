import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function AppsPage() {
  const apps = [
    {
      name: 'Finish Line Coach',
      description: 'A coaching app to help users set goals and actually cross the finish line.',
      href: 'https://finishline-2og1.vercel.app/',
    },
    {
      name: 'Car Mileage Tracker',
      description: 'A simple way to track and manage vehicle mileage for business or personal use.',
      href: 'https://car-mileage-tracker.vercel.app/',
    },
    {
      name: 'Home Run Coach',
      description: 'An AI coach that walks you through a 3-part path to build a HomeRun business, with real reports and a concrete action plan.',
      href: 'https://homeruncoach.vercel.app/',
    },
    {
      name: 'Relationship Quiz',
      description: 'An interactive app to help users understand and improve their relationships.',
      href: 'https://relationship-flash-cards.vercel.app/',
    },
    {
      name: '3 Word Journal',
      description: 'A minimalist journaling app for daily reflection in just three words.',
      href: 'https://3-word-journal-v1.vercel.app/',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section bgColor="cream" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-loam-text mb-6">
            Apps We've Built
          </h1>
          <p className="text-xl md:text-2xl text-loam-text/80 text-balance">
            Real tools we've built to turn ideas into something people actually use.
          </p>
        </div>
      </Section>

      {/* Apps Grid */}
      <Section bgColor="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {apps.map((app) => (
            <Card
              key={app.name}
              title={app.name}
              description={app.description}
              href={app.href}
            />
          ))}
        </div>

        {/* App Intake CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-loam-text/80 mb-6">
            If you have an idea for an app that you'd like help with, go through our app intake portal to define and submit your idea. We will then reach out to you with pricing and next steps. Your ideas will be kept completely confidential.
          </p>
          <Button href="https://business-app-intake.vercel.app/" variant="primary" target="_blank" rel="noopener noreferrer">
            Submit Your App Idea
          </Button>
        </div>
      </Section>
    </main>
  )
}



