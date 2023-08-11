'use client';

import React from 'react';
import Header from './Header';
import CategorySection from './CategorySection';
import ProductsSection from './ProductsSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <CategorySection />
            <ProductsSection />
        </>
    );
};

export default HomePage;
