import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets.js';

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Rooms', path: '/admin/rooms' },
    { name: 'Add Room', path: '/admin/add-room' },
    { name: 'Register Hotel', path: '/admin/register-hotel' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <div className="mb-6">
        <img src={assets.logo} alt="Admin Logo" className="h-10" />
      </div>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="block px-4 py-2 rounded hover:bg-gray-700">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
