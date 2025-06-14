
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomNav from './BottomNav';
import MobileTopBar from './MobileTopBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MobileTopBar />
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Layout;
