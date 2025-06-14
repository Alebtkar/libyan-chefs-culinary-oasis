
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';

const AdminMembers = () => {
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
              {language === 'ar' ? 'إدارة الأعضاء' : 'Manage Members'}
            </h1>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'إضافة عضو' : 'Add Member'}
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'ar' ? 'قائمة الأعضاء' : 'Members List'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((member) => (
                <div key={member} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">
                      {language === 'ar' ? `العضو ${member}` : `Member ${member}`}
                    </h3>
                    <p className="text-sm text-gray-600">member{member}@example.com</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="secondary">
                        {language === 'ar' ? 'عضوية أساسية' : 'Basic'}
                      </Badge>
                      <Badge variant="outline">
                        {language === 'ar' ? 'نشط' : 'Active'}
                      </Badge>
                    </div>
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

export default AdminMembers;
