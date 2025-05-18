import React from 'react';
import offercard from '../assets/exclusiveOfferCardImg1.png'
const OfferCard = ({item,}) => {
    console.log("Item", item);
    
  return (
    <div className="relative max-w-sm rounded-xl overflow-hidden shadow-lg">
      <img
        src={offercard} // Replace with actual image path or URL
        alt="Beach"
        className="w-full h-64 object-cover"
      />
      <div className="absolute top-2 left-2 bg-white text-sm font-semibold text-black px-3 py-1 rounded-full shadow">
        {item.priceOff}% OFF
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 rounded-b-xl">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm mb-2">{item.description}</p>
        <p className="text-xs opacity-80 mb-4">Expires {item.expiryDate}</p>
        <button className="text-sm font-medium underline hover:no-underline flex items-center gap-1">
          View Offers <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
