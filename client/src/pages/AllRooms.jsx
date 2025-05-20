import React from 'react'
import { roomsDummyData } from '../assets/assets.js'
import HotelRoomCard from '../components/HotelRoomCard.jsx'
import FilterSidebar from '../components/FilterSideBar.jsx'

const Allrooms = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-24 md:pt-32 px-4 md:px-14 lg:px-24 xl:px-32'>
      
      <div>
        <div className='flex flex-col items-start text-left'>
          <h1 className='text-4xl md:text-[30px]'>Hotel Rooms</h1>
          <p className='text-sm md:text-base mt-2 max-w-174 text-gray-500/90'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
        </div>
        {roomsDummyData.slice(0,4).map((room,index) => (
            <HotelRoomCard room={room} index={index} key={room._id}/>
        ))}
      </div>
      {/* Filter Side */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
        <FilterSidebar/>
      </div>
    </div>
  )
}

export default Allrooms