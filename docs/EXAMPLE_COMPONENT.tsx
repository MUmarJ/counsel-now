// app/components/Hero.tsx
// Example showing how to use content.config.ts in components
// This keeps content separate from component logic

import { siteConfig } from "@/content.config";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onBookingClick: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  // Destructure content from config - NO hardcoded text in component!
  const { hero, metadata } = siteConfig;

  // Handler for secondary CTA
  const handleSecondaryCTA = () => {
    if (hero.secondaryCTA.action === "scrollToServices") {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient - colors from design tokens */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50" />

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="space-y-6">
            {/* Badge - all text from config */}
            {hero.badge && (
              <div className="inline-block">
                <span className="text-sm font-medium text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full">
                  {hero.badge.emoji} {hero.badge.text}
                </span>
              </div>
            )}

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              {hero.headline}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                {hero.headlineHighlight}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 leading-relaxed">
              {hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Primary CTA */}
              <button
                onClick={onBookingClick}
                className="group bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-medium flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{hero.primaryCTA.text}</span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={handleSecondaryCTA}
                className="border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 font-medium flex items-center space-x-2"
              >
                <span>{hero.secondaryCTA.text}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats - dynamically rendered from config array */}
            <div className="flex items-center space-x-8 pt-4">
              {hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-emerald-700">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Image */}
          <div className="relative">
            {hero.image.type === "photo" ? (
              // Real photo from /public/images
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src={hero.image.path}
                  alt={hero.image.alt}
                  width={800}
                  height={1000}
                  className="object-cover aspect-[4/5]"
                  priority
                />
                {hero.image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <p className="font-medium text-lg">
                      {hero.image.caption.name}
                    </p>
                    <p className="text-sm text-emerald-200">
                      {hero.image.caption.title}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              // Placeholder design
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <div className="aspect-[4/5] bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    {/* Logo from config */}
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-white text-6xl font-serif">
                        {siteConfig.branding.logo.text}
                      </span>
                    </div>
                    {hero.image.caption && (
                      <>
                        <p className="text-emerald-900 font-medium text-lg">
                          {hero.image.caption.name}
                        </p>
                        <p className="text-emerald-700">
                          {hero.image.caption.title}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Decorative blurs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// KEY PATTERNS TO FOLLOW:
// ============================================

// 1. Import content config at top
// 2. Destructure only what you need
// 3. Use config values directly in JSX
// 4. Map over arrays for dynamic content
// 5. Keep conditional logic minimal
// 6. NO hardcoded text anywhere
// 7. All images use config paths

// ============================================
// ANOTHER EXAMPLE: Services Component
// ============================================

/*
import { siteConfig } from '@/content.config';
import { Heart, BookOpen, Star, Clock } from 'lucide-react';

const iconMap = {
  heart: Heart,
  book: BookOpen,
  star: Star,
};

export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section header from config *\/}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {services.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {services.subheading}
          </p>
        </div>

        {/* Dynamic service cards from config array *\/}
        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon *\/}
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title *\/}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                {/* Description *\/}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price and duration *\/}
                <div className="flex justify-between items-center pt-4 border-t border-emerald-200">
                  <div className="flex items-center space-x-1 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-bold text-emerald-700">
                    {service.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
*/

// ============================================
// BENEFITS OF THIS PATTERN:
// ============================================

// ✅ Non-technical users can edit content.config.ts
// ✅ No need to touch React components
// ✅ Content changes don't risk breaking code
// ✅ Easy to translate (just duplicate config file)
// ✅ Content is version controlled
// ✅ TypeScript provides autocomplete
// ✅ Single source of truth for all content
// ✅ Components stay clean and reusable
