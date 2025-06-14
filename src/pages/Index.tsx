
import React from 'react';
import HeroCarousel from '@/components/sections/HeroCarousel';
import InfoIntroduction from '@/components/sections/InfoIntroduction';
import ChefsCarousel from '@/components/sections/ChefsCarousel';
import ProductsSection from '@/components/sections/ProductsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { mockArticles } from '@/data/mockData';

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Info Introduction */}
      <InfoIntroduction />

      {/* Chefs Carousel */}
      <ChefsCarousel />

      {/* Articles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'آخر المقالات والأخبار' : 'Latest Articles & News'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تابع آخر الأخبار والمقالات المتعلقة بعالم الطبخ والطهي في ليبيا'
                : 'Follow the latest news and articles related to the world of cooking and culinary arts in Libya'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mockArticles.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={article.image || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=300&fit=crop'}
                      alt={article.title[language]}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {article.type}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {new Date(article.createdAt).toLocaleDateString(language === 'ar' ? 'ar-LY' : 'en-US')}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {article.title[language]}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {article.summary[language]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/articles">
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                {language === 'ar' ? 'عرض جميع المقالات' : 'View All Articles'} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'ar' ? 'انضم إلى مجتمعنا اليوم' : 'Join Our Community Today'}
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              {language === 'ar' 
                ? 'كن جزءًا من أكبر مجتمع للطهاة في ليبيا وطور مهاراتك مع الخبراء'
                : 'Be part of the largest chef community in Libya and develop your skills with experts'
              }
            </p>
            <Link to="/membership">
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg">
                {language === 'ar' ? 'انضم إلينا' : 'Join Us'} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
