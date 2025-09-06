import React from 'react';
import Link from 'next/link';
import {FaSearch} from 'react-icons/fa'
import {
    FaBed,
    FaHotel,
    FaHome,
    FaTree,
    FaBuilding,
    FaUmbrellaBeach,
    FaCampground,
    FaWater,
    FaSwimmingPool,
    FaLeaf,
    // FaCastle,
    FaTree as FaTreehouse, // Reusing icon
    FaRegSun,
  } from "react-icons/fa";
  
  const accommodationTypes = [
    { label: "Rooms", icon: <FaBed /> },
    { label: "Villas", icon: <FaHotel /> },
    { label: "Mansions", icon: <FaHome /> },
    { label: "Countryside", icon: <FaTree /> },
    { label: "Apartments", icon: <FaBuilding /> },
    { label: "Beach Houses", icon: <FaUmbrellaBeach /> },
    { label: "Cabins", icon: <FaCampground /> },
    { label: "Tropical", icon: <FaLeaf /> },
    { label: "New", icon: <FaRegSun /> },
    { label: "Amazing Pool", icon: <FaSwimmingPool /> },
    { label: "Island", icon: <FaWater /> },
    { label: "Camping", icon: <FaCampground /> },
    { label: "Beach House", icon: <FaUmbrellaBeach /> },
    { label: "Treehouse", icon: <FaTreehouse /> },
    { label: "Lakeside", icon: <FaWater /> },
    // { label: "Castles", icon: <FaCastle /> },
    { label: "Lakefront", icon: <FaWater /> },
    { label: "Apartment", icon: <FaBuilding /> },
  ];
  
  

const Header = () => {
  return (
    
        <header className='bg-white shadow-md sticky top-0 z-50 pb-6'>
            {/* {top section} */}
            <div className='flex items-center justify-between px-6 py-4'>
                {/* logo */}
                <Link href="/">
                <span className='text-2xl font-bold text-blue-600'>StayEase</span>
                </Link>
               {/* Search Bar */}
        <div className="flex items-center w-full max-w-lg border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Search destinations or properties"
            className="flex-grow outline-none text-sm px-2"
          />
          <FaSearch className="text-gray-600" />
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <Link href="/signin">
            <button className="text-sm text-gray-700 rounded-full hover:text-blue-600">Sign In</button>
          </Link>
          <Link href="/signup">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <nav className="py-4 px-6 flex gap-6 text-sm font-medium overflow-x-auto whitespace-nowrap">
  {accommodationTypes.map(({ label, icon }) => (
    <button
      key={label}
      className="hover:text-blue-600 transition-colors duration-200 text-gray-700 flex flex-col items-center text-center bg-transparent border-none focus:outline-none"
    >
      <span className="text-4xl mb-1">{icon}</span>
      <span className="text-lg font-semibold">{label}</span>
    </button>
  ))}
</nav>





    </header>
  );
};

export default Header;