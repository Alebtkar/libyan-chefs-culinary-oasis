
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';

const AdminArticles = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/admin">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'العودة' : 'Back'}
              </Link>
            </Button>
            <h1 className="text-4xl font-bold">
              {language === 'ar' ? 'إدارة المقالات' : 'Manage Articles'}
            </h1>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'إضافة مقال' : 'Add Article'}
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'ar' ? 'قائمة المقالات' : 'Articles List'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((article) => (
                <div key={article} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">
                      {language === 'ar' ? `مقال ${article}` : `Article ${article}`}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'ar' ? 'منشور في 15 يونيو 2024' : 'Published on June 15, 2024'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminArticles;
