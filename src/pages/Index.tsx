
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ChefHat, Users, BookOpen, Award, ArrowRight, Star } from 'lucide-react';
import { mockChefs, mockRecipes, mockArticles } from '@/data/mockData';

const Index = () => {
  const { t, language, dir } = useLanguage();

  const features = [
    {
      icon: ChefHat,
      title: language === 'ar' ? 'طهاة محترفون' : 'Professional Chefs',
      description: language === 'ar' ? 'نخبة من أفضل الطهاة الليبيين' : 'Elite of the best Libyan chefs'
    },
    {
      icon: BookOpen,
      title: language === 'ar' ? 'وصفات تراثية' : 'Heritage Recipes',
      description: language === 'ar' ? 'مجموعة غنية من الوصفات التقليدية' : 'Rich collection of traditional recipes'
    },
    {
      icon: Award,
      title: language === 'ar' ? 'شهادات معتمدة' : 'Certified Credentials',
      description: language === 'ar' ? 'برامج تدريب وشهادات مهنية' : 'Professional training programs and certificates'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'مجتمع متفاعل' : 'Active Community',
      description: language === 'ar' ? 'شبكة واسعة من المهتمين بالطبخ' : 'Wide network of cooking enthusiasts'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-40 animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-200 rounded-full opacity-50 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-amber-700 font-semibold mb-4"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`flex flex-col sm:flex-row justify-center gap-4 ${dir === 'rtl' ? 'sm:space-x-reverse sm:space-x-4' : 'sm:space-x-4'}`}
            >
              <Link to="/membership">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                  {t('hero.joinUs')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg">
                  {t('hero.learnMore')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            >
              {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              {language === 'ar' 
                ? 'نحن نقدم أفضل الخدمات والبرامج التدريبية للطهاة في ليبيا'
                : 'We provide the best services and training programs for chefs in Libya'
              }
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Chefs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'طهاتنا المميزون' : 'Our Featured Chefs'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تعرف على نخبة من أفضل الطهاة الليبيين المتخصصين في المأكولات التراثية'
                : 'Meet the elite of the best Libyan chefs specializing in heritage cuisine'
              }
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {mockChefs.slice(0, 3).map((chef, index) => (
              <motion.div key={chef.id} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={chef.avatar}
                        alt={chef.name[language]}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <Star className="w-4 h-4 inline mr-1" />
                        {language === 'ar' ? 'مميز' : 'Featured'}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {chef.name[language]}
                      </h3>
                      <p className="text-amber-600 font-medium mb-3">
                        {chef.specialty[language]}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {chef.bio[language]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link to="/chefs">
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                {t('common.viewAll')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Recipes Section */}
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
              {language === 'ar' ? 'وصفات مميزة' : 'Featured Recipes'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'اكتشف أشهى الوصفات الليبية التقليدية مع تعليمات مفصلة'
                : 'Discover the most delicious traditional Libyan recipes with detailed instructions'
              }
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {mockRecipes.slice(0, 2).map((recipe, index) => (
              <motion.div key={recipe.id} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={recipe.image}
                      alt={recipe.title[language]}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {recipe.category[language]}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {recipe.title[language]}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {recipe.description[language]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link to="/recipes">
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                {t('common.viewAll')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'آخر المقالات' : 'Latest Articles'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تابع آخر الأخبار والمقالات المتعلقة بعالم الطبخ والطهي'
                : 'Follow the latest news and articles related to the world of cooking and culinary arts'
              }
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {mockArticles.slice(0, 2).map((article, index) => (
              <motion.div key={article.id} variants={itemVariants}>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link to="/articles">
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                {t('common.viewAll')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

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
                {t('hero.joinUs')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
