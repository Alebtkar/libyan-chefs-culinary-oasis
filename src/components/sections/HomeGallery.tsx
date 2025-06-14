
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera, ExternalLink } from 'lucide-react';

const HomeGallery = () => {
  const { language } = useLanguage();

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      alt: language === 'ar' ? 'طبق ليبي تقليدي' : 'Traditional Libyan Dish',
      title: language === 'ar' ? 'الكسكسي الليبي' : 'Libyan Couscous'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
      alt: language === 'ar' ? 'أطباق متنوعة' : 'Variety of Dishes',
      title: language === 'ar' ? 'أطباق متنوعة' : 'Mixed Dishes'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=400&h=300&fit=crop',
      alt: language === 'ar' ? 'حلويات ليبية' : 'Libyan Sweets',
      title: language === 'ar' ? 'حلويات تقليدية' : 'Traditional Sweets'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
      alt: language === 'ar' ? 'طبخ تقليدي' : 'Traditional Cooking',
      title: language === 'ar' ? 'فنون الطبخ' : 'Culinary Arts'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {language === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'اكتشف جمال المطبخ الليبي من خلال مجموعة مختارة من أفضل الصور'
                : 'Discover the beauty of Libyan cuisine through our curated collection of finest photos'
              }
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link to="/gallery">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'عرض جميع الصور' : 'View All Photos'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
