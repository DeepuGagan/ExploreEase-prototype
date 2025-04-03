import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import {Divider} from "@nextui-org/divider";
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';


export const metadata = {
  title: 'Explore Ease',
  description: 'Well, lets come back later',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          <Header />
          {children}
          {/* <Divider  /> */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
