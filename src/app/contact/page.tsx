"use client"

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Phone } from 'lucide-react'
import Script from 'next/script'

export default function Contact() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-4 text-center">
              GET IN TOUCH
            </h1>
            <div className="w-16 h-1 bg-darkGold mx-auto mb-12"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <ScrollReveal delay={0.2} stagger={0}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                    Let's Create Together
                  </h2>
                  <p className="text-lg text-charcoal/70 leading-relaxed">
                    Have questions about your project? Want to discuss your vision? We'd love to
                    hear from you. Please use the contact form and let's start creating something
                    beautiful.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Phone className="text-darkGold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">Response Time</h3>
                      <p className="text-charcoal/70">We typically respond within 24 business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.3} stagger={0}>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <iframe
                  data-tally-src="https://tally.so/embed/obMleN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="552"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Us"
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
