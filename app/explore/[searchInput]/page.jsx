'use client'

import React, { useState } from 'react'
import { Tabs, Tab, Card, CardBody, RadioGroup, Radio, Divider, Chip } from "@nextui-org/react";
import DaysSection from '@/components/DaysSection';
import { Accordion, AccordionItem, Pagination } from "@nextui-org/react";

import Weather from '@/components/Weather';
import Hotel from '@/components/cards/Hotel';
import ShopProduct from '@/components/cards/ShopProduct';
import ArtCulture from '@/components/cards/ArtCulture';
import FoodDrink from '@/components/cards/FoodDrink';
import OutdoorActivities from '@/components/cards/OutdoorActivities';
import Discover from '@/components/Discover';
import Discover2 from '@/components/Discover2';
import Discover3 from '@/components/Discover3';
import SlideShelf from '@/components/ShelfSlide';
import LatestStories2 from '@/components/LatestStories2';
import LatestStoriesParis from '@/components/LatestStoriesParis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUtensils, faPlane, faCar, faUmbrellaBeach, faTicketAlt, faShoppingCart, faHospital, faPalette, faHiking } from '@fortawesome/free-solid-svg-icons'; // Add more icons as needed
import Carousel from '@/components/Carousel';
import ParisNearby from '@/models/ParisNearby';
import { usePathname } from 'next/navigation'
import DefaultPagination from '@/components/Pagination';
import Entertainment from '@/components/cards/Entertainment';



function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}

// const data = {
// introduction:'intro',
// accomodation:'Accomodation',
// lifestyle:'Lifestyle',
// weather:'intro',
// activities:'intro',
// rest:'intro',
// introduction:'intro',
// introduction:'intro',
// }
const variants = [
  "solid",
  "underlined",
  "bordered",
  "light",
];

