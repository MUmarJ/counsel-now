'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Sparkles, Clock, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { siteConfig } from '@/content.config';

export default function Services({ onBookingClick }: { onBookingClick: () => void }) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Heart,
      BookOpen,
      Sparkles,
    };
    const Icon = icons[iconName] || Heart;
    return Icon;
  };

  return (
    <section id="services" className="py-20 bg-white">
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
            {siteConfig.services.sectionTitle}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {siteConfig.services.sectionSubtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.items.map((service, index) => {
            const Icon = getIcon(service.icon);
            const isExpanded = expandedService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-100 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      <span>{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Expand/Collapse Details */}
                  {service.detailedDescription && (
                    <div className="border-t border-emerald-200 pt-4">
                      <button
                        onClick={() => setExpandedService(isExpanded ? null : service.id)}
                        className="flex items-center justify-between w-full text-emerald-700 hover:text-emerald-600 font-medium transition-colors"
                      >
                        <span>More Details</span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-slate-600 text-sm leading-relaxed"
                        >
                          {service.detailedDescription}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Book Button */}
                  <button
                    onClick={onBookingClick}
                    className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    Book This Service
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            Not sure which service is right for you?
          </p>
          <button
            onClick={onBookingClick}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 font-semibold transform hover:-translate-y-1"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
