'use client';

import { useState, useEffect } from 'react';
import { Menu, Phone } from 'lucide-react';
import { siteConfig } from '@/content.config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import BrandLogo from '@/app/components/BrandLogo';
import BrandText from '@/app/components/BrandText';

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
            ) : siteConfig.branding.logo.type === 'image' ? (
              <BrandLogo
                className="h-12 w-auto transition-transform group-hover:scale-105"
                fill={siteConfig.branding.logo.logoColor}
              />
            ) : (
              // both: logo + text image (SVG with custom colors)
              <div className="flex items-center space-x-3">
                <BrandLogo
                  className="h-12 w-auto transition-transform group-hover:scale-105"
                  fill={siteConfig.branding.logo.logoColor}
                />
                <BrandText
                  className="h-8 w-auto transition-transform group-hover:scale-105"
                  fill={siteConfig.branding.logo.textColor}
                />
              </div>
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
            <Button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 font-medium"
            >
              Book Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-emerald-600"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Shadcn Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-emerald-900">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-8">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="justify-start text-slate-700 hover:text-emerald-600 hover:bg-emerald-50"
              >
                {link.label}
              </Button>
            ))}
            <a
              href={`tel:${siteConfig.metadata.phone.replace(/\D/g, '')}`}
              className="flex items-center space-x-2 px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.metadata.phone}</span>
            </a>
            <Button
              onClick={() => {
                onBookingClick();
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300"
            >
              Book Session
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
