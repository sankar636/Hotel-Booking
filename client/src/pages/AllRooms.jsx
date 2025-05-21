import React, { useState } from 'react';
import { roomsDummyData } from '../assets/assets.js';
import HotelRoomCard from '../components/HotelRoomCard.jsx';
import FilterSidebar from '../components/FilterSideBar.jsx';

const Allrooms = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-18 md:pt-32 px-4 md:px-14 lg:px-24 xl:px-32">
        {/* Left Content */}
        <div className="flex-1">
          {/* Toggle Button */}
          <div className="mb-4 lg:hidden flex justify-end">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Header & Room Cards */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-[30px]">Hotel Rooms</h1>
            <p className="text-sm md:text-base my-2 max-w-174 text-gray-500/90">
              Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
            </p>
          </div>
          {roomsDummyData.slice(0, 4).map((room, index) => (
            <HotelRoomCard room={room} index={index} key={room._id} />
          ))}
        </div>

        {/* Sidebar (always visible on lg, toggle on mobile) */}
        <div className="bg-white w-full lg:w-1/3 max-lg:mb-8 max-lg:flex max-lg:justify-center">
          {showFilters || window.innerWidth >= 1024 ? <FilterSidebar /> : null}
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center items-center mt-8">
        <button className="px-4 py-2 bg-blue-300 rounded-3xl hover:bg-blue-500 transition text-white">
          Show More
        </button>
      </div>
    </>
  );
};

export default Allrooms;
