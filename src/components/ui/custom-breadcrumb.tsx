
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CustomBreadcrumbProps {
  items?: BreadcrumbItem[];
}

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({ items = [] }) => {
  const location = useLocation();
  const { language, t } = useLanguage();

  // Auto-generate breadcrumbs based on path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Add home
    breadcrumbs.push({
      label: language === 'ar' ? 'الرئيسية' : 'Home',
      href: '/'
    });

    // Generate breadcrumbs from path
    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const isLast = index === pathSegments.length - 1;
      
      let label = segment;
      
      // Translate common segments
      switch (segment) {
        case 'about':
          label = language === 'ar' ? 'من نحن' : 'About';
          break;
        case 'chefs':
          label = language === 'ar' ? 'الطهاة' : 'Chefs';
          break;
        case 'recipes':
          label = language === 'ar' ? 'الوصفات' : 'Recipes';
          break;
        case 'articles':
          label = language === 'ar' ? 'المقالات' : 'Articles';
          break;
        case 'gallery':
          label = language === 'ar' ? 'المعرض' : 'Gallery';
          break;
        case 'products':
          label = language === 'ar' ? 'المنتجات' : 'Products';
          break;
        case 'certificate':
          label = language === 'ar' ? 'الشهادات' : 'Certificates';
          break;
        case 'membership':
          label = language === 'ar' ? 'العضوية' : 'Membership';
          break;
        case 'contact':
          label = language === 'ar' ? 'اتصل بنا' : 'Contact';
          break;
        case 'accreditation':
          label = language === 'ar' ? 'طلب اعتماد' : 'Accreditation Request';
          break;
        default:
          // If it's a number, might be an ID
          if (!isNaN(Number(segment))) {
            const parentSegment = pathSegments[index - 1];
            if (parentSegment === 'chefs') {
              label = language === 'ar' ? `الطاهي ${segment}` : `Chef ${segment}`;
            } else if (parentSegment === 'articles') {
              label = language === 'ar' ? `مقال ${segment}` : `Article ${segment}`;
            } else if (parentSegment === 'products') {
              label = language === 'ar' ? `منتج ${segment}` : `Product ${segment}`;
            }
          }
      }

      breadcrumbs.push({
        label,
        href: isLast ? undefined : href
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm">
          <div className="flex items-center space-x-1 bg-white rounded-full px-3 py-1 shadow-sm">
            <Home className="w-4 h-4 text-amber-600" />
          </div>
          
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-amber-400" />
              )}
              
              <div className={`
                px-3 py-1 rounded-full transition-all duration-200
                ${item.href 
                  ? 'bg-white hover:bg-amber-100 text-amber-700 hover:shadow-md cursor-pointer' 
                  : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                }
              `}>
                {item.href ? (
                  <Link to={item.href} className="font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold">{item.label}</span>
                )}
              </div>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CustomBreadcrumb;
