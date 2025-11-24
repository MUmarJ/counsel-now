'use client';

import { motion } from 'framer-motion';
import { Quote, Award, Globe, Calendar, Building2, GraduationCap, Users } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/content.config';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const highlightIcons = [Calendar, Globe, Award];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-emerald-50 to-white pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-section-title font-bold text-emerald-900 mb-6">
            {siteConfig.about.heading}
          </h2>
          <p className="text-emerald-700 text-xl font-medium italic">
            {siteConfig.about.greeting}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-2 lg:sticky lg:top-24 space-y-6"
          >
            {siteConfig.about.photo.type === 'photo' ? (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl transform -rotate-3" />
                <Image
                  src={siteConfig.about.photo.path}
                  alt={siteConfig.about.photo.alt}
                  width={600}
                  height={600}
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="aspect-square bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-4 border-white/20">
                    <span className="text-6xl font-bold">
                      {siteConfig.metadata.counselorName.split(' ')[0].charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{siteConfig.metadata.counselorName}</h3>
                </div>
              </div>
            )}

            {/* Trust Signals - By the Numbers */}
            {siteConfig.about.highlights && (
              <div className="grid grid-cols-3 gap-2">
                {siteConfig.about.highlights.map((highlight, index) => {
                  const Icon = highlightIcons[index];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-center p-3 bg-white rounded-xl border border-emerald-100 shadow-sm"
                    >
                      <Icon className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-emerald-900">{highlight.value}</div>
                      <div className="text-xs text-slate-500">{highlight.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-10"
          >
            {/* Bio Sections */}
            <div className="space-y-6">
              {/* Intro */}
              <p className="text-lg font-medium text-slate-700 leading-relaxed">
                {siteConfig.about.introParagraph}
              </p>

              {/* Journey */}
              <div>
                <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                  My Journey
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {siteConfig.about.journeyParagraph}
                </p>
              </div>

              {/* Training */}
              <div>
                <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                  Sacred Training
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {siteConfig.about.trainingParagraph}
                </p>
              </div>
            </div>

            {/* Credentials - Featured Award + Grid */}
            <div>
              <h3 className="text-xl font-bold text-emerald-900 mb-6">
                Leadership & Affiliations
              </h3>

              {/* Featured Award */}
              {siteConfig.about.credentials.filter(c => c.category === 'recognition').map((credential, index) => (
                <motion.div
                  key={`award-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-5 p-5 bg-amber-50 rounded-xl border-2 border-amber-200 hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-amber-900">{credential.role}</p>
                      <p className="text-sm text-amber-700">{credential.org}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Other Credentials Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {siteConfig.about.credentials.filter(c => c.category !== 'recognition').map((credential, index) => {
                  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                    Building2,
                    GraduationCap,
                    Users,
                  };
                  const Icon = iconMap[credential.icon] || Building2;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-sm transition-all"
                    >
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-emerald-900">{credential.role}</p>
                        <p className="text-sm text-slate-500 leading-snug">{credential.org}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote - Full Width */}
        {siteConfig.about.quote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <Card className="relative bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <Quote className="absolute top-4 left-4 w-12 h-12 text-white/20" />
                <div className="relative max-w-4xl mx-auto text-center">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4 italic">
                    &ldquo;{siteConfig.about.quote.text}&rdquo;
                  </p>
                  <p className="text-emerald-100">
                    — {siteConfig.about.quote.reference}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
