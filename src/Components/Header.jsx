import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const navItems = ["Home", "About", "Contact", "Github"];

const Header = () => {
    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Navigation Menu */}
                    <ul className="hidden lg:flex space-x-10 font-medium">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={`/${item.toUpperCase()}`}
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded-lg transition-all duration-200 border-b-2 ${
                                            isActive ? "text-orange-700 border-orange-700" : "text-gray-600 border-transparent hover:text-orange-700 hover:border-orange-700"
                                        }`
                                    }
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 border border-gray-300 rounded-lg text-sm px-4 py-2 transition-all"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/register"
                            className="text-white bg-orange-700 hover:bg-orange-800 rounded-lg text-sm px-4 py-2 transition-all"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;
