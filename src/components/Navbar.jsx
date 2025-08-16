import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Restaurant Name */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              अभिनंदन
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                  : 'text-white hover:text-orange-400 hover:bg-white/5'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                  : 'text-white hover:text-orange-400 hover:bg-white/5'
              }`}
            >
              About
            </Link>
            <Link
              to="/special-dishes"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/special-dishes')
                  ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                  : 'text-white hover:text-orange-400 hover:bg-white/5'
              }`}
            >
              Our Special Dishes
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                  : 'text-white hover:text-orange-400 hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/why-us"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/why-us')
                  ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                  : 'text-white hover:text-orange-400 hover:bg-white/5'
              }`}
            >
              Why Us?
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-orange-400 focus:outline-none transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close icon (X)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-lg mt-2 border border-white/20">
            <div className="px-2 py-2 space-y-1">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/')
                    ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                    : 'text-white hover:text-orange-400 hover:bg-white/5'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/about')
                    ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                    : 'text-white hover:text-orange-400 hover:bg-white/5'
                }`}
              >
                About
              </Link>
              <Link
                to="/special-dishes"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/special-dishes')
                    ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                    : 'text-white hover:text-orange-400 hover:bg-white/5'
                }`}
              >
                Our Special Dishes
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/contact')
                    ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                    : 'text-white hover:text-orange-400 hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/why-us"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/why-us')
                    ? 'text-orange-400 bg-white/10 backdrop-blur-sm'
                    : 'text-white hover:text-orange-400 hover:bg-white/5'
                }`}
              >
                Why Us?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
