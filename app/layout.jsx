import '@/styles/globals.css'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Explore Ease',
  description: 'Well, lets come back later',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
{/* <Head>
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
</Head> */}
      <body>
        <Header />
        {children}
        <Footer />
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script> */}
      </body>
    </html>
  )
}
