import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyLoam from '@/components/WhyLoam'
import HomerunMethod from '@/components/HomerunMethod'
import Services from '@/components/Services'
import AIDifferentiator from '@/components/AIDifferentiator'
import Portfolio from '@/components/Portfolio'
import TargetAudience from '@/components/TargetAudience'
import Philosophy from '@/components/Philosophy'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AIDifferentiator />
      <WhyLoam />
      <HomerunMethod />
      <Portfolio />
      <TargetAudience />
      <Philosophy />
      <CTA />
    </main>
  )
}

