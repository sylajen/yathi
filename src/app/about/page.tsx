'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function About() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-12">
              About Yathi Designs
            </h1>
            <div className="w-16 h-1 bg-darkGold mb-12"></div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Hello! I'm the creative force behind Yathi Designs. With a passion for design and
                a background in visual arts, I founded this studio to create bespoke invitations and
                stationery that tell your unique story.
              </p>

              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                After completing my degree in design at a leading design institute, I spent years
                working on various design projects before deciding to focus exclusively on what I
                love most: creating beautiful, meaningful stationery for life's most important moments.
              </p>

              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Every invitation I create is a labor of love. From the initial concept through final
                delivery, I'm committed to ensuring that your stationery reflects your vision and
                exceeds your expectations. My approach combines artistic creativity with meticulous
                attention to detail.
              </p>

              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Whether you're planning a wedding, engagement party, or special event, I'd love to
                collaborate with you and create something truly extraordinary.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 p-8 bg-white rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-6">Core Values</h3>
              <ul className="space-y-4">
                {[
                  'Creativity: Bringing your vision to life through innovative design',
                  'Quality: Using premium materials and printing techniques',
                  'Attention to Detail: Every element is carefully considered',
                  'Collaboration: Your input shapes the final product',
                  'Sustainability: Mindful choices in materials and processes',
                ].map((value, index) => (
                  <li key={index} className="flex gap-4 text-charcoal/80">
                    <span className="text-darkGold font-bold">•</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
