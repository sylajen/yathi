"use client"

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import Script from 'next/script'

export default function Quote() {

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-4 text-center">
              REQUEST A QUOTE
            </h1>
            <div className="w-16 h-1 bg-darkGold mx-auto mb-12"></div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} stagger={0}>
            <p className="text-lg text-charcoal/70 text-center mb-8">
              Tell us about your vision! We'll respond with a personalized quote and schedule a
              complimentary consultation to discuss your project in detail.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} stagger={0}>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <iframe
                data-tally-src="https://tally.so/embed/J9A8lr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="1200"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Request a Quote"
              ></iframe>
              <Script
                src="https://tally.so/widgets/embed.js"
                strategy="afterInteractive"
                onLoad={() => {
                  if (typeof window !== 'undefined' && (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally) {
                    ;(window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally?.loadEmbeds()
                  }
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
