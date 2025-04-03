'use client'
import React, { useState, useEffect } from 'react';
import '@/styles/header.css'


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
        <div className="logo">
          <img src="https://source.unsplash.com/apple-logo-on-blue-surface-bIgpii04UIg" alt="logoooo" />
        </div>
        <ul >
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header
