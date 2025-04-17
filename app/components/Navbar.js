"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const pageSpeedItem = { href: "/pagespeed", label: "Speed Insights" };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-[#161E42]/95 backdrop-blur-md shadow-lg' : 'bg-[#161E42]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/newsaasnext.png"
              alt="SaaSNext Logo"
              width={160}
              height={50}
              priority
              className="h-12 w-auto md:h-14 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
            <div className="flex items-center space-x-1 lg:space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm lg:text-base font-medium text-white hover:text-orange-400 
                    transition-colors relative group ${pathname === item.href ? 'text-orange-400' : ''}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform origin-left 
                    scale-x-0 transition-transform group-hover:scale-x-100 
                    ${pathname === item.href ? 'scale-x-100' : ''}`}>
                  </span>
                </Link>
              ))}
            </div>
            {/* PageSpeed Button */}
            <Link
              href={pageSpeedItem.href}
              className={`ml-2 px-4 py-2 text-sm lg:text-base rounded-full bg-gradient-to-r 
                from-orange-500 to-orange-600 text-white font-medium hover:shadow-lg 
                hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5
                ${pathname === pageSpeedItem.href ? 'shadow-lg shadow-orange-500/20' : ''}`}
            >
              {pageSpeedItem.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-200 hover:text-white 
              hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#161E42]/98 backdrop-blur-lg z-50 md:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-medium text-white hover:text-orange-400 
                  transition-colors ${pathname === item.href ? 'text-orange-400' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={pageSpeedItem.href}
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 
                text-white font-medium hover:shadow-lg hover:shadow-orange-500/20 
                transition-all duration-300"
            >
              {pageSpeedItem.label}
            </Link>
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-orange-400 
              transition-colors"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
}
