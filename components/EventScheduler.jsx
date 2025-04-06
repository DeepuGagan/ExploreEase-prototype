'use client'
import React from 'react'
import { Chip } from "@nextui-org/react";
import { Rating, Typography } from "@material-tailwind/react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function RatingWithText() {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="flex items-center gap-2 font-bold text-blue-gray-500">
      {rated}.7
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
        Based on 134 Reviews
      </Typography>
    </div>
  );
}

const EventScheduler = () => {
  return (
    <div className='w-full no-scrollbar overflow-y-auto bg-gradient-to-tr from-cyan-200  via-cyan-100  to-blue-200'>

      <div className="no-scrollbar overflow-y-auto flex flex-col w-screen h-screen overflow-auto text-gray-700">
        <div className='my-8 text-transparent' >
          f
        </div>
        <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto mx-auto">


          {/* col1 */}
          <div className="flex flex-col flex-shrink-0 w-72">
            <div className="flex items-center flex-shrink-0 h-10 px-2">
              <span className="block text-sm font-semibold">
                Day
              </span>
              <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                1
              </span>
              <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
              </button>
            </div>
            <div className="flex flex-col pb-2">

              <div className='border-l-4 border-blue-600 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://ak.jogurucdn.com/resources_version/desktop/img/itinerary/trip_transport_default.jpg" alt="par" className='h-28 rounded-xl object-cover' />
                </div>
                <div>
                  <Chip size="sm" color="danger" className='scale-75'>Transportation</Chip>
                  <p className='text-sm font-semibold' >Bangalore to Paris</p>
                  <p className='text-xs font-thin mt-4' >&#128343; 11hr</p>
                </div>
              </div>
              <div className='relative flex flex-col items-start p-2 mt-3 bg-amber-100 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <span><FontAwesomeIcon icon={faUtensils} /> &nbsp; Lunch Time</span>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="par" className='h-28 rounded-xl object-cover' />
                </div>
                <div>
                  <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                  <p className='text-sm font-semibold' >Eiffel Tower</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 2hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 1589</p>
                    <Link href="https://www.viator.com/Paris-tourism/d479-r3190810091-s43958981?m=28353&supag=119131267117&supca=12520548399&supsc=kwd-15040100&supai=505218631582&supdv=c&supnt=g&suplp=9061997&supli=9056131&supti=kwd-15040100&tsem=true&supci=kwd-15040100&supap1=&supap2=&supfi=&gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNk97TQCvlBlR7irf5AwyXzi3oADT8MEDBUr0cahB3SxhILPq--CfS4aAsRcEALw_wcB" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1554663565-f60b88adfa08?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="par" className='h-28 rounded-xl object-cover' />
                </div>
                <div>
                  <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                  <p className='text-sm font-semibold' >Tuileries Garden</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 4hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 1678</p>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-col items-start px-1 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <Chip size="sm" color="success" className='scale-75'>Accomodation</Chip>
                <div className='w-full flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1671328598380-176c32fd27e3" alt="par" className='h-36 w-[270px] rounded-xl object-fill' />
                </div>
                <div className='w-full pt-2 pl-2 pr-2' >
                  <p className='text-sm font-semibold' >Flambeau de la Culture</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 3hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 40</p>
                    <Link href="https://parisjetaime.com/eng/event/academic-tour-of-the-flambeau-de-la-culture-cultural-olympiad-e505" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col items-start p-2 mt-3 bg-amber-100 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <span><FontAwesomeIcon icon={faUtensils} /> &nbsp; Dinner Time</span>
              </div>

            </div>
          </div>




          {/* col2 */}
          <div className="flex flex-col flex-shrink-0 w-72">
            <div className="flex items-center flex-shrink-0 h-10 px-2">
              <span className="block text-sm font-semibold">
                Day
              </span>
              <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                2
              </span>
              <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">

              </button>
            </div>
            <div className="flex flex-col pb-2">
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1628589549925-3bb8e0632be5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGUlMjBSZWdlbnQlMjBNb250bWFydHJlfGVufDB8MXwwfHx8Mg%3D%3D" alt="par" className='h-28 rounded-xl object-cover' />
                </div>
                <div>
                  <Chip size="sm" color="success" className='scale-75'>Accomodation</Chip>
                  <p className='text-sm font-semibold' >Le Regent Montmartre</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 2hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 1668</p>
                    <Link href="https://www.booking.com/hotel/fr/hotelleregentmontmartre.html?aid=1288252&label=metagha-link-LUIN-hotel-222410_dev-desktop_los-1_bw-1_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20240528_ppt-_lp-2356_r-12677621345636201911&sid=8ef967f13d804eaef790cf9eccd16b27&all_sr_blocks=22241012_372247001_0_2_0%2C22241012_372247001_0_2_0;checkin=2024-05-28;checkout=2024-05-29;dest_id=-1456928;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=22241012_372247001_0_2_0%2C22241012_372247001_0_2_0;hpos=1;matching_block_id=22241012_372247001_0_2_0;no_rooms=2;req_adults=2;req_children=0;room1=A;room2=A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=22241012_372247001_0_2_0__3500%2C22241012_372247001_0_2_0__3500;srepoch=1716804481;srpvid=afdc4739a66b012e;type=total;ucfs=1&#hotelTmpl" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-col items-start px-1 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                <div className='w-full flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG91dnJlJTIwTXVzZXVtfGVufDB8MHwwfHx8Mg%3D%3D" alt="par" className='h-36 w-[270px] rounded-xl object-cover' />
                </div>
                <div className='w-full pt-2 pl-2 pr-2'>
                  <p className='text-sm font-semibold'>Louvre Museum</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin'>&#128343; 4hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 16789</p>
                    <Link href="https://www.headout.com/louvre-museum-tickets-c-252/">
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col items-start p-2 mt-3 bg-amber-100 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <span><FontAwesomeIcon icon={faUtensils} /> &nbsp; Lunch Time</span>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-col items-start px-1 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <Chip size="sm" color="warning" className='scale-75'>Entertainment</Chip>
                <div className='w-full flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af" alt="par" className='h-36 w-[270px] rounded-xl object-fill' />
                </div>
                <div className='w-full pt-2 pl-2 pr-2' >
                  <p className='text-sm font-semibold' >Seine River Dinner Cruise</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 7hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 290</p>
                    <Link href="https://www.viator.com/tours/Paris/Bateaux-Mouches-3-Hour-Seine-River-Cruise-Including-Dinner-and-Live-Music/d479-23561P3" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1581262177533-1b1760b87952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEhpbHRvbiUyMFBhcmlzJTIwT3BlcmF8ZW58MHwxfDB8fHwy" alt="par" className='h-28 rounded-xl object-cover' />
                </div>
                <div>
                  <Chip size="sm" color="success" className='scale-75'>Accomodation</Chip>
                  <p className='text-sm font-semibold' >Hilton Paris Opera</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 2hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 1888</p>
                    <Link href="https://www.expedia.co.in/Paris-Hotels-Hilton-Paris-Opera.h2002.Hotel-Information?chkin=2024-05-28&chkout=2024-05-29&x_pwa=1&rfrr=HSR&pwa_ts=1716804627180&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jby5pbi9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=2734&destination=Paris%2C+France&destType=MARKET&neighborhoodId=553248634838840690&selected=2002&latLong=12.9634%2C77.5855&sort=RECOMMENDED&top_dp=105539&top_cur=INR&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNlMTNNvpbP2XJYo6LSfQRt3qCTOL3183C3OmSrcY7MuMhq01dgskYsaAgRvEALw_wcB&mctc=10&mdpcid=IN.META.HPA.HOTEL-CORESEARCH-desktop-PROMOTED.HOTEL&mdpdtl=HTL.2002.20240528.20240529.DDT.1.CID.20898087060.AUDID..RRID.bex_in_desktop&userIntent=&selectedRoomType=200637969&selectedRatePlan=238064156&searchId=1b31228a-b810-45c0-9495-f528700ac3e4&propertyName=Hilton+Paris+Opera" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1602003472234-6a9fde86a446?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFsYWNlJTIwb2YlMjB2ZXJzYWlsbGVzfGVufDB8MXwwfHx8Mg%3D%3D" alt="par" className='h-28 rounded-xl object-cover' />
                </div>
                <div>
                  <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                  <p className='text-sm font-semibold' >Palace of Versailles</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 3hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 789</p>
                    <Link href="https://en.chateauversailles.fr/plan-your-visit/tickets-and-prices" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='relative flex flex-col items-start p-2 mt-3 bg-amber-100 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <span><FontAwesomeIcon icon={faUtensils} /> &nbsp; Dinner Time</span>
              </div>


            </div>
          </div>




          {/* col3*/}
          <div className="flex flex-col flex-shrink-0 w-72">
            <div className="flex items-center flex-shrink-0 h-10 px-2">
              <span className="block text-sm font-semibold">
                Day
              </span>
              <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                3
              </span>
              <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">

              </button>
            </div>
            <div className="flex flex-col pb-2">

              <div className='border-l-4 border-indigo-500 relative flex flex-col items-start px-1 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>                <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                <div className='w-full flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1505757914315-dad7ed95d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFudGglQzMlQTlvbnxlbnwwfDB8MHx8fDI%3D" alt="par" className='h-36 w-[270px] rounded-xl object-fill' />
                </div>
                <div className='w-full pt-2 pl-2 pr-2'>
                  <p className='text-sm font-semibold'>Panthéon</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin'>&#128343; 3hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 189</p>
                    <Link
                      href="https://www.viator.com/Paris-attractions/Pantheon/d479-a7798?m=28353&supag=119131283717&supca=12520548393&supsc=kwd-306587140945&supai=505218369790&supdv=c&supnt=g&suplp=9061997&supli=1008736&supti=kwd-306587140945&tsem=true&supci=kwd-306587140945&supap1=&supap2=&supfi=&gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNmF5oPQjd3iLrdjbESHJFTOKU7zoo__6ehAIxOoCa3bHOHy5hsVh3YaAuCoEALw_wcB">
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-col items-start px-1 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                <div className='w-full flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1661681266778-b939903fa036?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmF0aW9uYWwlMjBNdXNldW0lMjBvZiUyME5hdHVyYWwlMjBIaXN0b3J5fGVufDB8MHwwfHx8Mg%3D%3D" alt="par" className='h-36 w-[270px] rounded-xl object-fill' />
                </div>
                <div className='w-full pt-2 pl-2 pr-2' >
                  <p className='text-sm font-semibold' >National Museum of Natural History</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 2hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 199</p>
                    <Link href="https://www.viator.com/Paris-attractions/Museum-of-Natural-History-Musee-dHistoire-Naturelle/d479-a9021?m=28353&supag=118063152179&supsc=dsa-694098303964&supai=660597825087&supdv=c&supnt=g&suplp=9061997&supli=9056129&supti=dsa-694098303964&tsem=true&supci=dsa-694098303964&supap1=&supap2=&gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNnHnGwNO_6pAv2ilHBwQKiP2p6XflirR1kn6GNULGiCDYSF-yAKds8aAtoNEALw_wcB" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col items-start p-2 mt-3 bg-amber-100 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <span><FontAwesomeIcon icon={faUtensils} /> &nbsp; Lunch Time</span>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1605443791607-80a259dd3c3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlzbmV5bGFuZCUyMFBhcmlzfGVufDB8MXwwfHx8Mg%3D%3D" alt="par" className='h-28 rounded-xl object-fill' />
                </div>
                <div>
                  <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                  <p className='text-sm font-semibold' >Disneyland Paris</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 6hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 889</p>
                    <Link href="https://en.chateauversailles.fr/plan-your-visit/tickets-and-prices" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1684025295339-0b729f287f16" alt="par" className='h-28 rounded-xl object-fill' />
                </div>
                <div>
                  <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                  <p className='text-sm font-semibold' >Louvre Museum</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 2hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 63.90</p>
                    <Link href="https://louvremuseum.tickets-paris.fr/fr/?gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNn7l3RKcY2FBQH-f-iXKhAg1KhoRSAnQH0JgBG3JtUL1EIVP9BvgJAaAh2YEALw_wcB" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1613909671501-f9678ffc1d33" alt="par" className='h-28 rounded-xl object-fill' />
                </div>
                <div>
                  <Chip size="sm" color="warning" className='scale-75'>Events</Chip>
                  <p className='text-sm font-semibold' >Lafayette Fashion Show</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 4hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 19.96</p>
                    <Link href="https://www.viator.com/Paris/d479-ttd/p-14906P3?m=28353&supag=118063152179&supsc=dsa-694098303964&supai=660597825087&supdv=c&supnt=g&suplp=9061998&supli=9060750&supti=dsa-694098303964&tsem=true&supci=dsa-694098303964&supap1=&supap2=&gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNlMNyCD77PrsJno_ay3vYop-XWXTo--TtOPTjUPWq0Zsv8djhrPOLoaAj7gEALw_wcB" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-col items-start px-1 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <Chip size="sm" color="pink" className='scale -75 bg-teal-200'>Event</Chip>
                <div className='w-full flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1664539316118-c705da6d852f" alt="par" className='h-36 w-[270px] rounded-xl object-fill' />
                </div>
                <div className='w-full pt-2 pl-2 pr-2' >
                  <p className='text-sm font-semibold' >Moulin Rouge Dinner Show</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 5hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 120</p>
                    <Link href="https://www.viator.com/tours/Paris/Dinner-and-Show-at-the-Paris-Moulin-Rouge-with-Transport/d479-2050DMR_DMT" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col items-start p-2 mt-3 bg-amber-100 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <span><FontAwesomeIcon icon={faUtensils} /> &nbsp; Dinner Time</span>
              </div>


            </div>
          </div>




          {/* col4 */}
          <div className="flex flex-col flex-shrink-0 w-72">
            <div className="flex items-center flex-shrink-0 h-10 px-2">
              <span className="block text-sm font-semibold">
                Day
              </span>
              <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                4
              </span>
              <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">

              </button>
            </div>
            <div className="flex flex-col pb-2">

              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1539481915544-f5cd50562d66" alt="par" className='h-28 rounded-xl object-fill' />                </div>
                <div>
                  <Chip size="sm" color="pink" className='scale -75 bg-teal-200'>Event</Chip>
                  <p className='text-sm font-semibold' >Crazy Horse Cabaret Show</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 4hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 39.96</p>
                    <Link href="https://www.viator.com/tours/Paris/Crazy-Horse-Cabaret-in-Paris/d479-6281CRAZYHORSE" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb" alt="par" className='h-28 rounded-xl object-fill' />
                </div>
                <div>
                  <Chip size="sm" color="warning" className='scale-75'>Entertainment</Chip>
                  <p className='text-sm font-semibold' >Sommelier Wine Tasting</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 3hr</p>
                  <div className='flex flex-row gap-4 justify-between'>                    <p className='text-sm font-medium content-center flex-start'>$ 65</p>
                    <Link href="https://www.sommeliercompany.com/sommelier-services-wine-expert-private-tasting-event" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col items-start p-2 mt-3 bg-amber-100 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <span><FontAwesomeIcon icon={faUtensils} /> &nbsp; Lunch Time</span>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://images.unsplash.com/photo-1569448096483-1114dddb646d" alt="par" className='h-28 rounded-xl object-fill' />
                </div>
                <div>
                  <Chip size="sm" color="warning" className='scale-75'>Entertainment</Chip>
                  <p className='text-sm font-semibold' >Hop-On Hop-Off Tour</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 6hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 125</p>
                    <Link href="https://www.tootbus.com/fr/paris/accueil?gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNk2eCuX8BxAXN7_vcpPez9q8mczfp8ZYK5DC-_CA5pdsrVkV_S2bHoaAghdEALw_wcB" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='border-l-4 border-indigo-500 relative flex flex-col items-start px-1 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <Chip size="sm" color="secondary" className='scale-75'>Attraction</Chip>
                <div className='w-full flex items-center justify-center'>
                  <img src="https://images.unsplash.com/photo-1566127444941-8e124ffbc59e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9tYWluZSUyME5hdGlvbmFsJTIwZHUlMjBQYWxhaXMlMjBSb3lhbHxlbnwwfDB8MHx8fDI%3D" alt="par" className='h-36 w-[270px] rounded-xl object-fill' />
                </div>
                <div className='w-full pt-2 pl-2 pr-2' >
                  <p className='text-sm font-semibold' >Domaine National du Palais Royal</p>
                  <Rating value={4} className='scale-50 content-start m-[-30px]' />
                  <p className='text-xs font-thin' >&#128343; 3hr</p>
                  <div className='flex flex-row gap-4 justify-between'>
                    <p className='text-sm font-medium content-center flex-start'>$ 789</p>
                    <Link href="https://www.tootbus.com/fr/paris/accueil?gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNk2eCuX8BxAXN7_vcpPez9q8mczfp8ZYK5DC-_CA5pdsrVkV_S2bHoaAghdEALw_wcB" >
                      <button className="bg-blue-500 hover:bg-blue-700 m-1 p-1 px-4 rounded-sm text-white font-light text-xs">
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='border-l-4 border-blue-600 relative flex flex-row items-start px-2 py-1 mt-3 bg-white rounded-r-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100'>
                <div className=' w-1/3 my-auto mr-2'>
                  <img src="https://ak.jogurucdn.com/resources_version/desktop/img/itinerary/trip_transport_default.jpg" alt="par" className='h-28 rounded-xl object-cover' />
                </div>
                <div>
                  <Chip size="sm" color="danger" className='scale-75'>Transportation</Chip>
                  <p className='text-sm font-semibold' >Paris to Bangalore</p>
                  <p className='text-xs font-thin mt-4' >&#128343; 11hr</p>
                </div>
              </div>

            </div>
          </div>


          <div className="flex-shrink-0 w-6" />
        </div>
      </div>
    </div>
  )
}

export default EventScheduler