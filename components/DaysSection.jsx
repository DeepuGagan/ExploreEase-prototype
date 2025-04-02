'use client'
import React from "react";
import { RangeCalendar, Radio, RadioGroup, Button, ButtonGroup, cn } from "@nextui-org/react";
import { today, getLocalTimeZone, startOfWeek, startOfMonth, endOfWeek, endOfMonth, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

// function DaysSection12() {
//   let [value, setValue] = React.useState({
//     start: today(getLocalTimeZone()),
//     end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 }),
//   });
//   let [focusedValue, setFocusedValue] = React.useState(today(getLocalTimeZone()));

//   let { locale } = useLocale();

//   let now = today(getLocalTimeZone());
//   let nextMonth = now.add({ months: 1 });

//   let nextWeek = {
//     start: startOfWeek(now.add({ weeks: 1 }), locale),
//     end: endOfWeek(now.add({ weeks: 1 }), locale),
//   };
//   let thisMonth = { start: startOfMonth(now), end: endOfMonth(now) };
//   let nextMonthValue = { start: startOfMonth(nextMonth), end: endOfMonth(nextMonth) };


//   const CustomRadio = (props) => {
//     const { children, ...otherProps } = props;

//     return (
//       <Radio
//         {...otherProps}
//         classNames={{
//           base: cn(
//             "flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between",
//             "cursor-pointer rounded-full border-2 border-default-200/60",
//             "data-[selected=true]:border-primary",
//           ),
//           label: "text-tiny text-default-500",
//           labelWrapper: "px-1 m-0",
//           wrapper: "hidden",
//         }}
//       >
//         {children}
//       </Radio>
//     );
//   };

//   return (
//     <div className="flex">
//       <RangeCalendar
//         bottomContent={
//           <RadioGroup
//             aria-label="Date precision"
//             classNames={{
//               base: "w-full pb-2",
//               wrapper: "-my-2.5 py-2.5 px-3 gap-1 flex-nowrap max-w-[280px] overflow-x-scroll",
//             }}
//             defaultValue="exact_dates"
//             orientation="horizontal"
//           >
//             <CustomRadio value="exact_dates">Exact dates</CustomRadio>
//             <CustomRadio value="1_day">1 day</CustomRadio>
//             <CustomRadio value="2_days">2 days</CustomRadio>
//             <CustomRadio value="3_days">3 days</CustomRadio>
//             <CustomRadio value="7_days">7 days</CustomRadio>
//             <CustomRadio value="14_days">14 days</CustomRadio>
//           </RadioGroup>
//         }
//         classNames={{
//           content: "w-full",
//         }}
//         focusedValue={focusedValue}
//         nextButtonProps={{
//           variant: "bordered",
//         }}
//         prevButtonProps={{
//           variant: "bordered",
//         }}
//         topContent={
//           <ButtonGroup
//             fullWidth
//             className="px-3 w-1/8 pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
//             radius="full"
//             size="sm"
//             variant="bordered"
//           >
//             <Button
//               onPress={() => {
//                 setValue(nextWeek);
//                 setFocusedValue(nextWeek.end);
//               }}
//             >
//               Next week
//             </Button>
//             <Button
//               onPress={() => {
//                 setValue(thisMonth);
//                 setFocusedValue(thisMonth.start);
//               }}
//             >
//               This month
//             </Button>
//             <Button
//               onPress={() => {
//                 setValue(nextMonthValue), setFocusedValue(nextMonthValue.start);
//               }}
//             >
//               Next month
//             </Button>
//           </ButtonGroup>
//         }
//         value={value}
//         onChange={setValue}
//         onFocusChange={setFocusedValue}
//         cl
//       />
//     </div>
//   );
// }



function App() {
  let [value, setValue] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({weeks: 1, days: 3}),
  });
  let [focusedValue, setFocusedValue] = React.useState(today(getLocalTimeZone()));
  const { start: { year: startYear, month: startMonth, day: startDay, }, end: { year: endYear, month: endMonth, day: endDay, } } = value
