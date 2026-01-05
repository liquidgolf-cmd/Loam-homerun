import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'
import BasepathIllustration from '@/components/BasepathIllustration'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section 1 – Hero */}
      <Section bgColor="cream" padding="lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Video Placeholder - Left Side */}
            <div className="order-2 md:order-1">
              <div className="relative w-full aspect-video bg-loam-brown/10 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4 text-loam-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <p className="text-loam-text/60 text-sm font-medium">
                      Video placeholder
                    </p>
                    <p className="text-loam-text/40 text-xs mt-2">
                      Course overview video will appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-loam-text mb-6 leading-tight">
                Clarity begins with the right questions
              </h1>
              <p className="text-xl md:text-2xl text-loam-text/80 mb-8 text-balance">
                A practical framework that turns honest reflection into a sharper message, stronger offers, and a focused roadmap
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                <Button href="/course" variant="primary">
                  View the course
                </Button>
                <Button href="/work-with-me" variant="secondary">
                  Work with me 1:1
                </Button>
              </div>
              <p className="text-base md:text-lg text-loam-text/70">
                For founders, leaders, and small teams who are growing, but can't quite break through to the next level.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2 – "Is this you?" */}
      <Section bgColor="white" id="is-this-you">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-4">
            Is this you?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-loam-text mb-4">
              You might be here if…
            </h3>
            <ul className="space-y-3 text-loam-text/80">
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
          <div>
            <h3 className="text-xl font-semibold text-loam-text mb-4">
              What you actually want…
            </h3>
            <ul className="space-y-3 text-loam-text/80">
              <li className="flex items-start">
                <span className="text-loam-teal mr-2">•</span>
                <span>Clarity on what you're not seeing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-loam-teal mr-2">•</span>
                <span>A sharper message and focused offer.</span>
              </li>
              <li className="flex items-start">
                <span className="text-loam-teal mr-2">•</span>
                <span>A simple plan for the next 90 days.</span>
              </li>
              <li className="flex items-start">
                <span className="text-loam-teal mr-2">•</span>
                <span>Confidence that your strategy matches your reality.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Button href="/course#curriculum" variant="primary">
            See what we build in the course
          </Button>
        </div>
      </Section>

      {/* Section 3 – The Homerun Method */}
      <Section bgColor="cream" id="homerun-method">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-4">
            The Homerun Method
          </h2>
          <p className="text-lg md:text-xl text-loam-text/80 max-w-3xl mx-auto">
            A simple framework that guides you through the foundational questions every business needs to answer.
          </p>
        </div>

        {/* Framework Diagram */}
        <div className="relative mb-12">
          <div className="relative">
            {/* Grid layout for precise alignment */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 relative">
              {/* AT BAT */}
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-loam-brown text-white rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4">
                  <span className="font-bold text-xs md:text-sm">AT BAT</span>
                </div>
                <div className="bg-loam-white border border-loam-tan/30 rounded-lg p-4 w-[200px] h-[80px] flex items-center justify-center text-center">
                  <p className="text-sm md:text-base text-loam-text">Why are you doing what you do?</p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                  <svg className="w-6 h-6 text-loam-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* 1ST BASE */}
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-loam-teal text-white rounded-lg w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4">
                  <span className="font-bold text-xs md:text-sm">1ST BASE</span>
                </div>
                <div className="bg-loam-white border border-loam-tan/30 rounded-lg p-4 w-[200px] h-[80px] flex items-center justify-center text-center">
                  <p className="text-sm md:text-base text-loam-text">Who are your customers really?</p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                  <svg className="w-6 h-6 text-loam-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* 2ND BASE */}
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-loam-teal text-white rounded-lg w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4">
                  <span className="font-bold text-xs md:text-sm">2ND BASE</span>
                </div>
                <div className="bg-loam-white border border-loam-tan/30 rounded-lg p-4 w-[200px] h-[80px] flex items-center justify-center text-center">
                  <p className="text-sm md:text-base text-loam-text">What do they want?</p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                  <svg className="w-6 h-6 text-loam-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* 3RD BASE */}
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-loam-teal text-white rounded-lg w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4">
                  <span className="font-bold text-xs md:text-sm">3RD BASE</span>
                </div>
                <div className="bg-loam-white border border-loam-tan/30 rounded-lg p-4 w-[200px] h-[80px] flex items-center justify-center text-center">
                  <p className="text-sm md:text-base text-loam-text">How do we get them what they want?</p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                  <svg className="w-6 h-6 text-loam-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* HOME */}
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-loam-teal text-white w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                  <span className="font-bold text-xs md:text-sm">HOME</span>
                </div>
                <div className="bg-loam-white border border-loam-tan/30 rounded-lg p-4 w-[200px] h-[80px] flex items-center justify-center text-center">
                  <p className="text-sm md:text-base text-loam-text">Why does what you provide matter?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button href="/course" variant="primary">
            View the HomeRun Strategy Lab
          </Button>
        </div>
      </Section>

      {/* Section 4 – "Choose your path" */}
      <Section bgColor="white" id="choose-your-path">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-4">
            Choose your path to clarity.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            label="Course"
            title="The HomeRun Strategy Lab"
            description="Learn the HomeRun Method in a 4-week, AI-assisted strategy lab. By the end, you'll have a clear message, a focused offer, and a realistic 90-day plan."
            href="/course"
          >
            <div className="mt-4">
              <Button href="/course" variant="primary" className="w-full">
                Explore the course
              </Button>
            </div>
          </Card>
          <Card
            label="Work with me"
            title="1:1 Strategy & Implementation"
            description="Already know you want hands-on help? I'll walk the bases with you through focused strategy sprints, reviews, and implementation support."
            href="/work-with-me"
          >
            <div className="mt-4">
              <Button href="/work-with-me" variant="primary" className="w-full">
                Work with me 1:1
              </Button>
            </div>
          </Card>
          <Card
            label="For teams"
            title="Teams & Organizations"
            description="Want your team aligned around a shared story and plan? Bring the HomeRun Method into your organization with team access to the course, workshops, and ongoing advisory."
            href="/work-with-me#teams"
          >
            <div className="mt-4">
              <Button href="/work-with-me#teams" variant="primary" className="w-full">
                For teams & companies
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Section 5 – Why Loam Strategy? */}
      <Section bgColor="sage" id="why-loam">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-4">
            Why Loam Strategy?
          </h2>
          <p className="text-lg md:text-xl text-loam-text/80 max-w-3xl mx-auto">
            Loam is the ideal soil—a balance of sand, silt, and clay that creates fertile ground where things naturally grow. Your business needs the same kind of balance: clarity, story, design, and strategy working together.
          </p>
        </div>

        <div className="bg-loam-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-loam-sage text-white rounded-lg w-full md:w-32 h-20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-center px-2">Clarity</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-loam-text mb-1">
                  Organic Matter – Insight
                </h3>
                <p className="text-base text-loam-text/80 leading-relaxed">
                  The living element that enriches everything below. Through blind spot audits and insights, we bring awareness to what's hidden.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-loam-cream text-loam-text rounded-lg w-full md:w-32 h-20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-center px-2">Narrative</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-loam-text mb-1">
                  Silt – Connection
                </h3>
                <p className="text-base text-loam-text/80 leading-relaxed">
                  The medium that connects everything. Your story links strategy to design, values to audience, creating meaning and resonance.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-loam-tan text-loam-text rounded-lg w-full md:w-32 h-20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-center px-2">Design</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-loam-text mb-1">
                  Sand – Expression
                </h3>
                <p className="text-base text-loam-text/80 leading-relaxed">
                  Provides texture and flow. Design gives your strategy tangible expression and allows your brand to adapt and move.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-loam-brown text-white rounded-lg w-full md:w-32 h-20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-center px-2">Strategy</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-loam-text mb-1">
                  Clay – Foundation
                </h3>
                <p className="text-base text-loam-text/80 leading-relaxed">
                  The binding agent. Strategy provides structure, holds nutrients, and gives direction to everything that grows above it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-loam-text mb-4">
            AI-enhanced, human first.
          </h3>
          <p className="text-lg text-loam-text/80 max-w-3xl mx-auto">
            We use AI to accelerate discovery—not to replace the conversation. AI helps surface patterns and possibilities. The real work is in the questions we ask and the decisions you make.
          </p>
        </div>
      </Section>

      {/* Section 6 – Apps We've Built */}
      <Section bgColor="white" id="apps">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-4">
            Real tools we've built.
          </h2>
          <p className="text-lg md:text-xl text-loam-text/80 max-w-3xl mx-auto">
            Strategy is only useful if it turns into something real. Here are a few apps we've built to turn ideas into tools people actually use.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card
            title="Finish Line Coach"
            description="A coaching app to help users set goals and actually cross the finish line."
            href="https://finishline-2og1.vercel.app/"
          />
          <Card
            title="Car Mileage Tracker"
            description="A simple way to track and manage vehicle mileage for business or personal use."
            href="https://car-mileage-tracker.vercel.app/"
          />
          <Card
            title="Home Run Coach"
            description="An AI coach that walks you through a 3-part path to build a HomeRun business, with real reports and a concrete action plan."
            href="https://homeruncoach.vercel.app/"
          />
          <Card
            title="Relationship Quiz"
            description="An interactive app to help users understand and improve their relationships."
            href="https://relationship-flash-cards.vercel.app/"
          />
          <Card
            title="3 Word Journal"
            description="A minimalist journaling app for daily reflection in just three words."
            href="https://3-word-journal-v1.vercel.app/"
          />
        </div>
        <div className="text-center">
          <Button href="/apps" variant="primary">
            See all apps
          </Button>
        </div>
      </Section>

      {/* Section 7 – Final CTA */}
      <Section bgColor="cream" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-6">
            Ready to see what you can't see yet?
          </h2>
          <p className="text-lg md:text-xl text-loam-text/80 mb-8 text-balance">
            Whether you want to learn the HomeRun Method yourself or work through it together, we'll build a strategy that actually fits your life and your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/course" variant="primary">
              Start with the course
            </Button>
            <Button href="#book-consultation" variant="secondary">
              Book a consultation
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 8 – Book a Consultation */}
      <Section bgColor="white" id="book-consultation">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-6">
            Book a Consultation
          </h2>
          <p className="text-lg text-loam-text/80 mb-8">
            Schedule a time to discuss how the HomeRun Method can help your business.
          </p>
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3sa-LCDmgRG7i7A9PM8T9MHZVD1hLNSwpPQilB3_FVN9zmhQ85-phLbHMkew7__aeXNHZmQeZe?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              className="w-full h-[500px] md:h-[600px]"
              title="Book a consultation"
              allow="calendar"
            />
          </div>
        </div>
      </Section>
    </main>
  )
}
