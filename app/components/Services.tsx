'use client';

import { motion } from 'framer-motion';
import { Heart, BookOpen, Sparkles, Clock, DollarSign, Users, Calendar, Mic, Globe, Star } from 'lucide-react';
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

export default function Services({ onBookingClick }: { onBookingClick: () => void }) {
  const iconMap: Record<string, React.ElementType> = {
    Heart,
    BookOpen,
    Sparkles,
    Users,
    Calendar,
    Mic,
    Globe,
  };

  const getIcon = (iconName: string) => iconMap[iconName] || Heart;

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-section-title font-bold text-emerald-900 mb-6">
            {siteConfig.services.heading}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto prose-relaxed">
            {siteConfig.services.subheading}
          </p>
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-emerald-700 mb-6 text-center">
            Popular Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.featured.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  className="group h-full"
                >
                  <Card className="h-full bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">
                    {'popular' in service && service.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                          <Star className="w-3 h-3 mr-1 fill-amber-500 text-amber-500" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-emerald-900">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="grow">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">Duration</span>
                          <span className="font-medium text-slate-700">{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">
                            {'priceNote' in service ? service.priceNote : 'Price'}
                          </span>
                          <span className="font-semibold text-emerald-700">${service.price}</span>
                        </div>
                        {'altPrice' in service && (
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500">{service.altPriceNote}</span>
                            <span className="font-semibold text-emerald-700">${service.altPrice}</span>
                          </div>
                        )}
                        {'followUpPrice' in service && (
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Follow-up sessions</span>
                            <span>${service.followUpPrice}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="shrink-0 mt-auto">
                      <Button
                        onClick={onBookingClick}
                        className="w-full bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 py-5"
                      >
                        Book Session
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* All Services by Category */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-emerald-700 mb-6 text-center">
            Explore All Services
          </h3>

          {/* Desktop: Tabs */}
          <div className="hidden md:block">
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
                {siteConfig.services.categories.map((category) => {
                  const Icon = getIcon(category.icon);
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-4 py-2 rounded-lg border border-emerald-200 hover:border-emerald-400 transition-all"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {siteConfig.services.categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="h-full hover:border-emerald-300 hover:shadow-md transition-all">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base font-semibold text-emerald-900">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-slate-600">
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="flex items-center justify-between text-sm mb-3">
                              <div className="flex items-center text-slate-500">
                                <Clock className="w-3.5 h-3.5 mr-1" />
                                {service.duration}
                              </div>
                              <div className="font-semibold text-emerald-700">
                                {service.price.includes('Contact') ? (
                                  <span className="text-xs">{service.price}</span>
                                ) : (
                                  <>
                                    ${service.price}
                                    {'priceNote' in service && (
                                      <span className="text-xs text-slate-400 ml-1">
                                        ({service.priceNote})
                                      </span>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                            {'altPrice' in service && (
                              <div className="text-xs text-slate-500 mb-3">
                                or ${service.altPrice} ({service.altPriceNote})
                              </div>
                            )}
                            <Button
                              onClick={onBookingClick}
                              variant="outline"
                              size="sm"
                              className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                            >
                              Book
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Mobile: Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {siteConfig.services.categories.map((category) => {
                const Icon = getIcon(category.icon);
                return (
                  <AccordionItem
                    key={category.id}
                    value={category.id}
                    className="border border-emerald-100 rounded-lg px-4"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                          <Icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="font-semibold text-emerald-900">{category.name}</span>
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {category.services.length}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-3">
                        {category.services.map((service) => (
                          <Card key={service.id} className="border-emerald-100">
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-emerald-900 mb-1">
                                {service.title}
                              </h4>
                              <p className="text-sm text-slate-600 mb-3">
                                {service.description}
                              </p>
                              <div className="flex items-center justify-between text-sm mb-3">
                                <span className="text-slate-500">{service.duration}</span>
                                <span className="font-semibold text-emerald-700">
                                  {service.price.includes('Contact') ? service.price : `$${service.price}`}
                                </span>
                              </div>
                              <Button
                                onClick={onBookingClick}
                                size="sm"
                                className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                              >
                                Book
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6 text-lg">
            Not sure which service fits your needs?
          </p>
          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-5 sm:px-10 sm:py-7 rounded-xl hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 font-semibold transform hover:-translate-y-1"
          >
            Get in Touch
          </Button>
          <p className="text-sm text-slate-500 mt-4">
            We&apos;ll help you find the right path forward
          </p>
        </motion.div>
      </div>
    </section>
  );
}
