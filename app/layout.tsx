import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'API Hub - One-Stop API Solution',
  description: 'Discover, test, and integrate APIs with ease',
  icons: [{ rel: 'icon', url: '/icon.svg' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Inline ThemeProvider component */}
        <div className="theme-provider" data-theme="dark">
          {children}
        </div>
      </body>
    </html>
  )
}
