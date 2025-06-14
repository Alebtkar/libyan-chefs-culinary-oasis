
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomBreadcrumb from '@/components/ui/custom-breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2 } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id,
    name: language === 'ar' ? 'خلطة البهارات الليبية الأصلية' : 'Original Libyan Spice Mix',
    price: language === 'ar' ? '25 دينار' : '$25',
    originalPrice: language === 'ar' ? '30 دينار' : '$30',
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1555338653-bb2e5a7e9b0e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500&h=500&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 124,
    description: language === 'ar' 
      ? 'خلطة بهارات تقليدية ليبية أصلية مصنوعة من أجود أنواع البهارات المحلية. تضفي نكهة مميزة وأصيلة على جميع الأطباق الليبية التقليدية.'
      : 'Original traditional Libyan spice blend made from the finest local spices. Adds a distinctive and authentic flavor to all traditional Libyan dishes.',
    ingredients: language === 'ar' ? [
      'فلفل أحمر مطحون',
      'كمون',
      'كزبرة',
      'هيل',
      'قرفة',
      'فلفل أسود'
    ] : [
      'Ground red pepper',
      'Cumin',
      'Coriander',
      'Cardamom',
      'Cinnamon',
      'Black pepper'
    ],
    specifications: {
      weight: language === 'ar' ? '200 جرام' : '200g',
      origin: language === 'ar' ? 'ليبيا' : 'Libya',
      shelf_life: language === 'ar' ? '24 شهر' : '24 months',
      storage: language === 'ar' ? 'مكان جاف وبارد' : 'Cool, dry place'
    },
    inStock: true,
    stockCount: 15
  };

  const relatedProducts = [
    {
      id: 2,
      name: language === 'ar' ? 'زيت الزيتون الليبي' : 'Libyan Olive Oil',
      price: language === 'ar' ? '35 دينار' : '$35',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: language === 'ar' ? 'عسل ليبي طبيعي' : 'Natural Libyan Honey',
      price: language === 'ar' ? '45 دينار' : '$45',
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop'
    }
  ];

  return (
    <div>
      <CustomBreadcrumb />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'العودة للمنتجات' : 'Back to Products'}
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-amber-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviewCount} {language === 'ar' ? 'تقييم' : 'reviews'})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-amber-600">{product.price}</span>
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                <Badge className="bg-green-100 text-green-800">
                  {language === 'ar' ? 'خصم 17%' : '17% OFF'}
                </Badge>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-medium">{language === 'ar' ? 'الكمية:' : 'Quantity:'}</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stockCount} {language === 'ar' ? 'متوفر' : 'in stock'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <Button className="flex-1 bg-amber-600 hover:bg-amber-700" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'أضف للسلة' : 'Add to Cart'}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Product Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {language === 'ar' ? 'المواصفات' : 'Specifications'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">{language === 'ar' ? 'الوزن:' : 'Weight:'}</span>
                      <span className="ml-2">{product.specifications.weight}</span>
                    </div>
                    <div>
                      <span className="font-medium">{language === 'ar' ? 'المنشأ:' : 'Origin:'}</span>
                      <span className="ml-2">{product.specifications.origin}</span>
                    </div>
                    <div>
                      <span className="font-medium">{language === 'ar' ? 'مدة الصلاحية:' : 'Shelf Life:'}</span>
                      <span className="ml-2">{product.specifications.shelf_life}</span>
                    </div>
                    <div>
                      <span className="font-medium">{language === 'ar' ? 'التخزين:' : 'Storage:'}</span>
                      <span className="ml-2">{product.specifications.storage}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Ingredients */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{language === 'ar' ? 'المكونات' : 'Ingredients'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="bg-amber-50 rounded-lg p-3 text-center">
                    <span className="text-amber-800 font-medium">{ingredient}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {language === 'ar' ? 'منتجات ذات صلة' : 'Related Products'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-amber-600 font-bold">{relatedProduct.price}</p>
                    <Link to={`/products/${relatedProduct.id}`}>
                      <Button className="w-full mt-3" variant="outline">
                        {language === 'ar' ? 'عرض المنتج' : 'View Product'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
