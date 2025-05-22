import React, { useState } from 'react';
import { assets } from '../../../client/src/assets/assets';

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: [],
    images: [],
  });

  const amenitiesOptions = ['Free WiFi', 'Free Breakfast', 'Room Service', 'Mountain View', 'Pool Access'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic here
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Add Room</h1>
      <p className="text-gray-600 mt-2">
        Fill in the details carefully and accurate room details, pricing, and amenities to enhance the user booking experience.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {/* Images */}
        <div>
          <label className="block text-gray-700 font-medium">Images</label>
          <div className="flex items-center gap-4 mt-2">
            <img src={assets.uploadArea} alt="Upload" className="w-20 h-20 border rounded-md" />
            <input
              type="file"
              multiple
              onChange={(e) => setFormData({ ...formData, images: [...e.target.files] })}
              className="hidden"
            />
          </div>
        </div>

        {/* Room Type */}
        <div>
          <label className="block text-gray-700 font-medium">Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            required
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Family Suite">Family Suite</option>
            <option value="Luxury Room">Luxury Room</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium">Price / night</label>
          <input
            type="number"
            name="pricePerNight"
            value={formData.pricePerNight}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            required
          />
        </div>

        {/* Amenities */}
        <div>
          <label className="block text-gray-700 font-medium">Amenities</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {amenitiesOptions.map((amenity) => (
              <label key={amenity} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.amenities.includes(amenity)}
                  onChange={() => handleCheckboxChange(amenity)}
                  className="form-checkbox"
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
