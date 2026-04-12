import './globals.css'

export const metadata = {
  title: 'Joseph Dubon',
  description: 'Personal homepage for Joseph Dubon.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
