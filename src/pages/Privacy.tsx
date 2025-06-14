
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
        </h1>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'جمع المعلومات' : 'Information Collection'}
                </h3>
                <p>
                  {language === 'ar'
                    ? 'نحن نجمع المعلومات التي تقدمها لنا عند التسجيل في موقعنا أو استخدام خدماتنا.'
                    : 'We collect information you provide when registering on our site or using our services.'
                  }
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'استخدام المعلومات' : 'Use of Information'}
                </h3>
                <p>
                  {language === 'ar'
                    ? 'نستخدم المعلومات المجمعة لتحسين خدماتنا وتوفير تجربة أفضل للمستخدمين.'
                    : 'We use collected information to improve our services and provide a better user experience.'
                  }
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'حماية المعلومات' : 'Information Protection'}
                </h3>
                <p>
                  {language === 'ar'
                    ? 'نحن ملتزمون بحماية معلوماتك الشخصية ولا نشاركها مع أطراف ثالثة بدون موافقتك.'
                    : 'We are committed to protecting your personal information and do not share it with third parties without your consent.'
                  }
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
