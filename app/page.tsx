'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation onBookingClick={openBookingModal} />
      <Hero onBookingClick={openBookingModal} />
      <Services onBookingClick={openBookingModal} />
      <About />
      <Testimonials />
      <Contact onBookingClick={openBookingModal} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </main>
  );
}
