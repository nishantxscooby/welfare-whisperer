import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-primary/90 to-primary/70 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img
              src="https://i.imgur.com/7PeWo0M.jpeg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold transition-all duration-300 group-hover:tracking-wider">
            Welfare Whisperer
          </h1>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link to="/" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            About
          </Link>
          <Link to="/" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Help
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
