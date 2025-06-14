
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الجمعية',
    'nav.membership': 'العضوية',
    'nav.chefs': 'الطهاة',
    'nav.recipes': 'الوصفات',
    'nav.articles': 'المقالات',
    'nav.contact': 'اتصل بنا',
    'nav.certificate': 'التحقق من الشهادة',
    'nav.auth': 'تسجيل الدخول',
    'nav.admin': 'لوحة الإدارة',
    
    // Hero section
    'hero.title': 'الجمعية الليبية للطهاة',
    'hero.subtitle': 'المرجع الأول للطهاة الليبيين',
    'hero.description': 'نسعى لتوثيق وتطوير المأكولات الليبية وتعزيز مكانة الطهي في ليبيا',
    'hero.joinUs': 'انضم إلينا',
    'hero.learnMore': 'اعرف المزيد',
    
    // Common
    'common.readMore': 'اقرأ المزيد',
    'common.viewAll': 'عرض الكل',
    'common.back': 'العودة',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.submit': 'إرسال',
    'common.cancel': 'إلغاء',
    'common.save': 'حفظ',
    'common.edit': 'تعديل',
    'common.delete': 'حذف',
    'common.view': 'عرض',
    'common.download': 'تحميل',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.language': 'العربية',
    
    // Footer
    'footer.builtBy': 'تم التطوير بواسطة إبتكار تقني',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // About
    'about.vision': 'الرؤية',
    'about.mission': 'الرسالة',
    'about.goals': 'الأهداف',
    
    // Membership
    'membership.title': 'العضوية',
    'membership.benefits': 'الفوائد',
    'membership.eligibility': 'شروط الانضمام',
    'membership.howToJoin': 'كيفية الانضمام',
    'membership.apply': 'تقدم بطلب العضوية',
    
    // Forms
    'form.name': 'الاسم',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'رقم الهاتف',
    'form.message': 'الرسالة',
    'form.subject': 'الموضوع',
    'form.required': 'مطلوب',
    
    // Certificate
    'certificate.verify': 'التحقق من الشهادة',
    'certificate.number': 'رقم الشهادة',
    'certificate.found': 'تم العثور على الشهادة',
    'certificate.notFound': 'لم يتم العثور على الشهادة',
    
    // Admin
    'admin.dashboard': 'لوحة الإدارة',
    'admin.articles': 'إدارة المقالات',
    'admin.chefs': 'إدارة الطهاة',
    'admin.recipes': 'إدارة الوصفات',
    'admin.members': 'إدارة الأعضاء',
    'admin.certificates': 'إدارة الشهادات',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.membership': 'Membership',
    'nav.chefs': 'Chefs',
    'nav.recipes': 'Recipes',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    'nav.certificate': 'Certificate Verification',
    'nav.auth': 'Login',
    'nav.admin': 'Admin',
    
    // Hero section
    'hero.title': 'Libyan Chefs Association',
    'hero.subtitle': 'The primary reference for Libyan chefs',
    'hero.description': 'Aiming to preserve and elevate Libyan culinary heritage and chef professionalism',
    'hero.joinUs': 'Join Us',
    'hero.learnMore': 'Learn More',
    
    // Common
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.download': 'Download',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.language': 'English',
    
    // Footer
    'footer.builtBy': 'Built by Ebtkar Tqni',
    'footer.rights': 'All rights reserved',
    
    // About
    'about.vision': 'Vision',
    'about.mission': 'Mission',
    'about.goals': 'Goals',
    
    // Membership
    'membership.title': 'Membership',
    'membership.benefits': 'Benefits',
    'membership.eligibility': 'Eligibility',
    'membership.howToJoin': 'How to Join',
    'membership.apply': 'Apply for Membership',
    
    // Forms
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.subject': 'Subject',
    'form.required': 'Required',
    
    // Certificate
    'certificate.verify': 'Verify Certificate',
    'certificate.number': 'Certificate Number',
    'certificate.found': 'Certificate Found',
    'certificate.notFound': 'Certificate Not Found',
    
    // Admin
    'admin.dashboard': 'Admin Dashboard',
    'admin.articles': 'Manage Articles',
    'admin.chefs': 'Manage Chefs',
    'admin.recipes': 'Manage Recipes',
    'admin.members': 'Manage Members',
    'admin.certificates': 'Manage Certificates',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
