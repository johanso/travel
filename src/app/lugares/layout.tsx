import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import '../../styles/globals.css'
import Navbar from '../components/navbar/navbar'

const cairo = Cairo({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: "--Cairo",
  display: 'swap',
});
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: "--Inter",
})

export const metadata: Metadata = {
  title: 'Travel Bookins San Andres Islas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cairo.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
