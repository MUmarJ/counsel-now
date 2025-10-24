'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { siteConfig } from '@/content.config';

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'text-amber-400 fill-amber-400'
            : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            {siteConfig.testimonials.sectionTitle}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {siteConfig.testimonials.sectionSubtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-8 hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-emerald-600/20" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-emerald-100">
                  {testimonial.photo ? (
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-emerald-900">
                      {testimonial.name}
                    </p>
                    {testimonial.location && (
                      <p className="text-sm text-slate-500">
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-6 rounded-2xl shadow-xl">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {renderStars(5)}
            </div>
            <p className="text-3xl font-bold mb-1">5.0 Average Rating</p>
            <p className="text-emerald-100">
              Based on {siteConfig.testimonials.items.length}+ client reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
