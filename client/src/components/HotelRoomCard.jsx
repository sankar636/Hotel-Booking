import React from 'react';
import { assets, testimonials } from '../assets/assets.js';
import StarIcon from './StarIcon.jsx';

const HotelRoomCard = ({ room }) => {
    return (
        <div className="flex flex-col md:flex-row max-w-3xl rounded-2xl shadow-md overflow-hidden bg-white my-4 w-full">
            {/* Room Image */}
            <img
                src={room.images[0]}
                alt="Room Image"
                className="w-full md:w-1/2 h-60 md:h-auto object-cover"
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
                        <div className="flex items-center gap-2">
                            <img src={assets.freeWifiIcon} alt="WiFi" className="w-4 h-4" />
                            <label className="text-sm text-gray-700">free wifi</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={assets.freeBreakfastIcon} alt="Breakfast" className="w-4 h-4" />
                            <label className="text-sm text-gray-700">free breakfast</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={assets.roomServiceIcon} alt="Room Service" className="w-4 h-4" />
                            <label className="text-sm text-gray-700">room service</label>
                        </div>
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
