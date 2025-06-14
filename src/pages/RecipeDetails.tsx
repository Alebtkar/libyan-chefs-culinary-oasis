
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/recipes">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'العودة للوصفات' : 'Back to Recipes'}
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>
            <CardTitle className="text-3xl">
              {language === 'ar' ? `وصفة ${id}` : `Recipe ${id}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'المقادير' : 'Ingredients'}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>{language === 'ar' ? '2 كوب دقيق' : '2 cups flour'}</li>
                  <li>{language === 'ar' ? '1 كوب ماء' : '1 cup water'}</li>
                  <li>{language === 'ar' ? 'ملعقة ملح' : '1 tsp salt'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'طريقة التحضير' : 'Instructions'}
                </h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>{language === 'ar' ? 'اخلط المقادير الجافة' : 'Mix dry ingredients'}</li>
                  <li>{language === 'ar' ? 'أضف الماء تدريجياً' : 'Add water gradually'}</li>
                  <li>{language === 'ar' ? 'اعجن حتى تحصل على عجينة' : 'Knead until dough forms'}</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecipeDetails;
