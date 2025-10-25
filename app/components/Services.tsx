'use client';

import { motion } from 'framer-motion';
import { Heart, BookOpen, Sparkles, Clock, DollarSign } from 'lucide-react';
import { siteConfig } from '@/content.config';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Services({ onBookingClick }: { onBookingClick: () => void }) {
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
            {siteConfig.services.heading}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {siteConfig.services.subheading}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.items.map((service, index) => {
            const Icon = getIcon(service.icon);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full"
              >
                <Card className="h-full bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <CardHeader className="shrink-0">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-emerald-900 line-clamp-2 h-16 flex items-start">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed line-clamp-3 h-18">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="grow space-y-4">
                    {/* Accordion for Full Description */}
                    {service.description && (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="description" className="border-emerald-200">
                          <AccordionTrigger className="text-emerald-700 hover:text-emerald-600 font-medium text-sm py-2">
                            Read More
                          </AccordionTrigger>
                          <AccordionContent className="text-slate-600 text-sm leading-relaxed">
                            {service.description}
                            {service.detailedDescription && (
                              <>
                                <br /><br />
                                {service.detailedDescription}
                              </>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between text-sm pt-2">
                      <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span>{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="shrink-0 mt-auto">
                    <Button
                      onClick={onBookingClick}
                      className="w-full bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg transition-all duration-300"
                    >
                      Book This Service
                    </Button>
                  </CardFooter>
                </Card>
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
          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-6 rounded-xl hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 font-semibold transform hover:-translate-y-1"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
