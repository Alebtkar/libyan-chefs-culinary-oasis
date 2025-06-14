
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomBreadcrumb from '@/components/ui/custom-breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload, FileText, CheckCircle } from 'lucide-react';

const AccreditationRequest = () => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <CustomBreadcrumb />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Your request has been submitted successfully!'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {language === 'ar' 
                    ? 'سيتم مراجعة طلبك من قبل فريقنا والتواصل معك خلال 3-5 أيام عمل.'
                    : 'Your request will be reviewed by our team and we will contact you within 3-5 business days.'
                  }
                </p>
                <Button onClick={() => setSubmitted(false)}>
                  {language === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Request'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CustomBreadcrumb />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              {language === 'ar' ? 'طلب اعتماد' : 'Accreditation Request'}
            </h1>
            <p className="text-lg text-gray-600">
              {language === 'ar' 
                ? 'قدم طلبك للحصول على اعتماد الجمعية الليبية للطهاة'
                : 'Submit your request to get accreditation from the Libyan Chefs Association'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    {language === 'ar' ? 'المعلومات الشخصية' : 'Personal Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">
                        {language === 'ar' ? 'الاسم الأول' : 'First Name'}
                      </Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">
                        {language === 'ar' ? 'اسم العائلة' : 'Last Name'}
                      </Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">
                      {language === 'ar' ? 'العنوان' : 'Address'}
                    </Label>
                    <Textarea id="address" rows={3} />
                  </div>
                </CardContent>
              </Card>

              {/* Professional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === 'ar' ? 'المعلومات المهنية' : 'Professional Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="experience">
                      {language === 'ar' ? 'سنوات الخبرة' : 'Years of Experience'}
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'ar' ? 'اختر سنوات الخبرة' : 'Select years of experience'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">{language === 'ar' ? '1-2 سنة' : '1-2 years'}</SelectItem>
                        <SelectItem value="3-5">{language === 'ar' ? '3-5 سنوات' : '3-5 years'}</SelectItem>
                        <SelectItem value="6-10">{language === 'ar' ? '6-10 سنوات' : '6-10 years'}</SelectItem>
                        <SelectItem value="10+">{language === 'ar' ? 'أكثر من 10 سنوات' : 'More than 10 years'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="specialty">
                      {language === 'ar' ? 'التخصص' : 'Specialization'}
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'ar' ? 'اختر التخصص' : 'Select specialization'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="traditional">{language === 'ar' ? 'الطبخ التقليدي' : 'Traditional Cuisine'}</SelectItem>
                        <SelectItem value="modern">{language === 'ar' ? 'الطبخ الحديث' : 'Modern Cuisine'}</SelectItem>
                        <SelectItem value="pastry">{language === 'ar' ? 'الحلويات' : 'Pastry & Desserts'}</SelectItem>
                        <SelectItem value="seafood">{language === 'ar' ? 'المأكولات البحرية' : 'Seafood'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="workplace">
                      {language === 'ar' ? 'مكان العمل الحالي' : 'Current Workplace'}
                    </Label>
                    <Input id="workplace" />
                  </div>
                  
                  <div>
                    <Label htmlFor="position">
                      {language === 'ar' ? 'المنصب الحالي' : 'Current Position'}
                    </Label>
                    <Input id="position" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'ar' ? 'معلومات إضافية' : 'Additional Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="motivation">
                    {language === 'ar' ? 'سبب طلب الاعتماد' : 'Reason for Accreditation Request'}
                  </Label>
                  <Textarea 
                    id="motivation" 
                    rows={4} 
                    placeholder={language === 'ar' ? 'اشرح سبب رغبتك في الحصول على الاعتماد...' : 'Explain why you want to get accreditation...'}
                  />
                </div>
                
                <div>
                  <Label htmlFor="achievements">
                    {language === 'ar' ? 'الإنجازات والجوائز' : 'Achievements and Awards'}
                  </Label>
                  <Textarea 
                    id="achievements" 
                    rows={3} 
                    placeholder={language === 'ar' ? 'اذكر إنجازاتك وجوائزك المهنية...' : 'List your professional achievements and awards...'}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Document Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'رفع المستندات' : 'Document Upload'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cv">
                      {language === 'ar' ? 'السيرة الذاتية (PDF)' : 'CV/Resume (PDF)'}
                    </Label>
                    <Input id="cv" type="file" accept=".pdf" />
                  </div>
                  <div>
                    <Label htmlFor="certificates">
                      {language === 'ar' ? 'الشهادات (PDF)' : 'Certificates (PDF)'}
                    </Label>
                    <Input id="certificates" type="file" accept=".pdf" multiple />
                  </div>
                </div>
                <div>
                  <Label htmlFor="portfolio">
                    {language === 'ar' ? 'معرض الأعمال (صور)' : 'Portfolio (Images)'}
                  </Label>
                  <Input id="portfolio" type="file" accept="image/*" multiple />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {language === 'ar' 
                        ? 'أوافق على الشروط والأحكام وسياسة الخصوصية'
                        : 'I agree to the terms and conditions and privacy policy'
                      }
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      {language === 'ar' 
                        ? 'بالموافقة، أؤكد أن جميع المعلومات المقدمة صحيحة ودقيقة.'
                        : 'By agreeing, I confirm that all provided information is true and accurate.'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-amber-600 hover:bg-amber-700 px-8">
                {language === 'ar' ? 'إرسال طلب الاعتماد' : 'Submit Accreditation Request'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccreditationRequest;
