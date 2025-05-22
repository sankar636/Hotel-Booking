import React, { useState } from 'react';
import { assets, cities } from '../assets/assets';

const HotelRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-black/70 items-center z-100'>
            <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2' onSubmit={handleSubmit}>
                <img src={assets.regImage} alt="" className='w-1/2 rounded=xl md:block hidden' />
                <div className='relative flex flex-col items-center
                md:w-1/2 p-8 md:p-10'>
                    <img src={assets.closeIcon} alt="Close-Icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' />
                    <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>
                    <div className='w-full mt-4'>
                        <label htmlFor="name" className='font-medium text-gray-500'>Hotel Name</label>
                        <input type="text" id='name' name='name' placeholder='Type Here' className='border border-gray-200 rounded w-full px-3 py-3 mt-1 outline-indigo-500 font-light' onChange={handleChange} required />
                    </div>
                    <div className='w-full mt-4'>
                        <label htmlFor="phone" className='font-medium text-gray-500'>Phone</label>
                        <input type="text" id='phone' name='phone' placeholder='Type Here' className='border border-gray-200 rounded w-full px-3 py-3 mt-1 outline-indigo-500 font-light' onChange={handleChange} required />
                    </div>
                    <div className='w-full mt-4'>
                        <label htmlFor="address" className='font-medium text-gray-500'>Address</label>
                        <input type="text" id='address' name='address' placeholder='Type Here' className='border border-gray-200 rounded w-full px-3 py-3 mt-1 outline-indigo-500 font-light' onChange={handleChange} required />
                    </div>
                    <div className='w-full mt-4 max-w-60 mr-auto'>
                        <label htmlFor="city" className='font-medium text-gray-500'>City</label>
                        <select id="city" name="city" className='border border-gray-200 rounded w-full px-3 py-3 mt-1 outline-indigo-500 font-light' onChange={handleChange} required>
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option value={city} key={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <button className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2 mr-auto rounded cursor-pointer mt-6'>Register</button>
                </div>
            </form>
        </div>
    );
};

export default HotelRegister;
