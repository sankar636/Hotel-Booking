import React from 'react'
import Title from './Title.jsx'
import { assets, exclusiveOffers } from '../assets/assets'
import HotelCard from './HotelCard.jsx'
import OfferCard from './OfferCard.jsx'

const ExclusiveOffer = () => {
    return (
        <div className='py-10 px-6'>
            <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center md:px-16 lg:px-24'>
                <Title
                    title='Exclusive Offers'
                    subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
                    aline='text-left'
                />

                <button className='group flex items-center gap-2 font-medium cursor-pointer mt-6 sm:mt-0 bg-white hover:bg-gray-200 px-3 py-2 rounded-2xl'>
                    View All Offers
                    <img
                        src={assets.arrowIcon}
                        alt='ArrowIcon'
                        className='group-hover:translate-x-1 transition-all'
                    />
                </button>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-6 mt-20 px-6'>
                {exclusiveOffers.slice(0, 4).map((item) => (
                    <OfferCard item={item} key={item._id} />
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffer