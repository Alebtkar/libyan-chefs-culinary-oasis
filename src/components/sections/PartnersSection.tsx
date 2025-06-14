
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { language } = useLanguage();

  const partners = [
    {
      name: 'Libyan Ministry of Tourism',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
      website: '#'
    },
    {
      name: 'Tripoli Culinary Institute',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop',
      website: '#'
    },
    {
      name: 'Benghazi Restaurant Guild',
      logo: 'https://images.unsplash.com/photo-1560472355-a9a6744c8052?w=200&h=100&fit=crop',
      website: '#'
    },
    {
      name: 'Libya Food Festival',
      logo: 'https://images.unsplash.com/photo-1560472355-109703aa3edc?w=200&h=100&fit=crop',
      website: '#'
    },
    {
      name: 'Mediterranean Culinary Network',
      logo: 'https://images.unsplash.com/photo-1560472354-2b65b15d3e37?w=200&h=100&fit=crop',
      website: '#'
    },
    {
      name: 'Heritage Food Foundation',
      logo: 'https://images.unsplash.com/photo-1560472355-c3af1dfed8ce?w=200&h=100&fit=crop',
      website: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center group"
              >
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {language === 'ar' ? 'هل تريد أن تصبح شريكاً؟' : 'Want to become a partner?'}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {language === 'ar' 
                  ? 'انضم إلى شبكة شركائنا وساهم في تطوير المشهد الطبخي في ليبيا'
                  : 'Join our partner network and contribute to developing the culinary scene in Libya'
                }
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