const Section = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full flex-col py-10">
          {/* <Tabs key='underlined' variant='underlined' aria-label="Tabs variants" placement='top' color='primary' size='lg'> */}
          <Tabs key='underlined' variant='bordered' aria-label="Tabs variants" placement='start' color='primary' size='sm' isVertical='true'>
            {/* <Tab key="intro" title="Introduction"  >
              <Card >
                <CardBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis maxime pariatur, ipsum iste et. Quas debitis adipisci, accusamus quidem harum at maxime unde dicta nisi aut sapiente tempore laudantium!
                  Rerum et quasi excepturi officiis atque corporis, quis repellat iste sed libero sequi consequatur eum, velit quibusdam aspernatur dolorem iure unde adipisci at tenetur totam. Repudiandae sint et illo soluta!
                  Doloribus quidem ducimus ea! Dolor mollitia cumque provident ad qui repellendus, eaque veniam corporis voluptatibus animi recusandae labore vitae quis inventore sequi aliquid voluptates! Sed suscipit quisquam consequuntur inventore porro.
                  Quaerat voluptas ea consectetur eaque facere asperiores harum nisi et dolores alias quidem dolorem debitis placeat reiciendis autem saepe, error vero! Mollitia, est doloremque saepe ea voluptas distinctio incidunt numquam.
                  Voluptates dicta, harum nisi enim nobis error itaque impedit officiis saepe alias mollitia reiciendis. Possimus non, adipisci deserunt similique laborum explicabo magnam veritatis mollitia tenetur eius laudantium in pariatur. Esse.
                  Incidunt qui, est tempore quibusdam libero reiciendis debitis, doloremque velit error, totam nam ad rem maxime minima vitae autem ducimus sit sapiente excepturi. Eos odio debitis quae minus, autem eligendi.
                  Voluptas ullam error dolores dolor laboriosam. Facere iste praesentium ad ea officiis ullam esse animi similique, nemo quam quibusdam voluptates tempora quos eum magni inventore enim? Enim accusantium voluptate sit.
                  Amet beatae aut corrupti saepe quam, veniam magnam, excepturi rem a accusamus, laudantium fugiat facilis similique vel ullam impedit et porro sapiente dignissimos magni optio? Sed culpa obcaecati earum neque.
                  Et, dignissimos maiores exercitationem accusantium nulla perferendis, delectus saepe iusto enim veritatis, omnis temporibus neque. Tempore distinctio ex iure ipsam reiciendis, consequatur natus, illum molestiae nihil laborum magnam. Aliquam, optio.
                  Perspiciatis inventore nisi iste vero natus tenetur atque eum commodi pariatur! Alias neque unde debitis voluptate consequuntur sapiente distinctio sequi, odio eveniet eligendi animi minima error iste praesentium hic ad.
                  Minus maxime blanditiis voluptate corporis, iste porro. Possimus quis esse illo provident ab reprehenderit quibusdam iusto aut, ipsam numquam, recusandae error quae quod dolor nesciunt quasi. Vero quas possimus quaerat.
                  Sed in dicta dolorum repellendus porro rerum dolorem qui voluptate impedit blanditiis exercitationem, nisi voluptas corrupti ducimus, ut accusamus labore mollitia consectetur eaque amet cumque! Hic alias ex dolor eius?
                  Modi explicabo fugit rem quibusdam sapiente in laudantium perferendis? Rerum provident adipisci nisi alias rem, debitis libero nihil ducimus tempore error quae dolorem consequuntur quidem totam, distinctio delectus veritatis eveniet?
                  Dolores cumque repudiandae quis debitis sint, provident natus blanditiis, alias ipsum quas libero. Doloribus nulla iste cupiditate laudantium magnam! Maiores, sed. Sequi officiis eligendi repudiandae quaerat doloribus odio rerum quia!
                  Est, natus et? Placeat deserunt corrupti soluta, quos, dolorem autem distinctio iste unde laudantium temporibus nostrum voluptatum saepe quam commodi eaque ipsam nemo. Repellat corrupti sit ipsam voluptatibus sunt dolorem!
                  Deserunt, architecto officiis. Praesentium, ipsum. Sint tenetur illo atque debitis exercitationem, fugiat maiores amet explicabo repellat voluptates eligendi optio culpa officiis iusto autem minima vitae, dolor odio architecto aperiam hic?
                  Aut, animi veritatis. Aliquam culpa blanditiis libero voluptates ducimus iste molestias dolores fugit? Est enim voluptate, aliquid eius quas blanditiis sunt eum possimus dolor fuga natus aperiam nihil nostrum? Possimus.
                  Sed cumque voluptatum soluta temporibus reprehenderit cupiditate obcaecati voluptates cum! Earum doloribus, pariatur sint aperiam possimus unde amet similique, ipsa consectetur quos nobis perspiciatis quas reiciendis optio nostrum suscipit ipsam!
                  Pariatur distinctio vitae cupiditate corporis beatae ipsa esse aliquam, recusandae, consequuntur vero nostrum maxime blanditiis culpa nesciunt atque est alias at dolore deleniti! Blanditiis, accusamus! Earum accusamus eveniet a officiis!
                  Facilis quis dolore optio, nostrum itaque doloremque. Consectetur, dolor sunt dolorem expedita quia delectus culpa eligendi error. Ullam, quod architecto non et recusandae adipisci quasi sit quia aspernatur, debitis reprehenderit.
                </CardBody>
                <CardBody >
                  <Weather/>
                </CardBody>





              </Card>
              <Card>
              </Card>
            </Tab> */}
            {/* this tab section is the thing copied into diff ones */}
            {/* <Tab key="accomodation" title={
              <div className="flex items-center ">
                <FontAwesomeIcon  icon={faHouseChimney} />
                <span>Accomodation</span>
                <Chip size="sm" variant="faded">1</Chip>
              </div>
            } >
              <Card>
                <CardBody>
                  <App />
                </CardBody>
              </Card>
            </Tab> */}


            <Tab key="accommodation" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faHouseChimney} />
                <span className='mx-1' >Accommodation</span>
                <Chip size="sm" variant="faded">20</Chip>
              </div>
            }>
              <Card>
                <CardBody className='flex flex-row flex-wrap justify-center gap-8 p-4 py-8'>
                  <Hotel />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="dining" className='my-1' title={
              <div className="flex items-start my-4">
                <FontAwesomeIcon icon={faUtensils} />
                <span className='mx-1' >Dining</span>
                <Chip size="sm" variant="faded">15</Chip>
              </div>
            }>
              <Card>
                <CardBody className='flex flex-row flex-wrap justify-around gap-8 p-4 py-8 w-[1300px]'>
                  <FoodDrink />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="flights" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faPlane} />
                <span className='mx-1' >Flights</span>
                <Chip size="sm" variant="faded">17</Chip>
              </div>
            }>
              <Card>
                <CardBody>
                  <App />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="transportation" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faCar} />
                <span className='mx-1' >Transportation</span>
                <Chip size="sm" variant="faded">16</Chip>
              </div>
            }>
              <Card>
                <CardBody>
                  <App />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="beach" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faUmbrellaBeach} />
                <span className='mx-1' >Beach</span>
                <Chip size="sm" variant="faded">15</Chip>
              </div>
            }>
              <Card>
                <CardBody>
                  <App />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="entertainment" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faTicketAlt} />
                <span className='mx-1' >Entertainment</span>
                <Chip size="sm" variant="faded">20</Chip>
              </div>
            }>
              <Card>
                <CardBody className='flex flex-row flex-wrap justify-around gap-8 p-4 py-8 w-[1300px]' >
                  <Entertainment />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="shopping" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='mx-1' >Shopping</span>
                <Chip size="sm" variant="faded">21</Chip>
              </div>
            }>
              <Card>
                <CardBody className='flex flex-row flex-wrap justify-center gap-4 p-4 py-8'>
                  <ShopProduct />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="health" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faHospital} />
                <span className='mx-1' >Health</span>
                <Chip size="sm" variant="faded">18</Chip>
              </div>
            }>
              <Card>
                <CardBody>
                  <App />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="art&culture" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faPalette} />
                <span className='mx-1' >Art & Culture</span>
                <Chip size="sm" variant="faded">17</Chip>
              </div>
            }>
              <Card>
                <CardBody className='flex flex-row flex-wrap justify-center gap-4 p-4 py-4 w-[1300px]'>
                  <ArtCulture />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="outdooractivities" className='my-1' title={
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faHiking} />
                <span className='mx-1' >Outdoor Activities</span>
                <Chip size="sm" variant="faded">20+</Chip>
              </div>
            }>
              <Card>
                <CardBody className='flex flex-row flex-wrap justify-around gap-8 p-4 py-8 w-[1300px]'>
                  <OutdoorActivities />
                </CardBody>
              </Card>
            </Tab>

          </Tabs>
        </div>
      </div>
    </>
  )
}


const page = () => {
  const [noOfDays, setNoOfDays] = useState(1)
  const pathname = usePathname()
  const [, , location='your Location'] = pathname.split('/')
  console.log({noOfDays});
  return (
    <div>
      {/* <Discover /> */}
      <Discover3 />
      <div className='my-5 text-white' >a</div>
      <Carousel  heading={`Discover popular places in ${location}`} isTagLineNeeded={false} data={ParisNearby} customHeight={true} />
      <div className='flex flex-row gap-10 py-5'>
        <DaysSection noOfDays={noOfDays} setNoOfDays={setNoOfDays} />
        <Weather noOfDays={noOfDays} setNoOfDays={setNoOfDays} location={location} />
      </div>
      <Section />
      <div className='flex flex-row-reverse'>
      <DefaultPagination  />
      </div>
      <LatestStoriesParis />
      <SlideShelf />
    </div>
  );
}

export default page
