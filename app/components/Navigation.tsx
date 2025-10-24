'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/content.config';
import { cn } from '@/lib/utils';

export default function Navigation({ onBookingClick }: { onBookingClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-gradient-to-b from-emerald-50/80 to-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group"
          >
            {siteConfig.branding.logo.type === 'text' ? (
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-emerald-600/30 transition-shadow">
                  {siteConfig.branding.logo.text.charAt(0)}
                </div>
                <span className="text-xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                  {siteConfig.branding.logo.text}
                </span>
              </div>
            ) : (
              <img
                src={siteConfig.branding.logo.imagePath}
                alt={siteConfig.branding.logo.alt}
                className="h-12 w-auto"
              />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${siteConfig.metadata.phone.replace(/\D/g, '')}`}
              className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-600 font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.metadata.phone}</span>
            </a>
            <button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 font-medium"
            >
              Book Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${siteConfig.metadata.phone.replace(/\D/g, '')}`}
              className="flex items-center space-x-2 px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.metadata.phone}</span>
            </a>
            <button
              onClick={onBookingClick}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 font-medium"
            >
              Book Session
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
