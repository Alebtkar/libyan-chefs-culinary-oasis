
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Book, FileText, Award, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const { language } = useLanguage();

  const adminCards = [
    {
      title: language === 'ar' ? 'إدارة الطهاة' : 'Manage Chefs',
      icon: Users,
      href: '/admin/chefs',
      count: '12',
    },
    {
      title: language === 'ar' ? 'إدارة الوصفات' : 'Manage Recipes',
      icon: Book,
      href: '/admin/recipes',
      count: '45',
    },
    {
      title: language === 'ar' ? 'إدارة المقالات' : 'Manage Articles',
      icon: FileText,
      href: '/admin/articles',
      count: '23',
    },
    {
      title: language === 'ar' ? 'إدارة الشهادات' : 'Manage Certificates',
      icon: Award,
      href: '/admin/certificates',
      count: '67',
    },
    {
      title: language === 'ar' ? 'إدارة الأعضاء' : 'Manage Members',
      icon: Users,
      href: '/admin/members',
      count: '89',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === 'ar' ? 'لوحة التحكم الإدارية' : 'Admin Dashboard'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {card.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{card.count}</div>
                  <Button asChild className="w-full">
                    <Link to={card.href}>
                      {language === 'ar' ? 'إدارة' : 'Manage'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
