
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Certificate = () => {
  const { language } = useLanguage();
  const [certificateNumber, setCertificateNumber] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (certificateNumber.trim()) {
      navigate(`/certificate/${certificateNumber}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === 'ar' ? 'البحث عن الشهادات' : 'Certificate Verification'}
        </h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {language === 'ar' ? 'تحقق من صحة الشهادة' : 'Verify Certificate'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <Input
                  placeholder={language === 'ar' ? 'أدخل رقم الشهادة' : 'Enter certificate number'}
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <Button type="submit" className="w-full">
                {language === 'ar' ? 'البحث' : 'Search'}
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {language === 'ar' 
                  ? 'أدخل رقم الشهادة للتحقق من صحتها وعرض تفاصيلها.'
                  : 'Enter the certificate number to verify its authenticity and view details.'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certificate;
