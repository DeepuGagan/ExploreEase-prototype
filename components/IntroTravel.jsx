'use client'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingLuggage, faPeoplePulling ,faUsers,faPeopleGroup} from '@fortawesome/free-solid-svg-icons';

const IntroTravel = () => {
    return (
        <div style={{ margin: '50px 0px', height: '500px', width: '100%' }}>
            <div className='title' style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', paddingTop: '28px' }}>
                <strong >Who are you travelling with ?</strong>
            </div>
            <div className='cards' style={{ display: 'flex', justifyContent: 'center', paddingTop: '28px' }}>
                <div className='card' style={{ display: 'flex', flexDirection: 'column' , backgroundColor: 'white', height: '180px', width: '150px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)', borderRadius: '10px' }}>
                    <div className='imgIcon'>
                        <FontAwesomeIcon style={{ fontSize: '30px', color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '40px', marginLeft: '40px' }} icon={faPersonWalkingLuggage} />
                    </div>
                    <div className='content' style={{fontSize:'12px',marginTop:'10px',marginLeft:'35px'}}>
                        <strong>Wandering Solo</strong>
                    </div>
                </div>
               <div className='card' style={{ display: 'flex', flexDirection: 'column' , backgroundColor: 'white', height: '180px', width: '150px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)', borderRadius: '10px' }}>
                    <div className='imgIcon'>
                        <FontAwesomeIcon style={{ fontSize: '30px', color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '40px', marginLeft: '40px' }} icon={faPeoplePulling} />
                    </div>
                    <div className='content' style={{fontSize:'12px',marginTop:'10px',marginLeft:'35px'}}>
                        <strong>Holidaying as a couple</strong>
                    </div>
                </div>
                <div className='card' style={{ display: 'flex', flexDirection: 'column' , backgroundColor: 'white', height: '180px', width: '150px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)', borderRadius: '10px' }}>
                    <div className='imgIcon'>
                        <FontAwesomeIcon style={{ fontSize: '30px', color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '40px', marginLeft: '40px' }} icon={faUsers} />
                    </div>
                    <div className='content' style={{fontSize:'12px',marginTop:'10px',marginLeft:'35px'}}>
                        <strong>Vacationing with family</strong>
                    </div>
                </div>
                <div className='card' style={{ display: 'flex', flexDirection: 'column' , backgroundColor: 'white', height: '180px', width: '150px', marginRight: '15px', border: '1px solid rgb(255, 198, 178)', borderRadius: '10px' }}>
                    <div className='imgIcon'>
                        <FontAwesomeIcon style={{ fontSize: '30px', color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white', marginTop: '40px', marginLeft: '40px' }} icon={faPeopleGroup} />
                    </div>
                    <div className='content' style={{fontSize:'12px',marginTop:'10px',marginLeft:'35px'}}>
                        <strong>Travel with Friends</strong>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IntroTravel;
