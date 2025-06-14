
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Articles = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === 'ar' ? 'المقالات والأخبار' : 'Articles & News'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((article) => (
            <Card key={article} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <CardTitle>
                  {language === 'ar' ? `مقال ${article}` : `Article ${article}`}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' ? 'مقال مهم حول فنون الطبخ الليبي' : 'Important article about Libyan culinary arts'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={`/articles/${article}`}>
                    {language === 'ar' ? 'قراءة المقال' : 'Read Article'}
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

export default Articles;
