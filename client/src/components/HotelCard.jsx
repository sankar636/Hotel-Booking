import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
    return (
        <Link
            to={`/rooms/${room._id}`}
            className="relative w-full max-w-72 rounded-xl overflow-hidden bg-white text-gray-700 shadow-[0px_4px_8px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow duration-300"
            onClick={() => scrollTo(0, 0)}
        >
            {/* Image */}
            <img src={room.images[0]} alt="Hotel" className="w-full h-48 object-cover" />

            {/* Best Seller Badge */}
            {index % 2 === 0 && (
                <p className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 font-semibold rounded-full shadow-sm">
                    Best Seller
                </p>
            )}

            {/* Card Body */}
            <div className="p-4">
                {/* Hotel Name and Rating */}
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-md font-semibold text-gray-800 truncate">{room.hotel.name}</h1>
                    <div className="flex items-center gap-1 text-orange-500">
                        <img src={assets.starIconFilled} alt="Star" className="w-4 h-4" />
                        <span className="text-sm font-medium">4.9</span> {/* Replace with dynamic rating if available */}
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <img src={assets.locationIcon} alt="Location" className="w-4 h-4" />
                    <p className="truncate">{room.hotel.address}</p>
                </div>

                {/* Price and Action Button */}
                <div className="flex items-center justify-between">
                    <p className="text-md text-gray-800 font-semibold">
                        ${room.pricePerNight} <span className="text-sm text-gray-500 font-normal">/night</span>
                    </p>
                    <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition-all">
                        Book Now
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default HotelCard;
