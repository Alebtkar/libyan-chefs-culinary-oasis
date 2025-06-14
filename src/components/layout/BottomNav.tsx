
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Users, Book, Contact, FileText } from 'lucide-react';

const BottomNav = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { href: '/', icon: Home, label: t('nav.home') },
    { href: '/chefs', icon: Users, label: t('nav.chefs') },
    { href: '/recipes', icon: Book, label: t('nav.recipes') },
    { href: '/articles', icon: FileText, label: t('nav.articles') },
    { href: '/contact', icon: Contact, label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center justify-center p-2 min-w-[64px] ${
                isActive(item.href)
                  ? 'text-amber-600'
                  : 'text-gray-500 hover:text-amber-600'
              } transition-colors duration-200`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs mt-1 text-center leading-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
