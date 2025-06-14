
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t, dir } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/membership', label: t('nav.membership') },
    { href: '/chefs', label: t('nav.chefs') },
    { href: '/recipes', label: t('nav.recipes') },
    { href: '/articles', label: t('nav.articles') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ج</span>
              </div>
              <h3 className="text-xl font-bold">
                {t('hero.title')}
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('hero.description')}
            </p>
            <div className={`flex ${dir === 'rtl' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-500">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-500">Contact Info</h4>
            <div className="space-y-3">
              <div className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300 text-sm">+218 21 123 4567</span>
              </div>
              <div className={`flex items-center ${dir === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300 text-sm">info@libyanchefs.ly</span>
              </div>
              <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Tripoli, Libya
                </span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-500">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {t('hero.title')}. {t('footer.rights')}.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              {t('footer.builtBy')} 
              <a
                href="https://www.ebtkar.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors duration-200"
              >
                {' '}Ebtkar Tqni
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
