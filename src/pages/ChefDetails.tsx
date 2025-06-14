
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChefDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/chefs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'العودة للطهاة' : 'Back to Chefs'}
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
            <CardTitle className="text-3xl">
              {language === 'ar' ? `الطاهي ${id}` : `Chef ${id}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-4">
              {language === 'ar' 
                ? 'هذا طاهي متخصص في الأطباق الليبية التقليدية مع خبرة تزيد عن 15 عاماً في مجال الطبخ.'
                : 'This chef specializes in traditional Libyan dishes with over 15 years of experience in culinary arts.'
              }
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">
                {language === 'ar' ? 'التخصصات' : 'Specialties'}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{language === 'ar' ? 'الكسكسي الليبي' : 'Libyan Couscous'}</li>
                <li>{language === 'ar' ? 'الشربة الليبية' : 'Libyan Shorba'}</li>
                <li>{language === 'ar' ? 'المحشي والدولمة' : 'Stuffed Vegetables'}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChefDetails;
