'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function CoursePage() {
  const [openModule, setOpenModule] = useState<number | null>(null)

  const modules = [
    {
      number: 0,
      title: 'At Bat: Clarify Your Starting Point',
      outcomes: [
        'Have a one-page snapshot of where you are now.',
        'Define what a "home run" looks like for the next 90 days.',
        "Articulate why this work matters now and what's at stake if nothing changes.",
      ],
    },
    {
      number: 1,
      title: "1st Base: Define Who You're Really For",
      outcomes: [
        'Have 1–2 Ideal Customer Profiles that feel real, not made-up.',
        "Know who you're not for—so you can stop chasing the wrong people.",
        'Have language you can hand to a writer or designer without starting from scratch.',
      ],
    },
    {
      number: 2,
      title: '2nd Base: Design What They Actually Want',
      outcomes: [
        "Map your customers' pains, desires, and ideal outcomes.",
        'Draft a clear core offer that states who you help, what you help them do, and why it matters.',
        'Have several tested variations of your offer statement you can use and refine.',
      ],
    },
    {
      number: 3,
      title: "3rd Base: Map How You'll Deliver It",
      outcomes: [
        'Turn your process into a simple, visual path with 3–5 stages.',
        'Identify the essential assets you actually need (and what can wait).',
        'Spot gaps in your current messaging and experience that are holding you back.',
      ],
    },
    {
      number: 4,
      title: 'Home: Build Your 90-Day Game Plan',
      outcomes: [
        'Choose a realistic primary goal for the next 90 days.',
        'Break it into 3–5 strategic projects and their next steps.',
        'Design a weekly rhythm that keeps you moving without burning out.',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Section 1 – Hero */}
      <Section bgColor="cream" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-loam-text mb-6">
            The HomeRun Strategy Lab
          </h1>
          <p className="text-xl md:text-2xl text-loam-text/80 mb-6 text-balance">
            A 4-week, AI-assisted strategy lab to clarify your message, focus your offer, and build a 90-day plan you'll actually follow.
          </p>
          <p className="text-lg text-loam-text/70 mb-8">
            For founders, leaders, and small teams who are tired of guessing and want a simple, grounded plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">
              Enroll
            </Button>
            <Button variant="secondary">
              Join the waitlist
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 2 – What you'll walk away with */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-8 text-center">
            By the end of the HomeRun Strategy Lab, you'll have:
          </h2>
          <ul className="space-y-4 text-lg text-loam-text/80">
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span>A clear, simple brand story you can use in conversations, on your site, and in pitches.</span>
            </li>
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span>A defined ideal customer (and who you're not for).</span>
            </li>
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span>A focused core offer aligned with what your customers actually want.</span>
            </li>
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span>A 90-day action plan with 3–5 strategic projects and realistic next steps.</span>
            </li>
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span>A small set of AI prompts & workflows you can reuse to think, plan, and write faster.</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Section 3 – How it works */}
      <Section bgColor="cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-8 text-center">
            How it works
          </h2>
          <ul className="space-y-4 text-lg text-loam-text/80">
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span><strong>Format:</strong> 4 core modules + a kickoff module.</span>
            </li>
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span><strong>Time commitment:</strong> ~2–4 hours per week.</span>
            </li>
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span><strong>Tools:</strong> Short videos, guided worksheets, AI prompt library, optional check-ins.</span>
            </li>
            <li className="flex items-start">
              <span className="text-loam-teal mr-3 text-2xl">•</span>
              <span><strong>Access:</strong> On-demand access to all materials so you can revisit as your context shifts.</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Section 4 – Curriculum */}
      <Section bgColor="white" id="curriculum">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-12 text-center">
            Curriculum
          </h2>
          <div className="space-y-4">
            {modules.map((module) => (
              <div
                key={module.number}
                className="border border-loam-tan/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenModule(openModule === module.number ? null : module.number)}
                  className="w-full px-6 py-4 bg-loam-cream hover:bg-loam-tan/20 transition-colors text-left flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-loam-text text-lg">
                      Module {module.number} – {module.title}
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-loam-text transition-transform ${
                      openModule === module.number ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openModule === module.number && (
                  <div className="px-6 py-4 bg-loam-white">
                    <p className="font-semibold text-loam-text mb-3">
                      By the end of this module, you will:
                    </p>
                    <ul className="space-y-2 text-loam-text/80">
                      {module.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-loam-teal mr-2">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 5 – What happens after the course? */}
      <Section bgColor="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-6 text-center">
            After the lab: ways to go deeper.
          </h2>
          <p className="text-lg text-loam-text/80 mb-8 text-center max-w-2xl mx-auto">
            If you want help tuning or implementing what you build in the lab, there are a few ways we can keep working together.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card
              title="HomeRun Review & Tune-Up"
              description="Submit your strategy artifacts; I review and send back focused feedback and next steps."
            />
            <Card
              title="HomeRun Clarity Sprint"
              description="A 3–4 week 1:1 engagement to refine your message, offer, and 90-day plan."
            />
            <Card
              title="Teams & Workshops"
              description="Bring the HomeRun Method into your team with group access to the lab and live facilitation."
            />
          </div>
          <div className="text-center">
            <Button href="/work-with-me" variant="primary">
              See 1:1 and team options
            </Button>
          </div>
        </div>
      </Section>

      {/* Section 6 – FAQ */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-loam-text mb-2">
                Is this just for small businesses?
              </h3>
              <p className="text-loam-text/80">
                No. The framework works for solo founders, small teams, and leaders inside larger organizations—as long as you have some decision-making autonomy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-loam-text mb-2">
                Do I need to be "good with AI" to take this?
              </h3>
              <p className="text-loam-text/80">
                Nope. I'll give you simple copy/paste prompts and show you exactly where AI can help—and where you should ignore it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-loam-text mb-2">
                What if I don't finish in 4 weeks?
              </h3>
              <p className="text-loam-text/80">
                You can go at your own pace and revisit the modules whenever you need to. The 4-week structure just gives you a recommended rhythm.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-loam-text mb-2">
                Can my team go through this together?
              </h3>
              <p className="text-loam-text/80">
                Yes. Teams can buy multiple seats and optionally add a live workshop. See the "Work With Me" page for more details.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}

