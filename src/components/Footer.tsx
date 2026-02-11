'use client'

import Link from 'next/link'
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Yathi Designs</h3>
            <p className="text-cream/70">
              Custom art and bespoke wedding invitations for your special day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-cream/70">
              <li>
                <Link href="/about" className="hover:text-cream transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-cream transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-cream transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-cream transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/yathi_designs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@yathi_designs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3a5.5 5.5 0 0 0 4.5 2.2v3.2a8.6 8.6 0 0 1-4.5-1.4V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          <p className="text-center text-cream/50 text-sm">
            &copy; {new Date().getFullYear()} Yathi Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
