import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gen Z Workspace',
  description: 'Gen Z Workspace is a platform that helps you create your own brand and grow your business.',
  generator: 'Gen Z Workspace',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Gen Z Workspace</title>
        <link rel="icon" href="/images/genz-logo.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} w-screen `}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
