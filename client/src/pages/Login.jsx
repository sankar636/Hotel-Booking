import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const { user, setUser, updateUser } = useContext(UserDataContext)
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const baseURL = import.meta.env.VITE_BASE_URL;
        try {
            const response = await axios.post(`${baseURL}/auth/login`, formData);
            if(response.status === 200){
                const data = response.data
                localStorage.setItem('token', data.token)
                updateUser(data.user)
                navigate('/'); 
            }
            navigate('/');
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Login failed';
            setError(errorMessage);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-black text-white px-4 py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
