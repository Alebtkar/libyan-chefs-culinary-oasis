
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail } from 'lucide-react';

const PartnersSection = () => {
  const { language } = useLanguage();

  const partners = [
    {
      name: language === 'ar' ? 'وزارة السياحة الليبية' : 'Libyan Ministry of Tourism',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
      description: language === 'ar' ? 'الشريك الرسمي في تطوير السياحة الطبخية' : 'Official partner in culinary tourism development',
      website: '#'
    },
    {
      name: language === 'ar' ? 'معهد طرابلس للطبخ' : 'Tripoli Culinary Institute',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop',
      description: language === 'ar' ? 'التعليم المتخصص في فنون الطبخ' : 'Specialized education in culinary arts',
      website: '#'
    },
    {
      name: language === 'ar' ? 'نقابة مطاعم بنغازي' : 'Benghazi Restaurant Guild',
      logo: 'https://images.unsplash.com/photo-1560472355-a9a6744c8052?w=200&h=100&fit=crop',
      description: language === 'ar' ? 'تمثيل المطاعم في المنطقة الشرقية' : 'Restaurant representation in the eastern region',
      website: '#'
    },
    {
      name: language === 'ar' ? 'مهرجان ليبيا للأطعمة' : 'Libya Food Festival',
      logo: 'https://images.unsplash.com/photo-1560472355-109703aa3edc?w=200&h=100&fit=crop',
      description: language === 'ar' ? 'الحدث السنوي للمطبخ الليبي' : 'Annual event for Libyan cuisine',
      website: '#'
    },
    {
      name: language === 'ar' ? 'شبكة المطبخ المتوسطي' : 'Mediterranean Culinary Network',
      logo: 'https://images.unsplash.com/photo-1560472354-2b65b15d3e37?w=200&h=100&fit=crop',
      description: language === 'ar' ? 'التواصل مع شبكة المطابخ المتوسطية' : 'Connection with Mediterranean cuisine network',
      website: '#'
    },
    {
      name: language === 'ar' ? 'مؤسسة التراث الغذائي' : 'Heritage Food Foundation',
      logo: 'https://images.unsplash.com/photo-1560472355-c3af1dfed8ce?w=200&h=100&fit=crop',
      description: language === 'ar' ? 'حفظ التراث الطبخي الليبي' : 'Preserving Libyan culinary heritage',
      website: '#'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'شركاؤنا' : 'Our Partners'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نتعاون مع مؤسسات محلية وإقليمية لتطوير قطاع الطهي في ليبيا'
                : 'We collaborate with local and regional institutions to develop the culinary sector in Libya'
              }
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center mb-4 h-16">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {partner.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 text-center mb-4 flex-1">
                    {partner.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-amber-50 group-hover:border-amber-300 transition-colors"
                      asChild
                    >
                      <a href={partner.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {language === 'ar' ? 'زيارة الموقع' : 'Visit Website'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {language === 'ar' ? 'هل تريد أن تصبح شريكاً؟' : 'Want to become a partner?'}
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                {language === 'ar' 
                  ? 'انضم إلى شبكة شركائنا وساهم في تطوير المشهد الطبخي في ليبيا. نرحب بالمؤسسات والأفراد المهتمين بتطوير هذا القطاع المهم.'
                  : 'Join our partner network and contribute to developing the culinary scene in Libya. We welcome institutions and individuals interested in developing this important sector.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-100 font-semibold"
                  asChild
                >
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 font-semibold"
                >
                  {language === 'ar' ? 'تحميل معلومات الشراكة' : 'Download Partnership Info'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
