'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import Link from 'next/link'

export default function DayOfStationery() {
  const dayOfItems = [
    'Welcome Signs',
    'Programs',
    'Menus',
    'Table Numbers',
    'Place Cards',
    'Seating Charts',
    'Escort Cards',
    'Thank You Cards',
  ]

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-4 text-center">
              DAY-OF STATIONERY
            </h1>
            <div className="w-16 h-1 bg-darkGold mx-auto mb-12"></div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} stagger={0}>
            <p className="text-xl text-charcoal/70 text-center leading-relaxed mb-12">
              Every detail matters on your special day. From the moment your guests arrive to the
              final farewell, cohesive stationery creates a beautiful, polished aesthetic that ties
              your celebration together. We design and produce all the paper goods needed to create
              a seamless guest experience.
            </p>
          </ScrollReveal>

          {/* Day-Of Items Grid */}
          <ScrollReveal delay={0.3} stagger={0}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {dayOfItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <p className="font-semibold text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.4} stagger={0}>
            <div className="bg-white rounded-lg p-8 shadow-md mb-12">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                Complete the Vision
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                While your invitations introduce the tone and style of your celebration, day-of
                stationery brings that aesthetic to life at every touchpoint. Whether it's guiding
                guests to their seats, setting the mood at the dinner table, or thanking them as
                they leave, each piece reinforces your design vision.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We work with you to select coordinating designs, paper stocks, and printing methods
                that complement your invitations perfectly. The result? A cohesive, thoughtfully
                designed celebration that guests will remember.
              </p>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.5} stagger={0}>
            <div className="text-center">
              <p className="text-lg text-charcoal/70 mb-8">
                Let's design the perfect day-of stationery for your event.
              </p>
              <Link
                href="/quote"
                className="inline-block px-8 py-4 bg-darkGold text-cream rounded-full hover:bg-charcoal transition-colors font-semibold text-lg"
              >
                Request a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
