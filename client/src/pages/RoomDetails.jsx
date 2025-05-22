import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData, testimonials } from '../assets/assets'
import RoomDetailsCard from '../components/RoomDetailsCard'
import CheckInOutForm from '../components/CheckInOutForm'
import { roomCommonData } from '../assets/assets'
import StarIcon from '../components/StarIcon'


const RoomDetails = () => {
  const { id } = useParams()

  const [room, setRoom] = useState(null)
  // const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    room && setRoom(room)
  }, [])
  return room && (
    <div className='pt-24'>
      <RoomDetailsCard room={room} />
      <CheckInOutForm />

      <div className="mt-20 space-y-6 px-4">
        {roomCommonData.map((spec, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <img src={spec.icon} alt="" className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">{spec.title}</h3>
              <p className="text-gray-600">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='border-y border-gray-300 my-8 max-w-5xl py-10 text-gray-500 px-1.5'>
        <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
      </div>

      <div className="flex flex-col items-start gap-4 p-4 border border-gray-200 rounded-lg">
        <div className="flex items-start gap-4 w-full">
          <img
            src={room.hotel.owner.image}
            alt="Host"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex-1">
            <div className='flex flex-row gap-2'>
              <p className="text-gray-600">Hosted by</p>
              <h3 className="text-lg font-semibold text-gray-900">{room.hotel.owner.username}</h3>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm">
              <div className="flex items-center gap-1">
                {Array(5).fill(0).map((_, index) => (
                  <StarIcon
                    key={index}
                    filled={testimonials.rating > index}
                    className="w-4 h-4 text-yellow-400"
                  />
                ))}
                <span className="text-gray-600">200+ reviews</span>
              </div>
            </div>
          </div>
        </div>

        <button className="w-md mt-2 px-4 py-2 bg-blue-400 text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
          Contact Now
        </button>
      </div>
    </div>
  )
}

export default RoomDetails