'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/content.config';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
            {siteConfig.contact.heading}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {siteConfig.contact.subheading}
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a href={method.link || '#'}>
                    <Card className="border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="flex items-start space-x-4 p-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-emerald-900 mb-1">
                            {method.label}
                          </h3>
                          <p className="text-slate-600">{method.value}</p>
                          {method.subvalue && (
                            <p className="text-sm text-slate-500 mt-1">{method.subvalue}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
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
            <Card className="border-emerald-100">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <CardTitle className="text-2xl font-bold text-emerald-900">
                    {siteConfig.contact.officeHours.heading}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Begin Your Journey?
                </h3>
                <p className="text-emerald-100 mb-6">
                  Schedule your first session today and take the first step towards healing and growth.
                </p>
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="w-full bg-white text-emerald-700 hover:bg-emerald-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Your Session Now
                </Button>
              </CardContent>
            </Card>
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
