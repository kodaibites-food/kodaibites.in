import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const useDarkText = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="group-hover:rotate-12 transition-transform duration-300">
              <img src={logoImg} alt="KodaiBites Logo" className="w-10 h-10 object-contain rounded-xl" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold font-display leading-none ${useDarkText ? 'text-slate-900' : 'text-white'} drop-shadow-sm`}>
                Kodai<span className="text-brand">Bites</span>
              </span>
              <span className={`text-[11px] font-medium tracking-wide mt-1 ${useDarkText ? 'text-slate-600' : 'text-white/80'}`}>
                (keerthana catering services)
              </span>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-brand ${isActive ? 'text-brand font-semibold' : (useDarkText ? 'text-slate-600' : 'text-white/90')}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-brand/30"
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${useDarkText ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-xl text-base font-medium ${isActive ? 'bg-brand/10 text-brand' : 'text-slate-700 hover:bg-slate-50'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
