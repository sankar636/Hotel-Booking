import React, { useEffect, useState, useContext } from "react";
import { assets } from '../assets/assets.js';
import { Link, useNavigate } from "react-router-dom";
import { getInitials } from '../utils/helper.js';
import { UserDataContext } from "../context/AuthContext.jsx";
const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
);

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' }, // Fixed typo: 'tooms' -> 'rooms'
        { name: 'Experience', path: '/' }, // Fixed typo: 'Exprience' -> 'Experience'
        { name: 'About', path: '/' },
    ];

    const { user, setUser } = useContext(UserDataContext)


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
            {/* Logo */}
            <Link to='/'>
                <img src={`${assets.logo}`} alt="logo" className='h-9 invert opacity-80' />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 `}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </Link>
                ))}

                <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-gray-400'} transition-all`}>
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img src={assets.searchIcon} alt="Search" className={`w-6 h-6 transition duration-300 ${isScrolled ? 'invert' : ''}`} />
                {user && user.username != '' ? (
                    <>
                        <button
                            onClick={() => navigate('/profile')}
                            className="bg-gray-700 text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                            {getInitials(user?.username)}
                        </button>
                        <button
                            className="bg-red-500 text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className="bg-gray-700 text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                            Sign Up
                        </button>
                    </>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                {/* {user && <UserButton />} */}
                <img src={assets.menuIcon} alt="menu" onClick={() => setIsMenuOpen(!isMenuOpen)} className={`invert h-4`} />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img src={assets.closeMenu} alt="" />
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </Link>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    Dashboard
                </button>
                {user && user.username != '' ? (
                    <>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate('/profile');
                            }}
                            className="bg-gray-700 text-white px-8 py-2.5 rounded-full transition-all duration-500">
                            {getInitials(user?.username)}
                        </button>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                // Add logout logic here if needed
                            }}
                            className="bg-red-500 text-white px-8 py-2.5 rounded-full transition-all duration-500">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate('/login');
                            }}
                            className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                            Login
                        </button>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate('/signup');
                            }}
                            className="bg-gray-700 text-white px-8 py-2.5 rounded-full transition-all duration-500">
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;