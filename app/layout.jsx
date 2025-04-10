'use client'
import React, {useState,useEffect} from 'react';
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import {Divider} from "@nextui-org/divider";
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import pageImage from "@/public/assets/images/page.png";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// export const metadata = {
//   title: 'Explore Ease',
//   description: 'Well, lets come back later',
// }

export default function RootLayout({ children }) {
  const [state,setState] = useState(true)
  const pathname = usePathname()
  console.log(pathname)

  const handleClick = () => {
    setState(false)
  }

  useEffect(() => {
    if (pathname === '/planner') {
      setState(false)
    }
  }, [pathname])
  console.log(state)

  return (
    <html lang="en" className='light'>

      {
        state && pathname!=='/planner' ?
          <body>
            <div className="relative w-full h-screen overflow-hidden">
              <Image
                src={pageImage}
                alt="logoooo"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <button onClick={handleClick} className="absolute bottom-5 right-5 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-900 hover:scale-110 hover:shadow-xl ">
                Explore Ease
              </button>
            </div>
          </body>
          :
          <body>
            <Providers>
              <Header />
              {children}
              {/* <Divider  /> */}
              <Footer />
            </Providers>
          </body>
      }

    </html>
  )
}
