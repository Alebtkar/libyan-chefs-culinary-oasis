
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { mockChefs } from '@/data/mockData';

const ChefsCarousel = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(mockChefs.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentChefs = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return mockChefs.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'فريق العمل والطهاة' : 'Our Team & Chefs'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تعرف على نخبة من أفضل الطهاة الليبيين المتخصصين في المأكولات التراثية والحديثة'
                : 'Meet the elite of the best Libyan chefs specializing in traditional and modern cuisine'
              }
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {mockChefs
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((chef) => (
                          <Card key={chef.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden group">
                            <CardContent className="p-0">
                              <div className="relative">
                                <img
                                  src={chef.avatar}
                                  alt={chef.name[language]}
                                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                  {chef.bio[language]}
                                </p>
                                <Link to={`/chefs/${chef.id}`}>
                                  <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/chefs">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                {language === 'ar' ? 'عرض جميع الطهاة' : 'View All Chefs'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsCarousel;
