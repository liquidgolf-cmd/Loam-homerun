import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen">
      {/* Section 1 – Hero */}
      <Section bgColor="cream" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-loam-text mb-6">
            Work with me.
          </h1>
          <p className="text-xl md:text-2xl text-loam-text/80 mb-4 text-balance">
            If you'd rather not do this alone, I'll walk the bases with you—one decision at a time.
          </p>
          <p className="text-lg text-loam-text/70">
            Here are a few focused ways we can work together after (or alongside) the HomeRun Strategy Lab.
          </p>
        </div>
      </Section>

      {/* Section 2 – Offer 1: HomeRun Review & Tune-Up */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-6">
            HomeRun Review & Tune-Up
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">What it is:</h3>
              <p className="text-loam-text/80">
                You send over your Ideal Customer profile, core offer, and 90-day plan. I review everything and give you focused feedback on what to sharpen, cut, or emphasize.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">Perfect for:</h3>
              <p className="text-loam-text/80">
                People who have a draft and want a second set of experienced eyes before they lock it in.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">What you get:</h3>
              <ul className="space-y-2 text-loam-text/80">
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>A 20–30 minute Loom walkthrough or a 45-minute live review call.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>2–3 key changes that will make the biggest difference.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>A short list of "do this next" actions.</span>
                </li>
              </ul>
            </div>
          </div>
          <Button variant="primary" href="mailto:hello@loamstrategy.com">
            Request a review
          </Button>
        </div>
      </Section>

      {/* Section 3 – Offer 2: HomeRun Clarity Sprint (1:1) */}
      <Section bgColor="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-6">
            HomeRun Clarity Sprint
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">What it is:</h3>
              <p className="text-loam-text/80">
                A 3–4 week, 1:1 engagement built on the HomeRun Method. We meet live, use AI-powered audits, and build your strategy collaboratively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">Perfect for:</h3>
              <p className="text-loam-text/80">
                Business owners and leaders who want to move faster with a trusted guide—not just learn a framework.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">What we'll do:</h3>
              <ul className="space-y-2 text-loam-text/80">
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Clarify your "why now" and your constraints.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Sharpen your audience, core offer, and story.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Build a 90-day strategy map and action plan.</span>
                </li>
              </ul>
            </div>
          </div>
          <Button variant="primary" href="https://calendly.com/liquidgolf" target="_blank" rel="noopener noreferrer">
            Apply for a sprint
          </Button>
        </div>
      </Section>

      {/* Section 4 – Offer 3: Teams & Organizations */}
      <Section bgColor="white" id="teams">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-6">
            For teams & organizations.
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">What it is:</h3>
              <p className="text-loam-text/80">
                Bring the HomeRun Method into your organization so your team shares the same language, story, and priorities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">Options:</h3>
              <ul className="space-y-2 text-loam-text/80">
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Team access to the HomeRun Strategy Lab.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>A 2–3 hour virtual or half-day in-person workshop.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Ongoing advisory support to keep your strategy alive.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">Outcomes:</h3>
              <ul className="space-y-2 text-loam-text/80">
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Aligned language and story across your team.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Clear 90-day priorities everyone can see.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Better connection between leadership, marketing, and day-to-day work.</span>
                </li>
              </ul>
            </div>
          </div>
          <Button variant="primary" href="https://calendly.com/liquidgolf" target="_blank" rel="noopener noreferrer">
            Talk about your team
          </Button>
        </div>
      </Section>

      {/* Section 5 – Offer 4: Turn Your Framework into an App */}
      <Section bgColor="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-loam-text mb-6">
            Turn your framework into an app.
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">What it is:</h3>
              <p className="text-loam-text/80">
                For coaches, consultants, and organizations who want to turn their IP into a simple, focused app—like Finish Line Coach or Home Run Coach.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-loam-text mb-2">Process:</h3>
              <ul className="space-y-2 text-loam-text/80">
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Strategy & scope call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Wireframe & flow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Build or oversee build</span>
                </li>
                <li className="flex items-start">
                  <span className="text-loam-teal mr-2">•</span>
                  <span>Launch kit and usage ideas</span>
                </li>
              </ul>
            </div>
          </div>
          <Button variant="primary" href="https://business-app-intake.vercel.app/" target="_blank" rel="noopener noreferrer">
            Share your app idea
          </Button>
        </div>
      </Section>
    </main>
  )
}

