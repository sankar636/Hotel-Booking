import React from 'react';
import { dashboardDummyData, assets } from '../../assets/assets.js';

const Dashboard = () => {
  const { totalBookings, totalRevenue, bookings } = dashboardDummyData;

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Monitor your room listings, track bookings, and analyze revenue—all in one place.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-center gap-4 p-4 bg-white shadow rounded-lg">
          <img src={assets.totalBookingIcon} alt="Total Bookings" className="w-12 h-12" />
          <div>
            <p className="text-gray-500">Total Bookings</p>
            <h2 className="text-xl font-bold">{totalBookings}</h2>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white shadow rounded-lg">
          <img src={assets.totalRevenueIcon} alt="Total Revenue" className="w-12 h-12" />
          <div>
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="text-xl font-bold">${totalRevenue}</h2>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Recent Bookings</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border border-gray-200">User Name</th>
                <th className="p-3 border border-gray-200">Room Name</th>
                <th className="p-3 border border-gray-200">Total Amount</th>
                <th className="p-3 border border-gray-200">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200">{booking.user.username}</td>
                  <td className="p-3 border border-gray-200">{booking.room.roomType}</td>
                  <td className="p-3 border border-gray-200">${booking.totalPrice}</td>
                  <td className="p-3 border border-gray-200">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        booking.isPaid ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {booking.isPaid ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
