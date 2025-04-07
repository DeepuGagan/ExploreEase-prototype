'use client'

import React from 'react'
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { Autocomplete, AutocompleteItem, DateRangePicker, Divider } from "@nextui-org/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import IntroHelp from '@/components/IntroHelp';
import IntroTravel from '@/components/IntroTravel';
import Link from 'next/link';
import Destinations from '@/components/headerContents/Destinations';

import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { destinations } from '@/models/destinations';

const handleNext = (isLastStep, setActiveStep) => { console.log(isLastStep, setActiveStep); !isLastStep && setActiveStep((cur) => cur + 1) };
const handlePrev = (isFirstStep, setActiveStep) => { console.log(isFirstStep, setActiveStep); !isFirstStep && setActiveStep((cur) => cur - 1) };

const ProgressivePagination = ({ activeStep, isLastStep, isFirstStep, setActiveStep, setIsLastStep, setIsFirstStep, }) => {
  // console.log({ activeStep, isLastStep, isFirstStep, setActiveStep, setIsLastStep, setIsFirstStep, });
  return (
    <div className="w-full px-24 py-4 mt-32">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Step 1
            </Typography>
            <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Plan Your Journey.
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <CogIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Step 2
            </Typography>
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Customize Your Recommendations.
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Step 3
            </Typography>
            <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Travel Comrades & Preferences.
            </Typography>
          </div>
        </Step>
      </Stepper>
      <div className='mt-40'>
        {activeStep === 0 && (<Step0 />)}
        {activeStep === 1 && (<Step1 />)}
        {activeStep === 2 && (<Step2 />)}
      </div>

      <div className="mt-12 flex justify-between">
        <Button onClick={() => handlePrev(isFirstStep, setActiveStep)} disabled={isFirstStep}>
          Prev
        </Button>
        {
          activeStep !== 2
            ?
            <Button onClick={() => handleNext(isLastStep, setActiveStep)} disabled={isLastStep}>
              Next
            </Button>
            :
            <Link href={'planner/event-schedule'} >
              <Button ripple={true} color="light-blue" >
                Submit
              </Button>
            </Link>
        }
      </div>

    </div>
  );
}

const Step0 = () => {
  const currentDate = new Date()
  const [value, setValue] = React.useState({
    start: parseDate(currentDate.toLocaleDateString('en-CA')),
    end: parseDate(currentDate.toLocaleDateString('en-CA')),
  })
  const [state, setState] = React.useState();
  console.log(value);
  let formatter = useDateFormatter({ dateStyle: "long" });
  const handleClick = () => setState(true)
  return (
    <>
      {
        state
          ?
          <>
            <p className='text-4xl font-bold	text-center		'> Build Your Own Customized Trip Plan</p>
            <p className='text-sm	text-center mb-8'> Create your travel itinerary. Book your accommodation, tours & flights as a package online.
            </p>
            <div className='flex flex-col gap-8 mx-auto border-2 p-16 rounded-xl w-1/2 shadow-slate-300 shadow-2xl hover:scale-105 outline-offset-4 '>
              <Autocomplete
                label="Choose a Location Based on Your Interests"
                placeholder="Search a destination"
                className="w-full"
                defaultItems={destinations}
                size='lg'
              >
                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
              </Autocomplete>
              <div >
                <DateRangePicker
                  label="Date range (controlled)"
                  value={value}
                  onChange={setValue}
                />
                <p className="text-default-500 text-sm">
                  Selected date:{" "}
                  {value
                    ? formatter.formatRange(
                      value.start.toDate(getLocalTimeZone()),
                      value.end.toDate(getLocalTimeZone()),
                    )
                    : "--"}
                </p>
              </div>
            </div>
          </>

          :
          <div className='flex flex-row justify-center gap-4' >
            <Autocomplete
              defaultItems={destinations}
              label="Select place where you are travelling from..."
              placeholder="Search a place"
              className="max-w-xs"
            >
              {(destination) => <AutocompleteItem key={destination.value}>{destination.label}</AutocompleteItem>}
            </Autocomplete>
            <Button onClick={handleClick} variant='ghost' className='align-center'> Submit </Button>
          </div>
      }


    </>
  )
}

const Step1 = () => {
  return (
    <>
      <IntroHelp />
    </>
  )
}

const Step2 = () => {
  return (
    <IntroTravel />
  )
}

const page = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  return (
    <div className='mt-24' >
      <ProgressivePagination activeStep={activeStep} isLastStep={isLastStep} isFirstStep={isFirstStep} setActiveStep={setActiveStep} setIsLastStep={setIsLastStep} setIsFirstStep={setIsFirstStep} />
    </div>
  )

}


export default page

