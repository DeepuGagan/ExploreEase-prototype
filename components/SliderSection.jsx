'use client'
import React from 'react'
import SearchBar from './SearchBar'
import '@/styles/sliderSection.css'

const SliderSection = () => {
  return (
    <div className="video-container">
      <video
        className="w-full h-full object-cover VideoPlay" autoPlay loop playsInline  muted
      >
        <source
          src="https://lonelyplanetstatic.imgix.net/marketing/best-in-travel/2024/video/campaign.mp4"
          type="video/mp4"
        />
      </video>

      <div className="text-overlay">
        <h1>Travel like you mean it</h1>
        <p>Trips you couldn't plan even if you wanted to</p>
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

