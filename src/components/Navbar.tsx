import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        
        <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="nav-link flex flex-col items-center">
        <i className="fas fa-home text-xl mb-1"></i>
        <span className="block">Home</span>
      </Link>
      <div className="border-r border-gray-700 h-6 my-auto"></div>
      <Link to="/Transfer" className="nav-link flex flex-col items-center">
        <i className="fas fa-exchange-alt text-xl mb-1"></i>
        <span className="block">Transfer</span>
      </Link>
      <div className="border-r border-gray-700 h-6 my-auto"></div>
      <Link to="/Pay" className="nav-link flex flex-col items-center">
        <i className="fas fa-money-bill-wave text-xl mb-1"></i>
        <span className="block">Pay</span>
      </Link>
      <div className="border-r border-gray-700 h-6 my-auto"></div>
      <Link to="/History" className="nav-link flex flex-col items-center">
        <i className="fas fa-history text-xl mb-1"></i>
        <span className="block">History</span>
      </Link>
      <div className="border-r border-gray-700 h-6 my-auto"></div>
      <Link to="/profile" className="nav-link flex flex-col items-center">
        <i className="fas fa-user text-xl mb-1"></i>
        <span className="block">Profile</span>
      </Link>
    </nav>

    </div>
  )
}

export default Navbar