import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import {Divider} from "@nextui-org/divider";

export const metadata = {
  title: 'Explore Ease',
  description: 'Well, lets come back later',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      {/* <Head>
<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
</Head> */}
      <body>
        <Providers>
          <Header />
          {children}
          {/* <Divider  /> */}
          <Footer />
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script> */}
        </Providers>
      </body>
    </html>
  )
}
