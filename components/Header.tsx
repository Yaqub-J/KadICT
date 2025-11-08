'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when route changes
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'sticked' : ''}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <Image src="/assets/img/logo (2).png" alt="KAD ICT Hub Logo" width={200} height={200} priority style={{ width: 'auto', height: '45px' }} />
        </Link>

        <i
          className={`mobile-nav-toggle mobile-nav-show bi ${isMobileNavOpen ? 'd-none' : ''} bi-list`}
          onClick={toggleMobileNav}
        ></i>
        <i
          className={`mobile-nav-toggle mobile-nav-hide bi ${isMobileNavOpen ? '' : 'd-none'} bi-x`}
          onClick={toggleMobileNav}
        ></i>

        <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li><Link href="/" className="active">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/startups">Startups</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                <i className={`bi ${theme === 'light' ? 'bi-moon-stars' : 'bi-sun'}`}></i>
              </button>
            </li>
            <li>
              <Link href="/register" className="btn-register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
