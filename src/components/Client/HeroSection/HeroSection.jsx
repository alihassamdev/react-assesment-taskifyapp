import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HeroSection.css";

import appleLogo from '@/assets/apple-img.png'
import heroPoster from '@/assets/hero-mobile-poster.png'

const slides = [
    {
        id: 1,
        title1: "iPhone 14 Series",
        title2: "Up to 10% off Voucher",
        btnText: "Shop Now",
        imgSrc: "/iphone14.png", // Replace with actual path
    },
    {
        id: 2,
        title1: "Samsung Galaxy S23",
        title2: "Save up to 15%",
        btnText: "Shop Now",
        imgSrc: "/galaxyS23.png", // Replace with actual path
    },
    {
        id: 3,
        title1: "Google Pixel 7",
        title2: "Special Offer Today",
        btnText: "Shop Now",
        imgSrc: "/pixel7.png", // Replace with actual path
    },
    {
        id: 4,
        title1: "OnePlus 11 Pro",
        title2: "Discounts up to 20%",
        btnText: "Shop Now",
        imgSrc: "/oneplus11.png", // Replace with actual path
    },
];

const HeroSection = () => {
    return (
        <div className="hero-wrapper">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                loop={true}
                className="swiper-container"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-content">
                            <div className="text-content">
                                <div className="hero-logo">
                                    <span className="icon-logo" aria-label="apple">
                                        <img src={appleLogo} alt="" />
                                    </span>
                                    <span className="series-text">{slide.title1}</span>
                                </div>
                                <h2 className="hero-heading">
                                    Up to 10% off Voucher
                                </h2>
                                <div className="hero-button-container">
                                    <div className="shop-button">
                                        Shop Now
                                    </div>
                                    <span>
                                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="image-content">
                                <img src={heroPoster} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;
