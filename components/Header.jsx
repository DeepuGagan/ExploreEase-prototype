'use client'
import React, { useState, useEffect } from 'react';
import '@/styles/header.css'
// import 'bootstrap/dist/css/bootstrap.css';


// const Header = () => {
//     return (
//       <h1 >Header</h1>
//     )
//   }

const Header = () => {
  const [isNavBlack, setIsNavBlack] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

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

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <div className="responsive-bar">
        <div className="logo">
          <img src="https://images.app.goo.gl/zNnfEw3uksFcS5iG7" alt="logo" />
        </div>
        <div className="menu" onClick={handleMenuClick}>
          <h4>Menu</h4>
        </div>
      </div>
      <nav className={isNavBlack ? 'black nav-item-container' : ''}>
        <div className="logo">
          <img src="http://www.mhf.org.au/media/zoo/images/yourlogohere_2cb8c31ab01096e7842d781ac311a776.png" alt="logo" />
        </div>
        <ul className={isMenuActive ? 'active ul-container' : ''}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <section className="sec1"></section>
      <section className="content">
        {/* Your content here */}
      </section>
      <section className="sec2"></section>
      <section className="content">
        {/* Your content here */}
      </section>
    </>
  );
}

export default Header
