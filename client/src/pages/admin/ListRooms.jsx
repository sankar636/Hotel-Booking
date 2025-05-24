import React, { useState } from 'react';
import { roomsDummyData } from '../../assets/assets.js';

const ListRooms = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  const toggleAvailability = (roomId) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room._id === roomId ? { ...room, isAvailable: !room.isAvailable } : room
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Room Listings</h1>
      <p className="text-gray-600 mt-2">
        View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border border-gray-200">Name</th>
              <th className="p-3 border border-gray-200">Facility</th>
              <th className="p-3 border border-gray-200">Price / night</th>
              <th className="p-3 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id} className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200">{room.roomType}</td>
                <td className="p-3 border border-gray-200">{room.amenities.join(', ')}</td>
                <td className="p-3 border border-gray-200">${room.pricePerNight}</td>
                <td className="p-3 border border-gray-200">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={room.isAvailable}
                      onChange={() => toggleAvailability(room._id)}
                      className="toggle-checkbox"
                    />
                    <span>{room.isAvailable ? 'Available' : 'Unavailable'}</span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRooms;