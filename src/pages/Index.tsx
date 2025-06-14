
import React from 'react';
import HeroCarousel from '@/components/sections/HeroCarousel';
import InfoIntroduction from '@/components/sections/InfoIntroduction';
import ChefsCarousel from '@/components/sections/ChefsCarousel';
import ProductsSection from '@/components/sections/ProductsSection';
import HomeGallery from '@/components/sections/HomeGallery';
import PartnersSection from '@/components/sections/PartnersSection';

const Index = () => {
  return (
    <div>
      <HeroCarousel />
      <InfoIntroduction />
      <ChefsCarousel />
      <ProductsSection />
      <HomeGallery />
      <PartnersSection />
    </div>
  );
};

export default Index;
