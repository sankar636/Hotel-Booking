import React, { useState } from 'react';
import Title from '../components/Title';
import { assets, userBookingsDummyData } from '../assets/assets';

const MyBookings = () => {

    const [booking, setBooking] = useState(userBookingsDummyData)
    return (
        <div className='pt-20'>
            <div className='mx-2.5 py-4 border-b-2 border-gray-300'>
                <Title
                    title='My Bookings'
                    subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks'
                />
            </div>
            <div className="max-w-8xl mx-5 mt-10 px-4">
                <div className="hidden md:grid md:grid-cols-3 text-gray-500 font-medium border-b pb-2 text-base">
                    <p>Hotels</p>
                    <p>Date & Timings</p>
                    <p>Payment</p>
                </div>

                {/* Booking List */}
                {booking.map((booking) => (
                    <div key={booking._id} className="grid grid-cols-1 md:grid-cols-3 w-full border-b py-6">
                        {/* Hotel Details */}
                        <div className="flex items-start gap-4 px-2">
                            <img src={booking.room.images[0]} alt={booking.room.roomType} className="w-32 h-32 rounded-md object-cover" />
                            <div>
                                <h3 className="text-lg font-semibold">{booking.hotel.name} <span className="text-sm font-normal">({booking.room.roomType})</span></h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <img src={assets.locationIcon} alt="" className="w-4 h-4" />
                                    <p className="text-gray-500">{booking.address}</p>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <img src={assets.guestsIcon} alt="" className="w-4 h-4" />
                                    <p className="text-gray-500">Guests: {booking.guests}</p>
                                </div>
                                <p className="mt-2 font-medium">Total: ${booking.totalPrice}</p>
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div className="flex flex-col gap-1 px-2 mt-4 md:mt-0">
                            <p className="text-gray-500">Check-In: <span className="font-medium">{new Date(booking.checkInDate).toLocaleString()}</span></p>
                            <p className="text-gray-500">Check-Out: <span className="font-medium">{new Date(booking.checkOutDate).toLocaleString()}</span></p>
                        </div>

                        {/* Payment Info */}
                        <div className="flex flex-col gap-2 px-2 mt-4 md:mt-0">
                            <div className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                <p className="text-gray-500">{booking.isPaid ? 'Paid' : 'Unpaid'}</p>
                            </div>
                            {!booking.isPaid && (
                                <button className="px-4 py-2 border rounded-md text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition">
                                    Pay now
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;