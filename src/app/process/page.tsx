'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Proposal Request',
      description:
        "Start by submitting a quote request with your initial ideas and vision. We'll respond with a customized proposal and outline the next steps.",
    },
    {
      number: '02',
      title: "Let's Talk",
      description:
        "Schedule a complimentary consultation (in-person, email, or Google Meet). We'll discuss your style, theme, fonts, paper, colors, and embellishment options.",
    },
    {
      number: '03',
      title: 'Review Your Proposal',
      description:
        "After approval, a 50% non-refundable deposit secures your date. You'll complete a detailed questionnaire to guide our design process.",
    },
    {
      number: '04',
      title: 'Design & Proofing',
      description:
        'We create your first design draft and send it via email. Enjoy 3 complimentary rounds of revisions to perfect every detail.',
    },
    {
      number: '05',
      title: 'Printing & Assembly',
      description:
        'Once approved, your invitations go into production (2–6 weeks depending on printing method). Final payment due before printing begins.',
    },
    {
      number: '06',
      title: 'Day-Of & Delivery',
      description:
        "You'll receive a notification when your order is ready for pickup. Celebrate knowing every detail is beautifully executed.",
    },
  ]

  const turnaroundTimes = [
    { method: 'Digital Printing', design: '2–4 weeks', production: '5–10 business days' },
    {
      method: 'Digital + Assembly',
      design: '2–4 weeks',
      production: '10–15 business days',
    },
    {
      method: 'Complex (Foil/Letterpress)',
      design: '2–4 weeks',
      production: '3–5 weeks',
    },
    {
      method: 'Complex + Assembly',
      design: '2–4 weeks',
      production: '4–6 weeks',
    },
  ]

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-4 text-center">
              The Process
            </h1>
            <div className="w-16 h-1 bg-darkGold mx-auto mb-12"></div>
          </ScrollReveal>

          {/* Process Steps */}
          <div className="space-y-8 mb-20">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1} stagger={0}>
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <div className="text-darkGold">
                      <p className="font-serif text-4xl font-bold">{step.number}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
                        {step.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Turnaround Times */}
          <ScrollReveal delay={0.3} stagger={0}>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-8">Turnaround Times</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-darkGold">
                      <th className="text-left py-4 px-4 font-semibold text-charcoal">
                        Service
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-charcoal">
                        Design Period
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-charcoal">
                        Production Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {turnaroundTimes.map((row, index) => (
                      <tr key={index} className="border-b border-softBlush hover:bg-cream">
                        <td className="py-4 px-4 text-charcoal">{row.method}</td>
                        <td className="py-4 px-4 text-charcoal/70">{row.design}</td>
                        <td className="py-4 px-4 text-charcoal/70">{row.production}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.4} stagger={0}>
            <div className="mt-16 text-center">
              <p className="text-lg text-charcoal/70 mb-8">
                Ready to get started? Let's create something beautiful together.
              </p>
              <a
                href="/quote"
                className="inline-block px-8 py-4 bg-darkGold text-cream rounded-full hover:bg-charcoal transition-colors font-semibold text-lg"
              >
                Request a Quote
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
