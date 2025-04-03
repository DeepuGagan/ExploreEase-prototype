'use client'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHouseChimney, faBinoculars } from '@fortawesome/free-solid-svg-icons';

const IntroHelp = () => {
const a = {
    backgroundColor: '#ffeed3'
}
const b = {
    backgroundColor: 'black'
}

const [currentClick,setCurrentClick]= useState(0)

    return (
        <div style={{ margin: '50px 0px', height: '500px', width: '100%' }}>
            <div className='title' style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', paddingTop: '28px' }}>
                <strong >How can  we help you ?</strong>
            </div>
            <div className='cards' style={{ display: 'flex', justifyContent: 'center', paddingTop: '28px' }}>
                <div className='card' style={{ ...a, height: '250px', width: '210px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)' }}>
                    <div className='content'>
                        <p className='title1' style={{ marginTop: '15px', fontSize: '15px', fontWeight: '900' }}>Suggest an itenary with</p>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faPlane} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Transportation</p>
                        </div>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faHouseChimney} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Accomodation</p>
                        </div>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faBinoculars} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Things to do </p>
                        </div>

                    </div>
                </div>
                {/* <div className='card' style={{ ...{state ===2 && state}, height: '250px', width: '210px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)' }}> */}
                <div className='card' style={{ height: '250px', width: '210px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)' }}>
                    <div className='content'>
                        <p className='title1' style={{ marginTop: '15px', fontSize: '15px', fontWeight: '900' }}>Suggest an itenary with</p>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faHouseChimney} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Accomodation</p>
                        </div>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faBinoculars} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Things to do </p>
                        </div>
                        <div className='line' style={{border:'1px solid #ccc', marginTop:'10px',opacity:'0.9'}}></div>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faPlane} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Transportation</p>
                        </div>
                    </div>

                </div>
                <div className='card' style={{ backgroundColor: 'white', height: '250px', width: '210px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)' }}>
                <div className='content'>
                        <p className='title1' style={{ marginTop: '15px', fontSize: '15px', fontWeight: '900' }}>Suggest an itenary with</p>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faBinoculars} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Things to do </p>
                        </div>
                        <div className='line' style={{border:'1px solid #ccc', marginTop:'10px',opacity:'0.9'}}></div>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faHouseChimney} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Accomodation</p>
                        </div>
                        <div className='options' style={{ display: 'flex' }}>
                            <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faPlane} />
                            <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Transportation</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default IntroHelp;
