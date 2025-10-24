'use client';

import { motion } from 'framer-motion';
import { Star, Users, Calendar } from 'lucide-react';
import { siteConfig } from '@/content.config';

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  const scrollToServices = () => {
    const element = document.getElementById('services');
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pattern-bg pt-20"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white/50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              {siteConfig.hero.headline}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                {siteConfig.hero.headlineHighlight}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl"
            >
              {siteConfig.hero.subheadline}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
            >
              {siteConfig.hero.primaryCTA.text}
            </button>
            <button
              onClick={scrollToServices}
              className="border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 font-semibold text-lg"
            >
              {siteConfig.hero.secondaryCTA.text}
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-8"
          >
            {siteConfig.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  {stat.icon === 'Star' && <Star className="w-6 h-6 text-amber-500" />}
                  {stat.icon === 'Users' && <Users className="w-6 h-6 text-emerald-600" />}
                  {stat.icon === 'Calendar' && <Calendar className="w-6 h-6 text-emerald-600" />}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-emerald-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {siteConfig.hero.image.type === 'photo' ? (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl transform rotate-3" />
              <img
                src={siteConfig.hero.image.path}
                alt={siteConfig.hero.image.alt}
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="relative aspect-[4/5] bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 pattern-bg opacity-20" />
              <div className="relative text-white text-center p-8">
                <div className="w-48 h-48 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border-4 border-white/20">
                  <Users className="w-24 h-24" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{siteConfig.metadata.siteName}</h3>
                <p className="text-emerald-100 text-lg">Professional Counseling</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
