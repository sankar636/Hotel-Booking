import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import ListRooms from './Components/ListRooms';
import AddRoom from './Components/AddRoom';
import HotelRegister from './Components/HotelRegister';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rooms" element={<ListRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/register-hotel" element={<HotelRegister />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;