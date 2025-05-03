import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adv. Julianna Nunes',
  description: 'Julianna Nunes - Advogada Previdenciária',
}

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_br">
      <body
        className={`antialiased bg-[#7E2941] text-white ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}
