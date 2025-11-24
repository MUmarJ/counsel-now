"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/content.config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero({
  onBookingClick,
}: {
  onBookingClick: () => void;
}) {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="text-hero font-bold"
            >
              {siteConfig.hero.headline}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                {siteConfig.hero.headlineHighlight}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 prose-relaxed max-w-2xl"
            >
              {siteConfig.hero.subheadline}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={onBookingClick}
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-4 sm:px-8 sm:py-6 rounded-xl hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 font-semibold text-base sm:text-lg transform hover:-translate-y-1"
            >
              {siteConfig.hero.primaryCTA.text}
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-700 px-6 py-4 sm:px-8 sm:py-6 rounded-xl hover:bg-emerald-50 transition-all duration-300 font-semibold text-base sm:text-lg"
            >
              {siteConfig.hero.secondaryCTA.text}
            </Button>
          </motion.div>
          {/* Stats - Clean, no icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 pt-6 border-t border-emerald-100"
          >
            {siteConfig.hero.stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </div>
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
          {siteConfig.hero.image.type === "photo" ? (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl transform rotate-3" />
              <Image
                src={siteConfig.hero.image.path}
                alt={siteConfig.hero.image.alt}
                width={600}
                height={720}
                className="relative rounded-3xl shadow-2xl w-full max-h-[80vh] object-cover"
              />
            </div>
          ) : (
            <div className="relative aspect-[4/5] bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 pattern-bg opacity-20" />
              <div className="relative text-white text-center p-8">
                <div className="w-48 h-48 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border-4 border-white/20">
                  <Users className="w-24 h-24" />
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {siteConfig.metadata.siteName}
                </h3>
                <Badge
                  variant="secondary"
                  className="text-emerald-100 bg-white/20 text-lg"
                >
                  Professional Counseling
                </Badge>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
