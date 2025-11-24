'use client';

import { motion } from 'framer-motion';
import { BookOpen, Mic, PenTool } from 'lucide-react';
import { siteConfig } from '@/content.config';
import { Card, CardContent } from '@/components/ui/card';

export default function WrittenWorks() {
  return (
    <section id="publications" className="py-28 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title font-bold text-emerald-900 mb-6">
            {siteConfig.writtenWorks.heading}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto prose-relaxed">
            {siteConfig.writtenWorks.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Featured Book & Translation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            {/* Featured Book */}
            <Card className="border-emerald-200 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8" />
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {siteConfig.writtenWorks.featuredBook.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {siteConfig.writtenWorks.featuredBook.title}
                  </h3>
                  <p className="text-emerald-100 leading-relaxed">
                    {siteConfig.writtenWorks.featuredBook.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Translation Work */}
            <Card className="border-emerald-100 hover:border-emerald-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <PenTool className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-900 mb-2">
                      Translation Work
                    </h3>
                    <p className="text-slate-600">
                      {siteConfig.writtenWorks.translationWork}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Speaking Topics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Card className="border-emerald-100 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <Mic className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    International Speaking Topics
                  </h3>
                </div>
                <div className="space-y-3">
                  {siteConfig.writtenWorks.speakingTopics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                      <span className="text-slate-700">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
