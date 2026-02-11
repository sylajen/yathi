import type { Metadata, Viewport } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yathi Designs | Custom Art & Bespoke Wedding Invitations',
  description:
    'Toronto-based custom art and luxury wedding stationery studio. Bespoke wedding invitations, day-of stationery, and premium printing for the Greater Toronto Area and Canada.',
  keywords: [
    'Toronto wedding invitations',
    'GTA wedding invitations',
    'Canada wedding stationery',
    'custom wedding invitations Toronto',
    'bespoke invitations',
    'day-of stationery',
    'luxury wedding stationery',
    'custom art studio Toronto',
    'wedding invitation designer GTA',
  ],
  authors: [{ name: 'Yathi Designs' }],
  metadataBase: new URL('https://yathidesigns.com'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Yathi Designs | Custom Art & Bespoke Wedding Invitations',
    description:
      'Toronto-based custom art and luxury wedding stationery. Bespoke invitations and day-of stationery serving the Greater Toronto Area and Canada.',
    url: 'https://yathidesigns.com',
    type: 'website',
    siteName: 'Yathi Designs',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yathi Designs | Custom Art & Bespoke Wedding Invitations',
    description:
      'Toronto-based custom art and luxury wedding stationery. Bespoke invitations and day-of stationery serving the Greater Toronto Area and Canada.',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
