
import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-primary/90 to-primary/70 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-primary font-bold text-sm">WW</span>
          </div>
          <h1 className="text-xl font-bold transition-all duration-300 group-hover:tracking-wider">
            Welfare Whisperer
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
          <Search className="h-4 w-4 text-white/70 mr-2" />
          <span className="text-sm text-white/90">Find government schemes</span>
        </div>
        
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
