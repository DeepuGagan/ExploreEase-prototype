'use client'
import React from 'react'
import SearchBar from './SearchBar'
import '@/styles/sliderSection.css'

const SliderSection = () => {
  return (
    <div className="video-container mb-24 backdrop-brightness-10">
      <video
        className="w-full h-full object-cover VideoPlay backdrop-brightness-10" autoPlay loop playsInline  muted
      >
        <source
          src="https://lonelyplanetstatic.imgix.net/marketing/best-in-travel/2024/video/campaign.mp4"
          type="video/mp4"
          className='backdrop-brightness-50'
        />
      </video>

      <div className="text-overlay text-5xl font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-20 truncate">
        <p className='font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >Travel like you mean it</p>
      </div>
      <div className='text-overlay text-base font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-44 ' > 
        <p className='text-sm text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Trips you couldn't plan even if you wanted to</p>
      </div>

      <SearchBar/>

    </div>
  );
}
// const SliderSection = () => {
//   return (
//     <>
//       <div>SliderSection</div>
//       <SearchBar />
//     </>
//   )
// }

export default SliderSection

