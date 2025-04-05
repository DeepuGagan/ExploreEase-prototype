import React from 'react'
import { foodItems } from '@/models/foodDrink'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const FoodDrink = () => {
  return (
    <>
      {
       foodItems.map((item, index) => {
          return (
            <div key={index} className="flex flex-col justify-center ">
              <div className="py-3 sm:mx-auto sm:max-w-xl">
                <div className="flex max-h-80 space-x-8 border border-gray-100 bg-white p-8 shadow-lg sm:rounded-3xl">
                  <div className="h-48 w-1/2 overflow-visible">
                    <img
                      alt=""
                      className="rounded-3xl shadow-lg h-64 w-60"
                      src={item.img}
                    />
                  </div>
                  <div className="flex w-1/2 flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold">{item.Name}</h2>
                      <div className="rounded-xl bg-yellow-400 p-2 font-bold">
                        {item.rating}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Since</div>
                      <div className="text-lg text-gray-800">{item.year}</div>
                    </div>
                    <p className="max-h-40 overflow-y-hidden text-gray-400">
                      {item.Description}
                    </p>
                    <div className="text-a flex text-2xl font-bold">
                      <Link href={item.resturantLink}>
                        <Button color="primary" variant="ghost">
                          Reserve
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </>

  )
}

export default FoodDrink