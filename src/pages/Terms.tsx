
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Service'}
        </h1>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Service'}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'قبول الشروط' : 'Acceptance of Terms'}
                </h3>
                <p>
                  {language === 'ar'
                    ? 'باستخدام هذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام.'
                    : 'By using this website, you agree to comply with these terms and conditions.'
                  }
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'استخدام الموقع' : 'Website Usage'}
                </h3>
                <p>
                  {language === 'ar'
                    ? 'يجب استخدام الموقع لأغراض قانونية فقط وبما يتوافق مع جميع القوانين المعمول بها.'
                    : 'The website must be used for legal purposes only and in accordance with all applicable laws.'
                  }
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'حقوق الملكية الفكرية' : 'Intellectual Property Rights'}
                </h3>
                <p>
                  {language === 'ar'
                    ? 'جميع المحتويات الموجودة على هذا الموقع محمية بحقوق الطبع والنشر وحقوق الملكية الفكرية الأخرى.'
                    : 'All content on this website is protected by copyright and other intellectual property rights.'
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

export default Terms;
