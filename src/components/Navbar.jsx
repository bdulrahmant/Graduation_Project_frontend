import React from 'react';
import { Link } from 'react-router-dom';
 import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Location */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-3xl font-bold text-blue-500 flex items-center gap-1">
            <img 
    src="\images\rafeq.png" 
    alt="رفيق"
    className="w-[120px] h-auto mb-0 object-contain" 
  />
          </Link>
          <div className="hidden md:flex items-center text-sm text-black gap-1">
            <i className="fa-solid fa-location-dot"></i> مصر، طنطا
          </div>
        </div>

        {/* Main Nav */}
<div className="hidden lg:flex items-center gap-8 font-medium">
  <NavLink 
    to="/c" 
    className={({ isActive }) => 
      isActive 
        ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
        : "text-gray-500 hover:text-blue-500 transition-all"
    }
  >
    الرئيسية
  </NavLink>

  <NavLink 
    to="/d" 
    className={({ isActive }) => 
      isActive 
        ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
        : "text-gray-500 hover:text-blue-500 transition-all"
    }
  >
    رفيقك الصحي
  </NavLink>

  <NavLink 
    to="/" 
    className={({ isActive }) => 
      isActive 
        ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
        : "text-gray-500 hover:text-blue-500 transition-all"
    }
  >
    احجز موعد
  </NavLink>

  <NavLink 
    to="/my-bookings" 
    className={({ isActive }) => 
      isActive 
        ? "text-blue-500 border-b-2 border-blue-500 pb-1" 
        : "text-gray-500 hover:text-blue-500 transition-all"
    }
  >
    حجوزاتي
  </NavLink>
</div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-blue-500 relative">
            <i className="fa-regular fa-bell text-xl"></i>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full cursor-pointer">
            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-600">
              <i className="fa-regular fa-user"></i>
            </div>
            <i className="fa-solid fa-chevron-down text-xs text-blue-600"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}