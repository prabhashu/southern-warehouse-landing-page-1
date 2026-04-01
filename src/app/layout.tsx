import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Southern Design Warehouse Tampa | Premium Flooring, Tile & Remodeling Materials',
  description:
    'Southern Design Warehouse in Tampa, FL offers premium flooring, tile, cabinetry, and remodeling materials at warehouse prices. Serving homeowners, contractors, and builders across Tampa Bay, Carrollwood, and North Tampa.',
  keywords:
    'flooring Tampa, tile Tampa, remodeling materials Tampa, contractor supply Tampa, home renovation Tampa, warehouse pricing Tampa, Carrollwood flooring, Southern Design Warehouse',
  openGraph: {
    title: 'Southern Design Warehouse Tampa | Warehouse Prices, Showroom Experience',
    description:
      'Get premium remodeling materials at warehouse prices. Serving Tampa homeowners and contractors with in-stock selection and expert guidance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Southern Design Warehouse',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Design Warehouse Tampa',
    description: 'Premium remodeling materials at warehouse prices in Tampa, FL.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://southerndesignwarehouse.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#2D5233',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
