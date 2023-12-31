import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from "@clerk/localizations";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next E-commerce',
  description: 'Next E-commerce, project created by Laysa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          <main 
            className='bg-slate-900 h-max p-16'
          >
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
