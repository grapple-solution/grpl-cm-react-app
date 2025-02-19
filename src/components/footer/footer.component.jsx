import React from "react";
import { MailIcon, MapPinIcon, PhoneIcon, StoreIcon } from "../../utils/icons.util";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <StoreIcon className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Our Store</span>
            </div>
            <p className="text-gray-300">
              Your one-stop shop for quality products and excellent service.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-blue-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2" />
                <span>info@ourstore.com</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>123 Store Street, City</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Our Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
