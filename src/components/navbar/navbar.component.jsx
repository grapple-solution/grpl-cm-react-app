import React, { useState } from "react";
import { CartIcon, MenuIcon, StoreIcon } from "../../utils/icons.util";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Products", "Contact", "About Us"];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <StoreIcon className="h-8 w-8 text-blue-600" />
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <a href="/cart" className="p-2 text-gray-700 hover:text-blue-600">
              <CartIcon className="h-6 w-6" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-2 p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
