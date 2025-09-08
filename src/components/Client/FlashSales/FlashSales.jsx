import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import "./FlashSales.css";

import flashProduct1 from '@/assets/sale-product-img/1.png'
import flashProduct2 from '@/assets/sale-product-img/2.png'
import flashProduct3 from '@/assets/sale-product-img/3.png'
import flashProduct4 from '@/assets/sale-product-img/4.png'
import ProductCard from "../ProductCard/ProductCard";

const FlashSales = () => {

    const products = [
        {
            id: 1,
            title: "HAVIT HV-G92 Gamepad",
            price: 120,
            oldPrice: 160,
            discount: "-40%",
            rating: 5,
            reviews: 88,
            image: flashProduct1,
        },
        {
            id: 2,
            title: "AK-900 Wired Keyboard",
            price: 960,
            oldPrice: 1160,
            discount: "-35%",
            rating: 4,
            reviews: 75,
            image: flashProduct2,
        },
        {
            id: 3,
            title: "IPS LCD Gaming Monitor",
            price: 370,
            oldPrice: 400,
            discount: "-30%",
            rating: 5,
            reviews: 99,
            image: flashProduct3,
        },
        {
            id: 4,
            title: "S-Series Comfort Chair",
            price: 375,
            oldPrice: 400,
            discount: "-25%",
            rating: 5,
            reviews: 99,
            image: flashProduct4,
        },
        {
            id: 5,
            title: "AK-900 Wired Keyboard",
            price: 960,
            oldPrice: 1160,
            discount: "-35%",
            rating: 4,
            reviews: 75,
            image: flashProduct2,
        },
    ];

    // Create refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // This state will help to trigger a re-render once refs are set
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);

    return (
        <section className="flash-sales-section">

            <div className="section-badge">
                <span className="section-badge-text"><svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="40" rx="4" fill="#FF6767" />
                </svg>
                </span>
                Today’s
            </div>

            <div className="sale-section-header">
                <div className="left-col">
                    <h2 className="section-title">Flash Sales</h2>

                    {/* Countdown */}
                    <div className="countdown">
                        <div className="time-box">
                            <span className="label">Days</span>
                            <span className="value">03</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-box">
                            <span className="label">Hours</span>
                            <span className="value">23</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-box">
                            <span className="label">Minutes</span>
                            <span className="value">19</span>
                        </div>
                        <span className="separator">:</span>
                        <div className="time-box">
                            <span className="label">Seconds</span>
                            <span className="value">56</span>
                        </div>
                    </div>
                </div>


                <div className="nav-buttons">
                    <button ref={prevRef} className="nav-button prev-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <path d="M8 1L1 8L8 15M1 8H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button ref={nextRef} className="nav-button next-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Products */}
            <div className="products">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    loop={true}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    breakpoints={{
                        1200: { slidesPerView: 4, spaceBetween: 20 },
                        991: { slidesPerView: 3, spaceBetween: 16 },
                        768: { slidesPerView: 2, spaceBetween: 12 },
                        576: { slidesPerView: 1, spaceBetween: 8 },
                        0: { slidesPerView: 1, spaceBetween: 5 },
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onSwiper={(swiper) => {
                        // Manually re-init navigation after refs are ready
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                >
                    {products.map((p) => (
                        <SwiperSlide key={p.id}>
                            <ProductCard product={p} showDiscount={true} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <button className="view-products">View All Products</button>

        </section>
    );
};

export default FlashSales;
