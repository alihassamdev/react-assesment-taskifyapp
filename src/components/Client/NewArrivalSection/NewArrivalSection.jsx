import "./NewArrivalSection.css";

import playStation from '@/assets/new-arrival/playstation.png'
import womenCollection from '@/assets/new-arrival/women-collectiom.png'
import speakers from '@/assets/new-arrival/speakers.png'
import perfume from '@/assets/new-arrival/perfume.png'
const NewArrivalSection = () => {

    return (
        <section className="new-arrival-section">

            <div className="section-badge">
                <span className="section-badge-text"><svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="40" rx="4" fill="#FF6767" />
                </svg>
                </span>
                Featured
            </div>

            <div className="new-arrival-section-header">
                <h2 className="section-title">New Arrival</h2>
            </div>

            <div className="new-arrival-collection">
                <div className="new-arrival-featured-products">
                    {/* LEFT COLUMN */}
                    <div className="new-arrival-left-col">
                        <div className="new-arrival-product-card">
                            <img className="playstation" src={playStation} alt="PlayStation 5" />
                            <div className="new-arrival-product-info">
                                <h3>PlayStation 5</h3>
                                <p>Black and White version of the PS5 coming out on sale.</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="new-arrival-right-col">
                        {/* Top Card */}
                        <div className="new-arrival-product-card">
                            <img className="women-collection" src={womenCollection} alt="Women's Collections" />
                            <div className="new-arrival-product-info">
                                <h3>Women Collection</h3>
                                <p>Featured woman collections that give you another vibe.</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="new-arrival-small-row">
                            <div className="new-arrival-product-card">
                                <img className="speakers" src={speakers} alt="Speakers" />
                                <div className="new-arrival-product-info">
                                    <h3>Speakers</h3>
                                    <p>Amazon wireless speakers</p>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>

                            <div className="new-arrival-product-card">
                                <img className="perfume" src={perfume} alt="Perfume" />
                                <div className="new-arrival-product-info">
                                    <h3>Perfume</h3>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default NewArrivalSection;
