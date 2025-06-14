
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomBreadcrumb from '@/components/ui/custom-breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Star, Award, Clock } from 'lucide-react';

const ChefDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  // Mock chef data
  const chef = {
    id,
    name: language === 'ar' ? `الطاهي أحمد محمد ${id}` : `Chef Ahmed Mohamed ${id}`,
    avatar: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b1eb?w=300&h=300&fit=crop&crop=face',
    specialty: language === 'ar' ? 'الطبخ الليبي التقليدي' : 'Traditional Libyan Cuisine',
    experience: language === 'ar' ? '15 سنة خبرة' : '15 years experience',
    rating: 4.8,
    bio: language === 'ar' 
      ? 'طاهي متخصص في الأطباق الليبية التقليدية مع خبرة تزيد عن 15 عاماً في مجال الطبخ. حاصل على عدة جوائز محلية وإقليمية في فنون الطبخ.'
      : 'A chef specialized in traditional Libyan dishes with over 15 years of experience in culinary arts. Winner of several local and regional awards in culinary arts.',
    achievements: language === 'ar' ? [
      'جائزة أفضل طاهي في ليبيا 2023',
      'شهادة معتمدة في الطبخ المتوسطي',
      'مدرب معتمد لفنون الطبخ الليبي'
    ] : [
      'Best Chef in Libya Award 2023',
      'Certified Mediterranean Cuisine Chef',
      'Certified Trainer in Libyan Culinary Arts'
    ],
    specialties: language === 'ar' ? [
      'الكسكسي الليبي',
      'الشربة الليبية',
      'المحشي والدولمة',
      'الحلويات التقليدية'
    ] : [
      'Libyan Couscous',
      'Libyan Shorba',
      'Stuffed Vegetables',
      'Traditional Sweets'
    ]
  };

  const relatedChefs = [
    {
      id: '2',
      name: language === 'ar' ? 'الطاهية فاطمة علي' : 'Chef Fatima Ali',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      specialty: language === 'ar' ? 'الحلويات الليبية' : 'Libyan Desserts'
    },
    {
      id: '3',
      name: language === 'ar' ? 'الطاهي محمد الصغير' : 'Chef Mohamed Saghir',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      specialty: language === 'ar' ? 'المأكولات البحرية' : 'Seafood Cuisine'
    }
  ];

  return (
    <div>
      <CustomBreadcrumb />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/chefs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'العودة للطهاة' : 'Back to Chefs'}
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <img
                      src={chef.avatar}
                      alt={chef.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2">{chef.name}</CardTitle>
                      <p className="text-xl text-amber-600 mb-2">{chef.specialty}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {chef.experience}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {chef.rating}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {language === 'ar' ? 'نبذة تعريفية' : 'Biography'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{chef.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-amber-600" />
                      {language === 'ar' ? 'الإنجازات' : 'Achievements'}
                    </h3>
                    <ul className="space-y-2">
                      {chef.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {language === 'ar' ? 'التخصصات' : 'Specialties'}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {chef.specialties.map((specialty, index) => (
                        <div key={index} className="bg-amber-50 rounded-lg p-3 text-center">
                          <span className="text-amber-800 font-medium">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Related Chefs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {language === 'ar' ? 'طهاة ذات صلة' : 'Related Chefs'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedChefs.map((relatedChef) => (
                    <Link
                      key={relatedChef.id}
                      to={`/chefs/${relatedChef.id}`}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={relatedChef.avatar}
                        alt={relatedChef.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <h4 className="font-medium">{relatedChef.name}</h4>
                        <p className="text-sm text-gray-600">{relatedChef.specialty}</p>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-2">
                    {language === 'ar' ? 'تواصل مع الطاهي' : 'Contact Chef'}
                  </Button>
                  <Button variant="outline" className="w-full">
                    {language === 'ar' ? 'حجز استشارة' : 'Book Consultation'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
