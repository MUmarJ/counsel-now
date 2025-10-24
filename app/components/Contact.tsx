'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/content.config';

export default function Contact({ onBookingClick }: { onBookingClick: () => void }) {
  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Phone,
      Mail,
      MapPin,
    };
    return icons[iconName] || Phone;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-emerald-50 pattern-bg">
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
            {siteConfig.contact.sectionTitle}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {siteConfig.contact.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {siteConfig.contact.methods.map((method, index) => {
              const Icon = getIcon(method.icon);
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-900 mb-1">
                      {method.label}
                    </h3>
                    <p className="text-slate-600">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Office Hours & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Office Hours */}
            <div className="bg-white rounded-2xl border border-emerald-100 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-emerald-600" />
                <h3 className="text-2xl font-bold text-emerald-900">
                  {siteConfig.contact.officeHours.title}
                </h3>
              </div>
              <div className="space-y-3">
                {siteConfig.contact.officeHours.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-emerald-50 last:border-0"
                  >
                    <span className="font-medium text-slate-700">{item.days}</span>
                    <span className="text-slate-600">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-3">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-emerald-100 mb-6">
                Schedule your first session today and take the first step towards healing and growth.
              </p>
              <button
                onClick={onBookingClick}
                className="w-full bg-white text-emerald-700 px-6 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Your Session Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-emerald-200 text-center"
        >
          <p className="text-slate-600 mb-4">
            © {new Date().getFullYear()} {siteConfig.metadata.siteName}. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a
              href="/privacy"
              className="text-emerald-700 hover:text-emerald-600 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-400">•</span>
            <a
              href="/terms"
              className="text-emerald-700 hover:text-emerald-600 transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-slate-400">•</span>
            <a
              href="/cancellation"
              className="text-emerald-700 hover:text-emerald-600 transition-colors"
            >
              Cancellation Policy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
