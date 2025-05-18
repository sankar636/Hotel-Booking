import React from 'react'
import Title from './Title.jsx'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-10'>
        <Title title='Featured Hotels' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences' aline='text-center'/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room, index) => (
                <HotelCard index={index} room={room} key={room._id}/>
            ))}
        </div>
        <button 
        onClick={() => {navigate('/rooms');scrollTo(0,0)}}
        className='flex items-center justify-center px-4 py-2 rounded-2xl text-sm my-8 bg-white hover:bg-gray-100 transition-all cursor-pointer'>View All Hotels</button>
    </div>
  )
}

export default FeaturedDestination