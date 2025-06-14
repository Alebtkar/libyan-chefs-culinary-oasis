
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Shield, LayoutDashboard } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const MobileTopBar = () => {
  const { language, setLanguage, t, dir } = useLanguage();

  return (
    <div className="lg:hidden bg-amber-50 border-b border-amber-200 py-2">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between ${dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
          {/* Dashboard Link */}
          <Link to="/admin">
            <Button variant="ghost" size="sm" className="text-amber-700 hover:bg-amber-100">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              {t('nav.admin')}
            </Button>
          </Link>

          <div className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-amber-700 hover:bg-amber-100">
                  <Globe className="w-4 h-4 mr-1" />
                  {language === 'ar' ? 'ع' : 'EN'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem
                  onClick={() => setLanguage('ar')}
                  className={language === 'ar' ? 'bg-amber-50' : ''}
                >
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-amber-50' : ''}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Certificate Link */}
            <Link to="/certificate">
              <Button variant="ghost" size="sm" className="text-amber-700 hover:bg-amber-100">
                <Shield className="w-4 h-4 mr-1" />
                {t('nav.certificate')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTopBar;
