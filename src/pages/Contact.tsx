
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder={language === 'ar' ? 'الاسم' : 'Name'} />
                <Input type="email" placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'} />
                <Input placeholder={language === 'ar' ? 'الموضوع' : 'Subject'} />
                <Textarea 
                  placeholder={language === 'ar' ? 'الرسالة' : 'Message'} 
                  rows={4}
                />
                <Button className="w-full">
                  {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-600" />
                <span>info@libyan-chefs.org</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>+218 21 123 4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>
                  {language === 'ar' ? 'طرابلس، ليبيا' : 'Tripoli, Libya'}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
