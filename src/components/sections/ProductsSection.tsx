
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const ProductsSection = () => {
  const { language } = useLanguage();

  const products = [
    {
      id: 1,
      name: {
        ar: 'كتاب الطبخ الليبي التراثي',
        en: 'Traditional Libyan Cookbook'
      },
      description: {
        ar: 'مجموعة شاملة من الوصفات الليبية الأصيلة',
        en: 'Comprehensive collection of authentic Libyan recipes'
      },
      price: '150 ر.ل',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      rating: 4.8
    },
    {
      id: 2,
      name: {
        ar: 'مجموعة التوابل الليبية',
        en: 'Libyan Spice Collection'
      },
      description: {
        ar: 'خلطات التوابل الأصيلة المستخدمة في الطبخ الليبي',
        en: 'Authentic spice blends used in Libyan cooking'
      },
      price: '75 ر.ل',
      image: 'https://images.unsplash.com/photo-1596040033229-a2b0b2c3c6a8?w=400&h=300&fit=crop',
      rating: 4.9
    },
    {
      id: 3,
      name: {
        ar: 'أدوات الطبخ التقليدية',
        en: 'Traditional Cooking Tools'
      },
      description: {
        ar: 'أدوات الطبخ المستخدمة في إعداد الأطباق التراثية',
        en: 'Cooking tools used in preparing heritage dishes'
      },
      price: '200 ر.ل',
      image: 'https://images.unsplash.com/photo-1556909114-3a0feeac49e0?w=400&h=300&fit=crop',
      rating: 4.7
    },
    {
      id: 4,
      name: {
        ar: 'دورة تدريبية أونلاين',
        en: 'Online Training Course'
      },
      description: {
        ar: 'دورة شاملة لتعلم أساسيات الطبخ الليبي',
        en: 'Comprehensive course to learn Libyan cooking basics'
      },
      price: '300 ر.ل',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      rating: 5.0
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'منتجاتنا' : 'Our Products'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'اكتشف مجموعة متنوعة من المنتجات والخدمات المصممة لإثراء رحلتك في عالم الطبخ الليبي'
                : 'Discover a variety of products and services designed to enrich your journey in the world of Libyan cuisine'
              }
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name[language]}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {language === 'ar' ? 'جديد' : 'New'}
                    </div>
                  </div>
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.rating})
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.name[language]}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description[language]}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-amber-600">
                        {product.price}
                      </span>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        {language === 'ar' ? 'اشتري' : 'Buy'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3">
              {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
