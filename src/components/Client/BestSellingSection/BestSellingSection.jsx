import "./BestSellingSection.css";

import bestSellingProduct1 from '@/assets/best-selling/1.png'
import bestSellingProduct2 from '@/assets/best-selling/2.png'
import bestSellingProduct3 from '@/assets/best-selling/3.png'
import bestSellingProduct4 from '@/assets/best-selling/4.png'
import ProductCard from "../ProductCard/ProductCard";

const BestSellingSection = () => {

    const products = [
        {
            id: 1,
            title: "The north coat",
            price: 260,
            oldPrice: 360,
            rating: 5,
            reviews: 65,
            image: bestSellingProduct1
        },
        {
            id: 2,
            title: "Gucci duffle bag",
            price: 960,
            oldPrice: 1160,
            rating: 4.5,
            reviews: 65,
            image: bestSellingProduct2
        },
        {
            id: 3,
            title: "RGB liquid CPU Cooler",
            price: 160,
            oldPrice: 170,
            rating: 4.5,
            reviews: 65,
            image: bestSellingProduct3
        },
        {
            id: 4,
            title: "Small BookSelf",
            price: 360,
            oldPrice: null,
            rating: 5,
            reviews: 65,
            image: bestSellingProduct4
        }
    ];


    return (
        <section className="best-selling-section">

            <div className="section-badge">
                <span className="section-badge-text"><svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="40" rx="4" fill="#FF6767" />
                </svg>
                </span>
                This Month
            </div>

            <div className="best-selling-header">
                <h2 className="section-title">Best Selling Products</h2>
                <button className="view-all-products">View All</button>
            </div>

            {/* Products */}
            <div className="products">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} showDiscount={false} />
                ))}

            </div>

        </section>
    );
};

export default BestSellingSection;
