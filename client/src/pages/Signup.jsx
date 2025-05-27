import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { UserDataContext } from '../context/AuthContext.jsx';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        contact: '',
        role: 'user'
    });
    const [error, setError] = useState('');

    const { user, setUser, updateUser } = useContext(UserDataContext)

    const navigate = useNavigate();

    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSignup = async (e) => {
        e.preventDefault();
        const baseURL = import.meta.env.VITE_BASE_URL;
        try {
            const response = await axios.post(`${baseURL}/auth/register`, formData);
            console.log("Register",response);
            if(response.status === 200){
                const data = response.data
                localStorage.setItem('token', data.token)
                updateUser(data.user)
                navigate('/'); 
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Signup failed';
            setError(errorMessage);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSignup} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
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
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-black text-white px-4 py-2 rounded">
                    Sign Up
                </button>
            </form>
            <p className='ml-8'>Already Have Account <Link to='/login' className='text-blue-600'>Click Here</Link></p>
            <div className='px-7'>
                <div className='px-7'>

                    <p className='text-[10px] leading-tight mb-5'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                        Policy</span> and <span className='underline'>Terms of Service apply</span>.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Signup;
