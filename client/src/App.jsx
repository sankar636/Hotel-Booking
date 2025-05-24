import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Allrooms from './pages/Allrooms.jsx';
import RoomDetails from './pages/RoomDetails.jsx';
import MyBookings from './pages/MyBookings.jsx';

// Admin Components
import Sidebar from './components/admin/Sidebar.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import ListRooms from './pages/admin/ListRooms.jsx';
import AddRoom from './pages/admin/AddRoom.jsx'
import HotelRegister from './pages/admin/HotelRegister.jsx';

const App = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Navbar />}
      <div className={isAdminPath ? 'flex' : 'min-h-[70vh]'}>
        {isAdminPath && <Sidebar />}
        <div className={isAdminPath ? 'flex-1 p-6' : ''}>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Allrooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/rooms" element={<ListRooms />} />
            <Route path="/admin/add-room" element={<AddRoom />} />
            <Route path="/admin/register-hotel" element={<HotelRegister />} />
          </Routes>
        </div>
      </div>
      {!isAdminPath && <Footer />}
    </>
  );
};

export default App;