import React from 'react'

const FoodDrink = () => {
  return (
    <>
      {
        Array(10).fill('item').map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center "
            >
              <div className="py-3 sm:mx-auto sm:max-w-xl">
                <div className="flex max-h-80 space-x-8 border border-gray-100 bg-white p-8 shadow-lg sm:rounded-3xl">
                  <div className="h-48 w-1/2 overflow-visible">
                    <img
                      alt=""
                      className="rounded-3xl shadow-lg h-64 w-60"
                      src="https://source.unsplash.com/baked-pancakes-eeqbbemH9-c"
                    />
                  </div>
                  <div className="flex w-1/2 flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold">
                        Sweet Tooth: El niño ciervo
                      </h2>
                      <div className="rounded-xl bg-yellow-400 p-2 font-bold">
                        7.2
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">
                        Series
                      </div>
                      <div className="text-lg text-gray-800">
                        2019
                      </div>
                    </div>
                    <p className="max-h-40 overflow-y-hidden text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="text-a flex text-2xl font-bold">
                      $83.90
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>

  )
}

export default FoodDrink