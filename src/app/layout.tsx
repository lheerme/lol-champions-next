import type { Metadata } from 'next'
import { Cinzel } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'LOL Champions',
  description: 'League of Legends champions data',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${cinzel.className} bg-neutral-950 text-neutral-200 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
