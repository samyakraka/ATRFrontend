import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body>{children}</body>
      </ClerkProvider>
    </html>
  )
}
