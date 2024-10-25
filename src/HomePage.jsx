import React from 'react';
import Header from './Header';

const HomePage = ({ imageStacks = [] }) => {
  return (
    <div className="min-h-screen p-5">
      <Header />
      <header className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold mb-5">Welcome to the Image Gallery</h1>
      </header>
      <section className="mt-10">
        {imageStacks.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 mt-5">
            {imageStacks.map((stack, index) => (
              <div key={index} className="relative p-2 bg-gray-200 rounded shadow hover:bg-gray-300 cursor-pointer">
                <img src={stack.images[0]} alt="Stack Thumbnail" className="w-full h-auto object-cover rounded" />
                <p className="text-center mt-2 text-gray-600">{stack.quote}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-10 text-gray-500">No Images</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
