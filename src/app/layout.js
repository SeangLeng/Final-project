'use client'
import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Footer from '@/components/footer'
import thumbnail from "@/app/images/teamShowcase.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PortISTAD',
  thumbnail: { thumbnail },
  description: 'This is the kind of project, which you can generate your cv and portfoio. Just try us to see what you can do.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
