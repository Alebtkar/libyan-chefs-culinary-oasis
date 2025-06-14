
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomNav from './BottomNav';
import MobileTopBar from './MobileTopBar';
import CustomBreadcrumb from '@/components/ui/custom-breadcrumb';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <MobileTopBar />
      <Header />
      {!isHomePage && <CustomBreadcrumb />}
      <main className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Layout;
