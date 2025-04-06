'use client'
import React from 'react'
import '@/styles/shelfSlide.css';
import { entertainment } from '@/models/entertainment';
const CardList = [{
  location: 'Rome, Italy',
  name: 'Vatican Museums, Sistine Chapel &amp; St Peter’s Basilica Guided Tour',
  img: 'https://www.tripsavvy.com/thmb/x1VjfHkIcxv4wghYEp3T-s0nLHA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/paris-plaza-athenee-cour-jardin-ganberoni-22da38f352604c98bae42e6a369d439c.jpg',
  likes: '32,265',
  price:'₹6,810.47'
},
{
  location: 'London, England',
  name: 'Tuscany Day Trip from Florence: Siena, San Gimignano, Pisa and Lunch at a Winery',
  img: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/07/aa/5c/71.jpg',
  likes: '32,265',
  price:'₹9,663.50'
},
{
  location: 'Cancun, Riviera Maya & the Yucatan',
  name: 'Stonehenge, Windsor Castle, and Bath from London',
  img: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/74/4d/ab.jpg',
  likes: '32,265',
  price:'₹10,587.56'
}, {
  location: 'Paris, Île-de-France',
  name: 'Chichen Itza, Cenote and Valladolid All-Inclusive Tour',
  img: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/12/46/e6/24.jpg',
  likes: '32,265',
  price:'₹4,722.88'
},
{
  location: 'Paris, Île-de-France',
  name: 'Chichen Itza, Cenote and Valladolid All-Inclusive Tour',
  img: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/12/46/e6/24.jpg',
  likes: '32,265',
  price:'₹4,722.88'
},
{
  location: 'Paris, Île-de-France',
  name: 'Chichen Itza, Cenote and Valladolid All-Inclusive Tour',
  img: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/12/46/e6/24.jpg',
  likes: '32,265',
  price:'₹4,722.88'
},
{
  location: 'Paris, Île-de-France',
  name: 'Chichen Itza, Cenote and Valladolid All-Inclusive Tour',
  img: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/12/46/e6/24.jpg',
  likes: '32,265',
  price:'₹4,722.88'
}];

const Entertainment = () => {
  return (
    <div className='cardSS flex flex-row flex-wrap gap-12 p-4 mx-0'>
      {entertainment.map((items, index) => (
        <div className='w-[368px] ' key={items.name}>
          <div className='contentSS hover:scale-110 p-2 shadow-2xl rounded-xl' style={{margin:'0px'}}>
            <div className='imageSS'>
              <img class='inImage' src={items.img} style={{ borderRadius: '12px', marginBottom: '15px' }}></img>
            </div>

            <div className='textBlock' >
              <div className='location' style={{ display: 'flex', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="icon_location">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 3c-.25 0-.74.23-1.23 1.2-.12.24-.23.5-.32.8h3.1c-.1-.3-.2-.56-.32-.8C8.73 3.23 8.25 3 8 3zm1.81 3H6.2a10.42 10.42 0 000 4H9.8a10.42 10.42 0 000-4zm1.02 4a11.54 11.54 0 000-4h1.75a4.98 4.98 0 010 4h-1.75zm-1.28 1h-3.1c.1.3.2.56.32.8.5.97.98 1.2 1.23 1.2s.74-.23 1.23-1.2c.12-.24.23-.5.32-.8zm.36 1.62c.28-.45.51-1 .69-1.62H12a5.02 5.02 0 01-2.09 1.62zm0-9.24c.84.34 1.56.9 2.09 1.62h-1.4a6.83 6.83 0 00-.69-1.62zM6.1 12.62c-.28-.45-.51-1-.69-1.62H4a5.02 5.02 0 002.09 1.62zM5.17 10a11.53 11.53 0 010-4H3.42a4.98 4.98 0 000 4h1.75zm.23-5c.18-.62.41-1.17.69-1.62-.84.34-1.56.9-2.09 1.62h1.4z">
                  </path>
                </svg>
                <div style={{ fontSize: '12px', opacity: '0.7' }}>{items.location}</div>
              </div>
              <strong className='link' style={{ fontSize: '15px', textAlign: 'left' }}>
                {items.name}
              </strong>
              <div className='star' style={{ display: 'flex' }}>
                {Array(5).fill().map((_, index) => (
                  <p className='star' style={{ color: '#FED141', marginLeft: '2px' }}>&#x2605;</p>
                ))}
                <div className='likes'>{items.likes} </div>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: '12px', marginRight: '5px' }}>from</span>
                  <strong>{items.price}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Entertainment