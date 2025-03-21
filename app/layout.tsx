import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StyleHub | Fashion That Celebrates Every Body",
  description: "Find the perfect clothing for your unique style",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">StyleHub</h3>
                  <p className="text-gray-300">Fashion That Celebrates Every Body</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/" className="text-gray-300 hover:text-white">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="text-gray-300 hover:text-white">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-gray-300 hover:text-white">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <p className="text-gray-300">Email: info@stylehub.com</p>
                  <p className="text-gray-300">Phone: (123) 456-7890</p>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
                <p>&copy; {new Date().getFullYear()} StyleHub. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'