'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingLuggage, faPeoplePulling, faUsers, faPeopleGroup, faMale, faFemale, faMars, faVenus, faChild, faPerson, faPersonCane } from '@fortawesome/free-solid-svg-icons';

const Top = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: 1, title: 'Wandering Solo', icon: faPersonWalkingLuggage },
    { id: 2, title: 'Holidaying as a couple', icon: faPeoplePulling },
    { id: 3, title: 'Vacationing with family', icon: faUsers },
    { id: 4, title: 'Travel with Friends', icon: faPeopleGroup },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div style={{ margin: '50px 0px', width: '100%' }}>
      <div className='title' style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', paddingTop: '28px' }}>
        <strong>Who are you travelling with ?</strong>
      </div>
      <div className='cards' style={{ display: 'flex', justifyContent: 'center', paddingTop: '28px' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className='card mx-4 hover:scale-110'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: selectedCard === card.id ? '#ffeed3' : 'white',
              height: '180px',
              width: '150px',
              marginRight: '15px',
              border: '1px solid rgb(255, 198, 178)',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            <div className='imgIcon' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '10px' }}>
              <FontAwesomeIcon style={{ fontSize: '30px', color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white' }} icon={card.icon} />
            </div>
            <div className='content' style={{ fontSize: '12px', textAlign: 'center' }}>
              <strong>{card.title}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Men = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const maleCards = [
    { id: 1, title: '0-18', icon: faChild },
    { id: 2, title: '19-35', icon: faPerson },
    { id: 3, title: '36-60', icon: faMale },
    { id: 4, title: '60+', icon: faPersonCane }
  ];

  return (
    <div>
      <div className='title' style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', paddingTop: '28px' }}>
        <strong>Male&nbsp;</strong>
        <FontAwesomeIcon className='my-auto' icon={faMars} />
      </div>
      <div className='cards' style={{ display: 'flex', justifyContent: 'center', paddingBottom: '28px' }}>
        <div className="flex flex-wrap gap-8 mt-2">
          {maleCards.map((card) => (
            <div
              key={card.id}
              className='card hover:scale-110'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: selectedCard === card.id ? '#ffeed3' : 'white',
                height: '100px',
                width: '150px',
                border: '1px solid rgb(255, 198, 178)',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedCard(card.id)}
            >
              <div className='imgIcon' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '10px' }}>
                <FontAwesomeIcon style={{ fontSize: '30px', color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white' }} icon={card.icon} />
              </div>
              <div className='content' style={{ fontSize: '12px', textAlign: 'center' }}>
                <strong>{card.title}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Women = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const femaleCards = [
    { id: 1, title: '0-18', icon: faChild },
    { id: 2, title: '19-35', icon: faPerson },
    { id: 3, title: '36-60', icon: faFemale },
    { id: 4, title: '60+', icon: faPersonCane }
  ];

  return (
    <div>
      <div className='title' style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', paddingTop: '28px' }}>
        <strong>Female&nbsp;</strong>
        <FontAwesomeIcon className='my-auto' icon={faVenus} />
      </div>
      <div className='cards' style={{ display: 'flex', justifyContent: 'center', paddingBottom: '28px' }}>
        <div className="flex flex-wrap gap-8 mt-2">
          {femaleCards.map((card) => (
            <div
              key={card.id}
              className='card hover:scale-110'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: selectedCard === card.id ? '#ffeed3' : 'white',
                height: '100px',
                width: '150px',
                border: '1px solid rgb(255, 198, 178)',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedCard(card.id)}
            >
              <div className='imgIcon' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '10px' }}>
                <FontAwesomeIcon style={{ fontSize: '30px', color: '#0074B7', padding: '10px', border: '1px solid rgb(255, 198, 178)', borderRadius: '50%', backgroundColor: 'white' }} icon={card.icon} />
              </div>
              <div className='content' style={{ fontSize: '12px', textAlign: 'center' }}>
                <strong>{card.title}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IntroTravel = () => {
  const [state, setState] = useState(false)
  const handler = () => setState(true)
  return (
    <>
      <div onClick={handler} >
        <Top />
      </div>
      {
        state && <>
          <Men />
          <Women />
        </>
      }
    </>
  )
}

export default IntroTravel;

