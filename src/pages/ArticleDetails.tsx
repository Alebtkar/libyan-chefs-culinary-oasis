
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/articles">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'العودة للمقالات' : 'Back to Articles'}
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
            <CardTitle className="text-3xl">
              {language === 'ar' ? `مقال ${id}` : `Article ${id}`}
            </CardTitle>
            <p className="text-gray-600 mt-2">
              {language === 'ar' ? 'منشور في 15 يونيو 2024' : 'Published on June 15, 2024'}
            </p>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                {language === 'ar' 
                  ? 'هذا مقال تفصيلي حول تطور فنون الطبخ الليبي عبر التاريخ وكيف تأثرت بالثقافات المختلفة التي مرت على ليبيا عبر العصور.'
                  : 'This is a detailed article about the evolution of Libyan culinary arts throughout history and how it was influenced by different cultures that passed through Libya over the ages.'
                }
              </p>
              
              <p className="mt-4">
                {language === 'ar'
                  ? 'يتميز المطبخ الليبي بتنوعه وغناه بالنكهات المختلفة، حيث يجمع بين تقاليد البحر الأبيض المتوسط والمطبخ العربي والأفريقي.'
                  : 'Libyan cuisine is characterized by its diversity and richness in different flavors, combining Mediterranean traditions with Arab and African cuisine.'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArticleDetails;
