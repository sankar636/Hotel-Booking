import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">Admin Panel</h1>
            <div className="flex items-center gap-4">
                <p>Welcome, {user?.username || 'Admin'}</p>
                <button
                    onClick={() => {
                        logout();
                        navigate('/');
                    }}
                    className="bg-red-500 px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
