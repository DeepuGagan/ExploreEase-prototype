import React from 'react';


function MasonryGridGallery() {
  return (
    <>
      <header className="jsx-f704f42be0b5c3bb flex items-end justify-between mt-5 text-center">
        <h2 className="text-2xl md:text-5xl md:leading-relaxed cursor-default-hover text-center mx-auto">
          Featured Destinations
        </h2>
      </header>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-2">
        <div className="grid gap-4">
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1504731231146-c0f65dc6a950?q=80"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Los Angeles</h2>
            </div>
          </div>
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1559554498-dfe2798aa518?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpemVybGFuZHxlbnwwfDF8MHx8fDA%3D"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Switzerland</h2>
            </div>
          </div>
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Jaipur</h2>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1587691254941-bbd1faa13154"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Krabi</h2>
            </div>
          </div>
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1590716209211-ea74d5f63573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3lkbmV5fGVufDB8MXwwfHx8MA%3D%3D"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Sydney</h2>
            </div>
          </div>
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">New York</h2>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
        <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1522547902298-51566e4fb383"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Tokyo</h2>
            </div>
          </div>
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1464790719320-516ecd75af6c"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Barcelona</h2>
            </div>
          </div>

          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1602642977157-b7c8b8003afd"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Cambodia</h2>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
        <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8MHwwfHx8MA%3D%3D"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">London</h2>
            </div>
          </div>
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1542223616-9de9adb5e3e8"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">Seattle</h2>
            </div>
          </div>
          <div className="relative hover:scale-[104%] hover:drop-shadow-3xl">
            <img
              className="h-auto max-w-full rounded-lg object-cover  brightness-50"
              src="https://images.unsplash.com/photo-1551283895-bad586708963"
              alt="gallery-photo"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">San Francisco</h2>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default MasonryGridGallery;
