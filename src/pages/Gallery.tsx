
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomBreadcrumb from '@/components/ui/custom-breadcrumb';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
      title: language === 'ar' ? 'الكسكسي الليبي' : 'Libyan Couscous',
      description: language === 'ar' ? 'طبق تقليدي من أشهر الأطباق الليبية' : 'Traditional dish and one of the most famous Libyan dishes'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      title: language === 'ar' ? 'أطباق متنوعة' : 'Variety of Dishes',
      description: language === 'ar' ? 'تشكيلة من الأطباق الليبية المختلفة' : 'A variety of different Libyan dishes'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=300&h=200&fit=crop',
      title: language === 'ar' ? 'حلويات تقليدية' : 'Traditional Sweets',
      description: language === 'ar' ? 'حلويات ليبية تقليدية لذيذة' : 'Delicious traditional Libyan sweets'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop',
      title: language === 'ar' ? 'فنون الطبخ' : 'Culinary Arts',
      description: language === 'ar' ? 'عرض لفنون الطبخ الليبي التقليدي' : 'Showcase of traditional Libyan culinary arts'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      title: language === 'ar' ? 'البيتزا الليبية' : 'Libyan Pizza',
      description: language === 'ar' ? 'البيتزا على الطريقة الليبية' : 'Pizza Libyan style'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop',
      title: language === 'ar' ? 'أطباق رئيسية' : 'Main Dishes',
      description: language === 'ar' ? 'مجموعة من الأطباق الرئيسية الليبية' : 'Collection of Libyan main dishes'
    }
  ];

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <div>
      <CustomBreadcrumb />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {language === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.thumb}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
          {selectedImageData && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                <h3 className="text-xl font-semibold mb-2">{selectedImageData.title}</h3>
                <p className="text-gray-300">{selectedImageData.description}</p>
              </div>
              
              {/* Thumbnail navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((img, index) => (
                  <button
                    key={img.id}
                    className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                      img.id === selectedImage ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(img.id)}
                  >
                    <img src={img.thumb} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
