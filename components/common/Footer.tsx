
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';
import { NAV_LINKS } from '../../constants';
import { NavLinkItem } from '../../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4 flex items-center"><FaLeaf className="mr-2 text-green-500" />SriLanka.travel</h5>
            <p className="text-sm">
              Discover the Pearl of the Indian Ocean. Your ultimate guide to exploring the wonders of Sri Lanka.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {NAV_LINKS.map((link: NavLinkItem) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-green-400 transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-green-500" /> 123 Paradise Road, Colombo, Sri Lanka
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-green-500" /> info@srilanka.travel
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-green-500" /> +94 11 234 5678
              </li>
            </ul>
          </div>
          
          {/* Newsletter (placeholder) */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Newsletter</h5>
            <p className="text-sm mb-2">Subscribe to get the latest travel updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 text-gray-800 rounded-l-md focus:outline-none text-sm"
              />
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition-colors duration-200 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SriLanka.travel. All rights reserved. Designed with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    