"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaMicrophone,
  FaUserPlus,
  FaBox,
  FaHeart,
  FaTrashAlt,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Header() {
  const [search, setSearch] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer tracking-wide">
          ShopSmart
        </h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-md px-3 py-1 w-72 md:w-96 shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products, brands and more"
            className="flex-grow outline-none text-gray-700"
          />
          <FaMicrophone className="text-gray-500 ml-2 cursor-pointer hover:text-red-500 transition-colors" />
        </div>

        {/* Icons */}
        <nav className="flex items-center gap-6 relative">
          {/* 🛒 Cart with tooltip */}
          <div className="relative group">
            <FaShoppingCart
              size={24}
              className="cursor-pointer hover:text-yellow-300 transition-colors"
            />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Cart
            </span>
          </div>

          {/* 👤 User Dropdown */}
          <div className="relative" ref={menuRef}>
            <FaUserCircle
              size={26}
              className="cursor-pointer hover:text-yellow-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden z-50">
                <ul className="text-sm">
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <FaUserPlus className="text-indigo-600" /> Sign Up
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <FaBox className="text-purple-600" /> My Orders
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <FaHeart className="text-pink-600" /> Wishlist
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <FaTrashAlt className="text-red-500" /> Delete Account
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <FaSignOutAlt className="text-gray-700" /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
