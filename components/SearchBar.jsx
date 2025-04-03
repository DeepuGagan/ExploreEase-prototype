'use client'
import React, { useState } from 'react'
import '@/styles/searchBar.css'
import Link from 'next/link'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }
    // console.log(searchInput);

    const handleSubmitClick = (e) => {
        searchInput && setSearchInput('')
    }

    return (
        <>
            {/* <div>seacrhbar</div> */}
            <div className="search-box">
                <input className="search-text" type="text" placeholder="Search Anything" value={searchInput} onChange={handleInputChange} />
                <Link href={searchInput ? `/explore/${searchInput}` : '/'} className="search-btn" style={{ ...(!searchInput && { pointerEvents: "none" }) }}>
                    <button className="Explore-Button" onClick={handleSubmitClick}>
                        <svg
                            className="svgIcon"
                            height="1em"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                        </svg>                        <span className="text">Explore</span>
                    </button>
                </Link>
                {/* <div className="ripple"></div> */}
            </div>
        </>

    )
}

// const SearchBar = () => {
//     const [isChecked, setIsChecked] = useState(true);

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//     };

//     return (
//         <div className="container">
//             <div className={`mainbox ${isChecked ? 'checked' : ''}`} onClick={handleCheckboxChange}>
//                 <div className="iconContainer">
//                     <svg
//                         viewBox="0 0 512 512"
//                         height="1em"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="search_icon"
//                     >
//                         <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
//                     </svg>
//                 </div>
//                 <input
//                     className="search_input"
//                     placeholder="search"
//                     type="text"
//                     style={{ width: isChecked ? '0' : '170px', height: isChecked ? '0px' : 'auto' }}
//                 />
//             </div>
//         </div>
//     );
// };


export default SearchBar
