'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import Link from 'next/link'

export default function Invitations() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-4 text-center">
              SEMI-CUSTOM INVITATIONS
            </h1>
            <div className="w-16 h-1 bg-darkGold mx-auto mb-12"></div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} stagger={0}>
            <p className="text-xl text-charcoal/70 text-center leading-relaxed mb-12">
              Love at first sight. Affordable Luxe.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} stagger={0}>
            <div className="bg-white rounded-lg p-8 shadow-md mb-12">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                Beautiful Designs, Personalized for You
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                Don't want to start from scratch but still want something uniquely yours? Our
                semi-custom collection offers the perfect middle ground. Choose from our curated
                selection of pre-designed templates, then personalize them with your colors, text,
                and details.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                Each design in our collection is crafted with the same attention to detail as our
                fully custom work, but at a more accessible price point. It's luxury without the
                custom investment.
              </p>
            </div>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal delay={0.4} stagger={0}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Curated Designs',
                  description: 'Choose from our collection of beautiful, modern invitation templates',
                },
                {
                  title: 'Full Personalization',
                  description: 'Customize colors, fonts, and text to match your vision',
                },
                {
                  title: 'Fast Turnaround',
                  description: 'Get designed, approved, and printed quickly',
                },
                {
                  title: 'Affordable Luxury',
                  description: 'Premium quality at a more accessible price point',
                },
              ].map((feature, index) => (
                <div key={index} className="bg-cream rounded-lg p-6 border border-softBlush">
                  <h3 className="font-semibold text-lg text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.5} stagger={0}>
            <div className="text-center">
              <p className="text-lg text-charcoal/70 mb-8">
                Ready to explore our semi-custom collection?
              </p>
              <Link
                href="/quote"
                className="inline-block px-8 py-4 bg-darkGold text-cream rounded-full hover:bg-charcoal transition-colors font-semibold text-lg"
              >
                Browse & Customize
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
