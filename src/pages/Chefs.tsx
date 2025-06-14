
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Chefs = () => {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === 'ar' ? 'الطهاة' : 'Chefs'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder chef cards */}
          {[1, 2, 3].map((chef) => (
            <Card key={chef} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <CardTitle>
                  {language === 'ar' ? `الطاهي ${chef}` : `Chef ${chef}`}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' ? 'خبير في الطبخ الليبي التقليدي' : 'Expert in traditional Libyan cuisine'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={`/chefs/${chef}`}>
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
