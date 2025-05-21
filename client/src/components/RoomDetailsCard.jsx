import React, { useEffect, useState } from "react";
import { facilityIcons, testimonials } from "../assets/assets";
import StarIcon from "./StarIcon";

const RoomDetailsCard = ({ room }) => {
    const [mainImage, setMainImage] = useState(room.images[0]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Room Title and Reviews */}
            <div className="mb-4">
                <h1 className="text-2xl font-semibold">
                    {room.hotel.name} <span className="text-sm text-gray-500">({room.roomType})</span>
                </h1>
                <div className="flex items-center gap-2 my-3">
                    <div className="flex items-center gap-1">
                        {Array(5).fill(0).map((_, index) => (
                            <StarIcon key={index} filled={testimonials.rating > index} />
                        ))}
                    </div>
                    <p className="text-sm text-gray-600">200+ reviews</p>
                    <span className="ml-2 bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">20% OFF</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                    {room.hotel.address}
                </div>
            </div>

            {/* Room Images */}
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <img
                        src={mainImage}
                        alt="Main Room Image"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    {room.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Room Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                            onClick={() => setMainImage(img)}
                        />
                    ))}
                </div>

            </div>

            {/* Room Amenities and Price */}
            <div className="mt-6 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Experience Luxury Like Never Before</h2>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {room.amenities.length > 0 ? (
                            room.amenities.map((item, index) => (
                                <div className="flex items-center gap-2" key={index}>
                                    <img src={facilityIcons[item]} alt={item} className="w-4 h-4" />
                                    <label className="text-sm text-gray-700">{item}</label>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">No amenities available</p>
                        )}
                    </div>
                </div>
                <div className="text-2xl font-bold">
                    ${room.pricePerNight}
                    <span className="text-base font-medium text-gray-600">/ day</span>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsCard;
