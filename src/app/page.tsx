'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-6xl sm:text-7xl font-bold text-charcoal mb-6 tracking-tight"
          >
            Yathi Designs
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-darkGold to-darkGold/50 mx-auto mb-10 origin-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-charcoal/70 mb-8 leading-relaxed font-light"
          >
            Yathi Designs is a creative studio specializing in luxury wedding and event stationery,
            custom art, and bespoke invitations designed with intention. Every detail reflects your
            unique vision and style.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold text-charcoal text-center mb-4">
              Custom, Semi-Custom & Event-Day Paper Goods
            </h2>
          </ScrollReveal>
          <div className="w-16 h-1 bg-darkGold mx-auto mb-16"></div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Invitations',
                description: 'Every detail is tailored to your vision. From concept to printing, we craft invitations that set the perfect tone for your celebration.',
                href: '/quote',
              },
              {
                title: 'Semi-Custom Invitations',
                description: 'Love at first sight. Affordable Luxe. Choose from our curated designs and personalize them to make them uniquely yours.',
                href: '/invitations',
              },
              {
                title: 'Day-Of Stationery',
                description: 'For a cohesive aesthetic. Menus, place cards, programs, and more—complete the vision from the invitation to the final detail.',
                href: '/dayof-stationery',
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.15} stagger={0}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square bg-gradient-to-br from-softBlush to-darkGold/20"></div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-darkGold hover:text-charcoal transition-colors font-semibold"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-serif text-4xl font-bold text-charcoal mb-4">
                PRINTING SERVICES FOR STATIONERY DESIGNERS
              </h2>
              <div className="w-16 h-1 bg-darkGold mx-auto mb-8"></div>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                We offer a full range of professional printing services including digital printing
                with white ink, letterpress, hot foil stamping, and large-format printing. Perfect
                for designers looking to bring their creations to life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-serif text-4xl font-bold text-charcoal mb-8">
                SETTING THE TONE FOR YOUR SPECIAL DAY
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-10">
                Your invitations are the first impression your guests will have of your celebration.
                They set the mood, reflect your personality, and create anticipation for the event
                to come. Let's create something extraordinary together.
              </p>
              <Link
                href="/quote"
                className="inline-block px-8 py-4 bg-darkGold text-cream rounded-full hover:bg-charcoal transition-colors font-semibold text-lg"
              >
                Let's Work Together
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </main>
  )
}
