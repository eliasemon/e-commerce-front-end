'use client';

import React from 'react';
import Header from './Header';
import CategorySection from './CategorySection';
import ProductsSection from './ProductsSection';
import Footer from './Footer';
import Banner from './Banner';

const HomePage = () => {
    return (
        <>
            <Header />
            <CategorySection />
            <Banner />
            <ProductsSection />
            <Footer />
        </>
    );
};

export default HomePage;
