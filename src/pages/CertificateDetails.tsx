
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificateDetails = () => {
  const { number } = useParams();
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/certificate">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'العودة للبحث' : 'Back to Search'}
          </Link>
        </Button>

        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <CardTitle className="text-3xl">
              {language === 'ar' ? 'شهادة معتمدة' : 'Verified Certificate'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'ar' ? 'رقم الشهادة' : 'Certificate Number'}
                </h3>
                <p className="text-lg">{number}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'ar' ? 'اسم الطاهي' : 'Chef Name'}
                </h3>
                <p className="text-lg">
                  {language === 'ar' ? 'أحمد محمد علي' : 'Ahmed Mohamed Ali'}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'ar' ? 'التخصص' : 'Specialization'}
                </h3>
                <p className="text-lg">
                  {language === 'ar' ? 'الطبخ الليبي التقليدي' : 'Traditional Libyan Cuisine'}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'ar' ? 'تاريخ الإصدار' : 'Issue Date'}
                </h3>
                <p className="text-lg">June 15, 2024</p>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-2">
                {language === 'ar' ? 'الوصف' : 'Description'}
              </h3>
              <p>
                {language === 'ar'
                  ? 'تم منح هذه الشهادة بعد اجتياز الطاهي لجميع الدورات التدريبية المطلوبة في فنون الطبخ الليبي التقليدي.'
                  : 'This certificate was awarded after the chef successfully completed all required training courses in traditional Libyan culinary arts.'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CertificateDetails;
