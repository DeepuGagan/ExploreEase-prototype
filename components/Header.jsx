'use client'
import React, { useState, useEffect } from 'react';
import '@/styles/header.css'
import logo from "@/public/assets/icons/exploreEaseLogo.png";
import Image from 'next/image';
import { Tooltip, Button } from "@nextui-org/react";
import Destinations from './headerContents/Destinations';
import Guides from './headerContents/Guides';
import Inspiration from './headerContents/Inspiration';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLightbulb, faBook, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//     return (
//       <h1 >Header</h1>
//     )
//   }

const Header = () => {
  const [isNavBlack, setIsNavBlack] = useState(false);
  // const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY) {
        setIsNavBlack(true);
      } else {
        setIsNavBlack(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const handleMenuClick = () => {
  //   setIsMenuActive(!isMenuActive);
  // };

  return (
    <>
      <nav className={isNavBlack ? 'black nav-item-container' : ''}>

        <Link href={'/'} >
          <div className="logo">
            <Image src={logo} alt="logoooo" />
          </div>
        </Link>


        <div className='flex flex-row gap-8 ml-72 mt-2 '>
          <Link href={'/planner'}>
            <Button variant="bordered" className={!isNavBlack ? 'text-white hover:text-black border-1 hover:shadow-lg hover:bg-white hover:scale-125' : 'text-black hover:text-white hover:bg-black hover:scale-125'}>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Planner
            </Button>
          </Link>
          <Tooltip content={<Destinations />}>
            <Button variant="bordered" className={!isNavBlack ? 'text-white hover:text-black border-1 hover:shadow-lg hover:bg-white hover:scale-125' : 'text-black hover:text-white hover:bg-black hover:scale-125'}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Destinations
            </Button>
          </Tooltip>
          <Tooltip content={<Inspiration />}>
            <Button variant="bordered" className={!isNavBlack ? 'text-white hover:text-black border-1 hover:shadow-lg hover:bg-white hover:scale-125' : 'text-black hover:text-white hover:bg-black hover:scale-125'}>
              <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
              Inspirations
            </Button>
          </Tooltip>
          <Tooltip content={<Guides />}>
            <Button variant="bordered" className={!isNavBlack ? 'text-white hover:text-black border-1 hover:shadow-lg hover:bg-white hover:scale-125' : 'text-black hover:text-white hover:bg-black hover:scale-125'}>
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              Guides
            </Button>
          </Tooltip>
        </div>
        {/* <Destinations/> */}
      </nav>
    </>
  );
}

export default Header
