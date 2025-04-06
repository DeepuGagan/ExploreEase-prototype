'use client'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHouseChimney, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { Divider } from "@nextui-org/react";
import CheckBox from '@/components/checkbox/CheckBox';

import { interests } from '@/models/interests';


const Top = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const cardStyle = (index) => ({
    height: '250px',
    width: '210px',
    marginRight: '15px',
    border: '1px solid rgb(255, 198, 178)',
    padding: '0 10px 0 10px',
    backgroundColor: selectedCard === index ? '#ffeed3' : 'white',
  });

  return (
    <div style={{ margin: '0px 0 80px 0', width: '100%', }}>
      <div className='title' style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', }}>
        <strong >How can  we help you ?</strong>
      </div>
      <div className='cards gap-8' style={{ display: 'flex', justifyContent: 'center', paddingTop: '28px' }}>
        <div className='card hover:scale-110 shadow-xl' style={cardStyle(0)} onClick={() => handleCardClick(0)}>
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
        {/* <div className='caaaard' style={{ ...{state ===2 && state}, height: '250px', width: '210px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)' }}> */}
        <div className='card hover:scale-110 shadow-xl' style={cardStyle(1)} onClick={() => handleCardClick(1)}>
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
            {/* <div className='line' style={{border:'1px solid #ccc', marginTop:'10px',opacity:'0.9'}}></div> */}
            <div className='flex flex-row justify-center' >
              <Divider className="my-3 w-48" />
            </div>
            <p className='title1' style={{ fontSize: '15px', fontWeight: '900' }}>I have booked</p>
            <div className='options' style={{ display: 'flex' }}>
              <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faPlane} />
              <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Transportation</p>
            </div>
          </div>

        </div>
        <div className='card hover:scale-110 shadow-xl' style={cardStyle(2)} onClick={() => handleCardClick(2)}>
          <div className='content'>
            <p className='title1' style={{ marginTop: '15px', fontSize: '15px', fontWeight: '900' }}>Suggest an itenary with</p>
            <div className='options' style={{ display: 'flex' }}>
              <FontAwesomeIcon style={{ color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '10px' }} icon={faBinoculars} />
              <p style={{ marginTop: '20px', marginLeft: '10px', fontSize: '13px' }}>Things to do </p>
            </div>
            {/* <div className='line' style={{border:'1px solid #ccc', marginTop:'10px',opacity:'0.9'}}></div> */}
            <div className='flex flex-row justify-center' >
              <Divider className="my-3 w-48" />
            </div>
            <p className='title1' style={{ fontSize: '15px', fontWeight: '900' }}>I have booked</p>
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

const IntroHelp = () => {
  const [state, setState] = useState(false)
  const handler = () => setState(true)
  return (
    <>
      <div onClick={handler} >
        <Top />
      </div>
      {
        state && <CheckBox data={interests}/>

      }
    </>
  )
}

export default IntroHelp;
