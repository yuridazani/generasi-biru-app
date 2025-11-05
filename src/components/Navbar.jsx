// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

// Komponen NavLink (Clean UX)
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="block md:inline-block px-3 py-2 rounded-md text-base 
               font-medium text-brand-dark hover:text-brand-medium 
               transition-colors duration-200"
  >
    {children}
  </a>
);

// Komponen CTA Button (Mendesak)
const CtaButton = ({ href, children }) => (
  <a
    href={href}
    className="
      inline-flex items-center justify-center gap-2 w-full md:w-auto 
      px-6 py-2.5 bg-safety-orange text-white 
      font-bold uppercase tracking-wider rounded-full 
      shadow-lg hover:shadow-xl hover:bg-opacity-90 
      transition-all duration-300"
  >
    {children}
    <ArrowRight className="w-5 h-5" />
  </a>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigasi "BALANCE" kita
  const navItems = [
    { label: 'Kenapa Kami Ada', href: '/manifesto' },
    { label: 'Bukti Kerja', href: '/impact' },
    { label: 'Kru', href: '/team' },
    { label: 'Gabung Gerak', href: '/join' },
  ];

  return (
<nav className="sticky top-0 bg-white shadow-md w-full z-50"> {/* Ganti z-20 ke z-50 */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* 1. Logo (Bold, Profesional) */}
          <a href="/" className="flex-shrink-0">
            <span className="font-display text-2xl font-black text-brand-dark uppercase">
              Generasi Biru
            </span>
          </a>

          {/* 2. Nav Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* 3. Tombol CTA (Desktop - Mendesak) */}
          <div className="hidden md:flex items-center">
            <CtaButton href="/donate">Bahan Bakar</CtaButton>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-brand-dark"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile Menu (Dropdown) */}
  <div className={`
    md:hidden w-full bg-white shadow-lg 
    transition-all duration-300 ease-in-out
    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
  `}>
        <div className="flex flex-col space-y-2 px-6 pt-4 pb-8">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <hr className="my-4 border-alice-blue" />
          <CtaButton href="/donate">Bahan Bakar</CtaButton>
        </div>
      </div>
    </nav>
  );
}