import React from 'react';
import { assets, testimonials, facilityIcons } from '../assets/assets.js';
import StarIcon from './StarIcon.jsx';
import { useNavigate } from 'react-router-dom';

const HotelRoomCard = ({ room }) => {
    // console.log(room);    
    const navigate = useNavigate()

    return (
        <div className="flex flex-col md:flex-row max-w-3xl rounded-2xl shadow-md overflow-hidden bg-white my-4 w-full cursor-pointer"
        onClick={() => {navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
        >
            {/* Room Image */}
            <img
                src={room.images[0]}
                alt="Room Image"
                className="w-full md:w-1/2 h-60 md:h-auto object-cover cursor-pointer"
            />

            {/* Details Section */}
            <div className="p-4 w-full md:w-1/2 flex flex-col justify-between">
                {/* Location and Title */}
                <div>
                    <p className="text-sm text-gray-500">{room.hotel.location}</p>
                    <h2 className="text-xl font-semibold">{room.hotel.name}</h2>

                    {/* Stars and Reviews */}
                    <div className="flex items-center gap-2 my-3">
                        <div className="flex items-center gap-1">
                            {Array(5).fill(0).map((_, index) => (
                                <StarIcon key={index} filled={testimonials.rating > index} />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">200+ reviews</p>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                        <img src={assets.locationIcon} alt="Location" className="w-4 h-4" />
                        <p className="truncate">{room.hotel.address}</p>
                    </div>

                    {/* Facilities */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        {room.amenities.map((items, index) => (
                            <div className="flex items-center gap-2" key={index}>
                                <img src={facilityIcons[items]} alt={items} className="w-4 h-4"/>
                                <label className="text-sm text-gray-700">{items}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <p className="text-lg font-semibold mt-4 md:mt-6">
                    ${room.pricePerNight} <span className="text-sm text-gray-500">/day</span>
                </p>
            </div>
        </div>
    );
};

export default HotelRoomCard;
