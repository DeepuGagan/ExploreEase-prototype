'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/styles/shelfSlide.css';

import { Pagination, Navigation } from 'swiper/modules';
import { EffectCards, Autoplay } from "swiper/modules";

const SlideShelf = ({sanValue}) => {
    
    const [swiperRef, setSwiperRef] = useState(null);
    const CardList = [
        {
            location: "Musee d'Orsay, 1 Rue De La Legion d'Honneur, 75007 Paris France",
            name: "The d'Orsay Museum",
            img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/10/26/7a/07.jpg',
            likes: '3265',
            price:'€35'
          },
            {
            location: "Louvre Pyramid 75001 Paris, France",
            name: "Louvre Museum",
            img: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/07/16/d6/53.jpg',
            likes: '8765',
            price:'€132.50'
          },
            {
            location: "45 Av. de la Bourdonnais, 75007 Paris, France",
            name: "Versailles Palace and Giverny Monet House",
            img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/89/4a/64.jpg',
            likes: '1732',
            price:'€240.60'
          },
            {
            location: "12 Av. George V, 75008 Paris, France",
            name: "Horse Cabaret Show",
            img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0d/ce/07/91.jpg',
            likes: '554',
            price:'€139'
          },
            {
            location: "1 Av. du Colonel Henri Rol-Tanguy, 75014 Paris, France",
            name: "Paris Catacombs",
            img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/10/2a/14/f6.jpg',
            likes: '106',
            price:'€55'
          },
            {
            location: "Hotel La Ville 70 Rue de Rivoli, 75004 Paris, France",
            name: "Night Walking Tour",
            img: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/07/1a/e0/71.jpg',
            likes: '755',
            price:'€15'
          }
        ];
    return (
        <>
        <div>
            <h2 style={{display:'flex',justifyContent:'center',marginTop:'50px',fontWeight:'900'}}>{sanValue}</h2>
        </div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={4}
                pagination={{
                    clickable: true,
                  }}
                //   modules={[Pagination]}
                // navigation={true}
                // modules={[Pagination, Navigation]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className='cardSS'>
                    {CardList.map((items, index) => (
                        <SwiperSlide>
                            <div >
                        <div className='contentSS' >
                            <div className='imageSS'>
                                <img class='inImage' src={items.img} style={{ borderRadius: '12px',marginBottom:'15px'}}></img>
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
                                <strong className='link' style={{ fontSize: '15px',textAlign:'left' }}>
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
                        </SwiperSlide>
                     ))} 
                </div>
               
            </Swiper>
        </>
    );

}
export default SlideShelf;
