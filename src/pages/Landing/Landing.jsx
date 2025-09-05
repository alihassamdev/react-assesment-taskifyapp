import React from 'react'
import '@/App.css'
import './Landing.css'
import TopBar from '@/components/Client/TopBar/TopBar'
import Header from '@/components/Client/Header/Header'
import HeroSection from '@/components/Client/HeroSection/HeroSection'
import FlashSales from '@/components/Client/FlashSales/FlashSales'
import CategorySection from '@/components/Client/CategorySection/CategorySection'
import BestSellingSection from '@/components/Client/BestSellingSection/BestSellingSection'
import ShopCTA from '@/components/Client/ShopCTA/ShopCTA'
import FeatureSection from '@/components/Client/FeatureSection/FeatureSection'
import NewArrivalSection from '@/components/Client/NewArrivalSection/NewArrivalSection'
import Footer from '@/components/Client/Footer/Footer'
const Landing = () => {
    return (
        <>
            <TopBar />
            <Header />
            <HeroSection />
            <FlashSales />
            <div className='hr' />
            <CategorySection />
            <div className='hr' />
            <BestSellingSection />
            <ShopCTA />
            <NewArrivalSection />
            <FeatureSection />
            <Footer />

        </>
    )
}

export default Landing