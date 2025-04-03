'use client'

import React from 'react'
import SliderSection from '@/components/SliderSection'
import GridAwesome from '@/components/cards/GridAwesome'
import LatestStories from '@/components/LatestStories'
import Carousel from '@/components/Carousel'
import Discover from '@/components/Discover'
import Testimonials from '@/components/Testimonials'
import Head from 'next/head'
import K1 from '@/components/K1'
import K2 from '@/components/K2'
import IntroHelp from '@/components/IntroHelp'
import IntroTravel from '@/components/IntroTravel'
import SlideShelf from '@/components/ShelfSlide'
import Shelfection from '@/components/ShelfSection'
import Link from 'next/link'
import places from '@/models/Places'
import MasonryGridGallery from '@/components/Gallery'


const Home = () => {
  return (
    <>
      {/* <SlideShelf/>
<Shelfection/>*/}
      {/* <IntroHelp/>
<IntroTravel/>  */}
      {/* <Carousel /> */}
      {/* <p>wsdefghj</p> */}
      {/* <K1/>
<K2/> */}
      {/* <Discover /> */}
      <SliderSection />
      <Carousel  heading='Based on your recent search' isTagLineNeeded={true} data={places} />
      <MasonryGridGallery/>
      <LatestStories />
      <div className='m-2 text-white' >
a
      </div>
      <Testimonials />
      <GridAwesome />
    </>
  )
}

export default Home