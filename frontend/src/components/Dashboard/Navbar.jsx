import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-headingColor">Dashboard</h1>
          </div> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
