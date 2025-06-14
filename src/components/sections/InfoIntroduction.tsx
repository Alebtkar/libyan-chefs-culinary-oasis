
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Users, Award, BookOpen } from 'lucide-react';

const InfoIntroduction = () => {
  const { language } = useLanguage();

  const stats = [
    {
      icon: ChefHat,
      number: '150+',
      label: {
        ar: 'طاهٍ مسجل',
        en: 'Registered Chefs'
      }
    },
    {
      icon: Users,
      number: '500+',
      label: {
        ar: 'عضو نشط',
        en: 'Active Members'
      }
    },
    {
      icon: Award,
      number: '50+',
      label: {
        ar: 'شهادة معتمدة',
        en: 'Certified Awards'
      }
    },
    {
      icon: BookOpen,
      number: '200+',
      label: {
        ar: 'وصفة تراثية',
        en: 'Heritage Recipes'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Text */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'عن الجمعية الليبية للطهاة' : 'About Libyan Chefs Association'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'نحن جمعية مهنية تأسست لتوثيق وتطوير فنون الطبخ الليبي التقليدي والحديث، ونسعى لتعزيز مكانة الطهاة الليبيين وتقديم برامج تدريبية متخصصة لرفع مستوى الأداء المهني في مجال الطهي.'
                : 'We are a professional association established to document and develop traditional and modern Libyan culinary arts. We strive to enhance the status of Libyan chefs and provide specialized training programs to raise professional performance in the culinary field.'
              }
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label[language]}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'ar' 
                    ? 'أن نكون المرجع الأول والموثوق للطهاة في ليبيا، ونساهم في الحفاظ على التراث الطبخي الليبي وتطويره ليواكب العصر الحديث.'
                    : 'To be the first and trusted reference for chefs in Libya, and contribute to preserving and developing Libyan culinary heritage to keep pace with the modern era.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'ar' 
                    ? 'تقديم برامج تدريبية متميزة للطهاة، وتوثيق الوصفات التراثية، ودعم الطهاة المحترفين في تطوير مهاراتهم ومسيرتهم المهنية.'
                    : 'Providing excellent training programs for chefs, documenting heritage recipes, and supporting professional chefs in developing their skills and career paths.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoIntroduction;
