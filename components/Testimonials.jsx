'use client'
import React, {useEffect} from 'react'
import '@/styles/testimonials.css'

// const Testimonials = () => {
//   return (
//     <div>Testimonials</div>
//   )
// }

const Testimonials = () => {

  return (
    <section className="spacer">
      <div className="testimonial-section">
        <div className="testi-user-img">
          <div className="swiper-container gallery-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="u3" src="https://md-aqil.github.io/images/2091127763_1_1_1.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img className="u1" src="https://md-aqil.github.io/images/beautiful-beauty-face-2657838.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img className="u2" src="https://md-aqil.github.io/images/attractive-beautiful-beauty-1986684.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img className="u4" src="https://md-aqil.github.io/images/beautiful-beauty-face-2657838.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="user-saying">
          <div className="swiper-container testimonial">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="quote">
                  <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                  <p>
                    “This is the best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.”
                  </p>
                  <div className="name">-Ramkishor Verma-</div>
                  <div className="designation">University Student</div>
                </div>
              </div>
              {/* Repeat the above swiper-slide content for other testimonials */}
            </div>
            <div className="swiper-pagination swiper-pagination-white"></div>
          </div>
        </div>
      </div>
    </section>
  )
}



export default Testimonials