console.log({startYear, startMonth, startDay,endYear, endMonth, endDay, });
  let {locale} = useLocale();

  let now = today(getLocalTimeZone());
  let nextMonth = now.add({months: 1});

  let nextWeek = {
    start: startOfWeek(now.add({weeks: 1}), locale),
    end: endOfWeek(now.add({weeks: 1}), locale),
  };
  let thisMonth = {start: startOfMonth(now), end: endOfMonth(now)};
  let nextMonthValue = {start: startOfMonth(nextMonth), end: endOfMonth(nextMonth)};


  const CustomRadio = (props) => {
    const {children, ...otherProps} = props;

    return (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            "flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between",
            "cursor-pointer rounded-full border-2 border-default-200/60",
            "data-[selected=true]:border-primary",
          ),
          label: "text-tiny text-default-500",
          labelWrapper: "px-1 m-0",
          wrapper: "hidden",
        }}
      >
        {children}
      </Radio>
    );
  };

  return (
    <div className="flex ml-20 ring-8 ring-white ring-opacity-20 drop-shadow-2xl hover:scale-105" >
      <RangeCalendar
        bottomContent={
          <RadioGroup
            aria-label="Date precision"
            classNames={{
              base: "w-full pb-2",
              wrapper: "-my-2.5 py-2.5 px-3 gap-1 flex-nowrap max-w-[280px] overflow-x-scroll",
            }}
            defaultValue="exact_dates"
            orientation="horizontal"
          >
            <CustomRadio value="exact_dates">Exact dates</CustomRadio>
            <CustomRadio value="1_day">1 day</CustomRadio>
            <CustomRadio value="2_days">2 days</CustomRadio>
            <CustomRadio value="3_days">3 days</CustomRadio>
            <CustomRadio value="7_days">7 days</CustomRadio>
            <CustomRadio value="14_days">14 days</CustomRadio>
          </RadioGroup>
        }
        classNames={{
          content: "w-full",
        }}
        focusedValue={focusedValue}
        nextButtonProps={{
          variant: "bordered",
        }}
        prevButtonProps={{
          variant: "bordered",
        }}
        topContent={
          <ButtonGroup
            fullWidth
            className="px-3 max-w-full pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
            radius="full"
            size="sm"
            variant="bordered"
          >
            <Button
              onPress={() => {
                setValue(nextWeek);
                setFocusedValue(nextWeek.end);
              }}
            >
              Next week
            </Button>
            <Button
              onPress={() => {
                setValue(thisMonth);
                setFocusedValue(thisMonth.start);
              }}
            >
              This month
            </Button>
            <Button
              onPress={() => {
                setValue(nextMonthValue), setFocusedValue(nextMonthValue.start);
              }}
            >
              Next month
            </Button>
          </ButtonGroup>
        }
        value={value}
        onChange={setValue}
        onFocusChange={setFocusedValue}
      />
    </div>
  );
}




export default function DaysSection() {
  let { locale } = useLocale();

  return (
    <>
      {/* <RangeCalendar
        allowsNonContiguousRanges
        aria-label="Time off request"
        isDateUnavailable={(date) => isWeekend(date, locale)}
        onChange={(e)=>console.log(e)}
      />  */}
      {/* <DaysSection12 /> */}
      <App /> 
    </>

  );
}


// [
//   {
//     Header: "Locke at Broken Wharf",
//     img: "link",
//     rates: '$1 - $2',
//     rating: 4,
//     location: {
//       title: '2 Broken Wharf',
//       location: 'https://www.google.com/maps/place/Locke+at+Broken+Wharf,+Millennium+Bridge/@51.5106626,-0.0967985,15z/data=!4m8!3m7!1s0x0:0xe7cd9380b8b27dec!5m2!4m1!1i2!8m2!3d51.5106626!4d-0.0967985',
//     },
//     openers: [{
//       'Why We Chose It': 'Effortlessly cool and contemporary, the Locke at Broken Wharf combines the feel of a chic apartment with the amenities of a hotel.',
//       'Notable Amenities': 'Communal laundry, gym',
//       'Pros and Cons': '',
//       'Hotel Overview': 'Guests feel like in-the-know locals while staying at the Locke, located across from Millennium Bridge and within walking distance of top sites like St. Paul’s Cathedral and Shakespeare’s Globe. Contemporary design is the name of the game, as common areas are outfitted with neutral color schemes, pops of pastels, plant life, and industrial touches like exposed beams. Rooms are equally understated but fully equipped with Smeg kitchen appliances, smart TVs, and rainfall showers with Kinsey Apothecary toiletries. Entry-level rooms are aptly named Micro Studios (at 200 square feet), while higher-level suites offer more space (320 square feet), panoramic views of the Thames, and even washer-dryer units. Guests can be found mingling in the first-floor coworking space, or at the all-day cafe, Shaman, which offers specialty coffee, cocktails, and a menu of healthy—but never boring—dishes. There’s also a boutique selling candles, skincare, and gifts sourced from independent designers.',
//     }]
//   },
//   ...duplicates(6-8)
// ]


