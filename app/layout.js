import './globals.css'
    import { Inter } from 'next/font/google'
    import { ThemeProvider } from "@/components/theme-provider"

    const inter = Inter({ subsets: ['latin'] })

    export const metadata = {
      title: 'Medical Lab QC',
      description: 'Medical Lab Quality Control SaaS App',
    }

    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </html>
      )
    }
