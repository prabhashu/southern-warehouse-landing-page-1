'use client'

import { useScrollAnimations } from '@/hooks/useScrollAnimations'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProductBenefits from '@/components/ProductBenefits'
import WhoWeServe from '@/components/WhoWeServe'
import Gallery from '@/components/Gallery'
import CTASection from '@/components/CTASection'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  useScrollAnimations()

  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <WhyChooseUs />
      <ProductBenefits />
      <WhoWeServe />
      <Gallery />
      <CTASection />
      <FAQ />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
