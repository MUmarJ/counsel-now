'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Quote } from 'lucide-react';
import { siteConfig } from '@/content.config';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-emerald-50 to-white pattern-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {siteConfig.about.photo.type === 'photo' ? (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl transform -rotate-3" />
                <img
                  src={siteConfig.about.photo.path}
                  alt={siteConfig.about.photo.alt}
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="aspect-square bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="w-48 h-48 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border-4 border-white/20">
                    <span className="text-8xl font-bold">
                      {siteConfig.metadata.counselorName.split(' ')[0].charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold">{siteConfig.metadata.counselorName}</h3>
                </div>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
                {siteConfig.about.sectionTitle}
              </h2>
              <p className="text-emerald-700 text-lg font-medium italic">
                {siteConfig.about.greeting}
              </p>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p className="text-lg">{siteConfig.about.introParagraph}</p>
              <p className="text-lg">{siteConfig.about.bioParagraph}</p>
            </div>

            {/* Credentials */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Credentials & Experience
              </h3>
              {siteConfig.about.credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{credential.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            {siteConfig.about.quote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 rounded-2xl shadow-xl mt-8"
              >
                <Quote className="absolute top-4 left-4 w-12 h-12 text-white/20" />
                <div className="relative">
                  <p className="text-lg md:text-xl font-medium leading-relaxed mb-4 italic">
                    "{siteConfig.about.quote.text}"
                  </p>
                  <p className="text-emerald-100 text-right">
                    — {siteConfig.about.quote.source}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
