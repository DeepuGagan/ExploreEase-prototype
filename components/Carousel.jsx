'use client'
import { useState, useRef, useEffect } from 'react';
import '@/styles/carousel.css'
// Data
// import data from '@/utils/data.json'
import places from '@/models/Places';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SAMPLE_DATA = [
  { id: "01", color: "#014f5e" },
  { id: "02", color: "#015a6b" },
  { id: "03", color: "#016679" },
  { id: "04", color: "#017186" },
  { id: "05", color: "#1a7f92" },
  { id: "06", color: "#348d9e" },
  { id: "07", color: "#4d9caa" },
  { id: "08", color: "#67aab6" },
  { id: "09", color: "#80b8c3" },
];

function App() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}


// const Carousel = () => {
//   const maxScrollWidth = useRef(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = useRef(null);

//   const movePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevState) => prevState - 1);
//     }
//   };

//   const moveNext = () => {
//     if (
//       carousel.current !== null &&
//       carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
//     ) {
//       setCurrentIndex((prevState) => prevState + 1);
//     }
//   };

//   const isDisabled = (direction) => {
//     if (direction === 'prev') {
//       return currentIndex <= 0;
//     }

//     if (direction === 'next' && carousel.current !== null) {
//       return (
//         carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
//       );
//     }

//     return false;
//   };

//   useEffect(() => {
//     if (carousel !== null && carousel.current !== null) {
//       carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
//     }
//   }, [currentIndex]);

//   useEffect(() => {
//     maxScrollWidth.current = carousel.current
//       ? carousel.current.scrollWidth - carousel.current.offsetWidth
//       : 0;
//   }, []);

//   return (
//     <div className="carousel my-12 mx-auto">
//       <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
//         Our epic carousel
//       </h2>
//       <div className="relative overflow-hidden">
//         <div className="flex justify-between absolute top left w-full h-full">
//           <button
//             onClick={movePrev}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('prev')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="sr-only">Prev</span>
//           </button>
//           <button
//             onClick={moveNext}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('next')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </button>
//         </div>
//         <div
//           ref={carousel}
//           className="carousel-container relative flex gap-1 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//         >
//           {data.resources.map((resource, index) => {
//             return (
//               <div
//                 key={index}
//                 className="carousel-item text-center relative w-64 h-64 snap-start"
//               >
//                 <a
//                   href={resource.link}
//                   className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
//                 >
//                   <img
//                     src={resource.imageUrl || ''}
//                     alt={resource.title}
//                     className="w-full aspect-square hidden"
//                   />
//                 </a>
//                 <a
//                   href={resource.link}
//                   className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                 >
//                   <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                     {resource.title}
//                   </h3>
//                 </a>
//               </div>
//             );
//           })}
//           <div  className="carousel-item text-center relative w-64 h-64 snap-start" >
// <App/> 
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };


const Place = ({ name, image, alt, tagline, customHeight }) => {
  return (
    <article className={`relative  isolate flex flex-col flex-auto justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-96 mx-6 my-4 transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg ${customHeight ? 'h-[600px]':''}`}>
      <img
        alt={alt}
        className={`absolute inset-0 w-full object-cover ${customHeight ? 'h-[600px]':''}`}
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">
        {name}
      </h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        {tagline}
      </div>
    </article>
  );
};



const Carousel = ({ heading, isTagLineNeeded, data ,customHeight}) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [count, setCount] = useState(0)
  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount, count, setCount) => {
    // Calculate the new scroll position
    if (Math.sign(scrollAmount) > 0) {
      setCount(prev => ++prev)
    } else {
      setCount(prev => --prev)
    }
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };


  return (
    <>
      {/* <App/>
    <Place/> */}

      <div className='my-16 w-[1300px] mx-auto mt-2'>
        <header className="my-4 flex flex-col items-center cursor-default-hover">
          {isTagLineNeeded && <p className="inline-block text-sm lg:text-base  bg-clip-text bg-gradient-to-r from-slate to-bit-pink font-mono uppercase tracking-wider">
            in partnership with getyourguide
          </p>}
          <h2 className="text-2xl text-5xl leading-relaxed text-center max-w-6xl">
            <span className="break-all cursor-default-hover">
              {/* Book popular activities in Madagascar */}
              {heading}
            </span>
          </h2>
        </header>
        <div
          ref={containerRef}
          // style={{
          //   width: '100%',
          //   overflowX: "scroll",
          //   scrollBehavior: "smooth",
          // }}
          className='w-full overflow-x-scroll	scroll-smooth no-scrollbar'
        >
          <div className='flex flex-row flex-nowrap content-center ' >
            {/* <div className='h-56 grid grid-cols-3 gap-4 content-start' > */}
            {data.map((item) => {
              return (
              <div className='w-full bg-transparent' key={item.name}>
                <Place
                  name={item.name}
                  image={item.image}
                  alt={item.alt}
                  tagline={item.tagline}
                  customHeight={customHeight}
                />
              </div>
      )})}
          </div>
        </div>
        <div className="w-[1270px] flex justify-end">
          <button
            className={count <= 0 ? 'pointer-events-none opacity-50 hover:cursor-not-allowed' : 'hover:cursor-w-resize'}
            onClick={() => handleScroll(-432, count, setCount)}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            className={count > data.length-4 ? 'pointer-events-none opacity-50 hover:cursor-not-allowed' : 'hover:cursor-e-resize'}
            onClick={() => handleScroll(432, count, setCount)}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

    </>
  );
}

export default Carousel;
