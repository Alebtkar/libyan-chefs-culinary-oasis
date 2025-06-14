
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomBreadcrumb from '@/components/ui/custom-breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Filter } from 'lucide-react';

const Products = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: language === 'ar' ? 'جميع المنتجات' : 'All Products' },
    { id: 'spices', name: language === 'ar' ? 'البهارات' : 'Spices' },
    { id: 'tools', name: language === 'ar' ? 'أدوات الطبخ' : 'Cooking Tools' },
    { id: 'books', name: language === 'ar' ? 'كتب الطبخ' : 'Cookbooks' },
    { id: 'ingredients', name: language === 'ar' ? 'المكونات' : 'Ingredients' }
  ];

  const products = [
    {
      id: 1,
      name: language === 'ar' ? 'خلطة البهارات الليبية' : 'Libyan Spice Mix',
      price: language === 'ar' ? '25 دينار' : '$25',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop',
      category: 'spices',
      rating: 4.8,
      description: language === 'ar' ? 'خلطة بهارات تقليدية ليبية' : 'Traditional Libyan spice blend',
      inStock: true
    },
    {
      id: 2,
      name: language === 'ar' ? 'طاجن طبخ تقليدي' : 'Traditional Cooking Tagine',
      price: language === 'ar' ? '120 دينار' : '$120',
      image: 'https://images.unsplash.com/photo-1556040220-4096d522378d?w=300&h=300&fit=crop',
      category: 'tools',
      rating: 4.6,
      description: language === 'ar' ? 'طاجن فخاري أصلي للطبخ التقليدي' : 'Authentic clay tagine for traditional cooking',
      inStock: true
    },
    {
      id: 3,
      name: language === 'ar' ? 'كتاب المطبخ الليبي' : 'Libyan Cuisine Cookbook',
      price: language === 'ar' ? '45 دينار' : '$45',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop',
      category: 'books',
      rating: 4.9,
      description: language === 'ar' ? 'دليل شامل للأطباق الليبية التقليدية' : 'Comprehensive guide to traditional Libyan dishes',
      inStock: true
    },
    {
      id: 4,
      name: language === 'ar' ? 'زيت الزيتون الليبي' : 'Libyan Olive Oil',
      price: language === 'ar' ? '35 دينار' : '$35',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop',
      category: 'ingredients',
      rating: 4.7,
      description: language === 'ar' ? 'زيت زيتون بكر ممتاز من ليبيا' : 'Extra virgin olive oil from Libya',
      inStock: false
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <CustomBreadcrumb />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            {language === 'ar' ? 'متجر المنتجات' : 'Products Store'}
          </h1>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Filter className="w-5 h-5 text-gray-600 mr-2 mt-1" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        {language === 'ar' ? 'نفذ المخزون' : 'Out of Stock'}
                      </Badge>
                    )}
                    <div className="absolute top-2 left-2 flex items-center bg-white rounded-full px-2 py-1 text-sm">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      {product.rating}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-600">
                      {product.price}
                    </span>
                    <div className="flex gap-2">
                      <Link to={`/products/${product.id}`}>
                        <Button variant="outline" size="sm">
                          {language === 'ar' ? 'عرض' : 'View'}
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        disabled={!product.inStock}
                        className="bg-amber-600 hover:bg-amber-700"
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        {language === 'ar' ? 'شراء' : 'Buy'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
