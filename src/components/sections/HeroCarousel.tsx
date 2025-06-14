
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HeroCarousel = () => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
      title: {
        ar: 'مرحباً بكم في الجمعية الليبية للطهاة',
        en: 'Welcome to the Libyan Chefs Association'
      },
      subtitle: {
        ar: 'نحن نفخر بتراثنا الطبخي الغني',
        en: 'We are proud of our rich culinary heritage'
      }
    },
    {
      image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b691?w=1200&h=600&fit=crop',
      title: {
        ar: 'طهاة محترفون من جميع أنحاء ليبيا',
        en: 'Professional chefs from all over Libya'
      },
      subtitle: {
        ar: 'ننقل خبراتنا للأجيال القادمة',
        en: 'We pass our expertise to future generations'
      }
    },
    {
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=1200&h=600&fit=crop',
      title: {
        ar: 'وصفات تراثية أصيلة',
        en: 'Authentic traditional recipes'
      },
      subtitle: {
        ar: 'اكتشف أسرار المطبخ الليبي',
        en: 'Discover the secrets of Libyan cuisine'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title[language]}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {slide.subtitle[language]}
              </p>
              <Link to="/membership">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                  {t('hero.joinUs')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
