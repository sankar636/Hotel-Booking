import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'
import RoomDetailsCard from '../components/RoomDetailsCard'

const RoomDetails = () => {
    const {id} = useParams()

    const [room, setRoom] = useState(null)
    // const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
    },[])
  return room && (
    <div className='pt-24'>
        <RoomDetailsCard room={room}/>
    </div>
  )
}

export default RoomDetails