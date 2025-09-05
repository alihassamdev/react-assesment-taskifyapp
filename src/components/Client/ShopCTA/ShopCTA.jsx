import React from "react";
import './ShopCTA.css'

import ctaPoster from '@/assets/cta-poster.png'
const ShopCTA = () => {
    return (
        <section className="shop-cta-container" aria-label="Enhance Your Music Experience promotion">
            <div className="shop-cta-content">
                <p className="shop-cta-category">Categories</p>
                <h1 className="shop-cta-title">
                    Enhance Your <br /> Music Experience
                </h1>
                <div
                    className="shop-cta-countdown"
                    role="timer"
                    aria-live="polite"
                    aria-atomic="true"
                    aria-label="Countdown timer"
                >
                    <div className="shop-cta-countdown-item">
                        <span>23</span>
                        <small>Hours</small>
                    </div>
                    <div className="shop-cta-countdown-item">
                        <span>05</span>
                        <small>Days</small>
                    </div>
                    <div className="shop-cta-countdown-item">
                        <span>59</span>
                        <small>Minutes</small>
                    </div>
                    <div className="shop-cta-countdown-item">
                        <span>35</span>
                        <small>Seconds</small>
                    </div>
                </div>
                <button className="shop-cta-btn-buy" type="button" aria-label="Buy Now!">
                    Buy Now!
                </button>
            </div>
            <div className="shop-cta-image-container">
                <img
                    src={ctaPoster}
                    alt="Black modern JBL speaker"
                    className="shop-cta-image"
                />
            </div>
        </section>
    );
};

export default ShopCTA;
