import React from 'react'

const CheckInOutForm = () => {
    return (
        <div>
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor='checkInDate' className=''>Check-In</label>
                        <input type="date" id='checkInDate' placeholder='check-in' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='checkOutDate' className=''>Check-out</label>
                        <input type="date" id='checkOutDate' placeholder='check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='guests' className=''>Guests</label>
                        <input type="number" id='guests' placeholder='0' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                </div>
                <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-20 py-3 md:py-4 text-base cursor-pointer bg-blue-400'>
                    Check Abailability
                </button>
            </form>
        </div>
    )
}

export default CheckInOutForm