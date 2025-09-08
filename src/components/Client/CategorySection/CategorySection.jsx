import "./CategorySection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

const categories = [
    {
        name: "Phones",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <g clipPath="url(#clip0_2313_475)">
                    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25.667 7H31.1357" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 44.0051V44.0304" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="15.167" y1="39.8333" x2="40.8337" y2="39.8333" stroke="currentColor" strokeWidth="2" />
                </g>
                <defs>
                    <clipPath id="clip0_2313_475">
                        <rect width="56" height="56" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: "Computers",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <g clipPath="url(#clip0_2313_255)">
                    <path d="M46.6667 9.33325H9.33333C8.04467 9.33325 7 10.3779 7 11.6666V34.9999C7 36.2886 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2886 49 34.9999V11.6666C49 10.3779 47.9553 9.33325 46.6667 9.33325Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.333 46.6667H39.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 37.3333V46.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M35 37.3333V46.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 32H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2313_255">
                        <rect width="56" height="56" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: "SmartWatch",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2313_798)">
                    <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 42V49H35V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 14V7H35V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="24" y1="23" x2="24" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="28" y1="28" x2="28" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="32" y1="26" x2="32" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2313_798">
                        <rect width="56" height="56" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: "Camera",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <g clipPath="url(#clip0_2313_1079)">
                    <path d="M11.6667 16.3333H14C15.2377 16.3333 16.4247 15.8416 17.2998 14.9664C18.175 14.0912 18.6667 12.9043 18.6667 11.6666C18.6667 11.0477 18.9125 10.4543 19.3501 10.0167C19.7877 9.57909 20.3812 9.33325 21 9.33325H35C35.6188 9.33325 36.2123 9.57909 36.6499 10.0167C37.0875 10.4543 37.3333 11.0477 37.3333 11.6666C37.3333 12.9043 37.825 14.0912 38.7002 14.9664C39.5753 15.8416 40.7623 16.3333 42 16.3333H44.3333C45.571 16.3333 46.758 16.8249 47.6332 17.7001C48.5083 18.5753 49 19.7622 49 20.9999V41.9999C49 43.2376 48.5083 44.4246 47.6332 45.2997C46.758 46.1749 45.571 46.6666 44.3333 46.6666H11.6667C10.429 46.6666 9.242 46.1749 8.36683 45.2997C7.49167 44.4246 7 43.2376 7 41.9999V20.9999C7 19.7622 7.49167 18.5753 8.36683 17.7001C9.242 16.8249 10.429 16.3333 11.6667 16.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 37.3333C31.866 37.3333 35 34.1992 35 30.3333C35 26.4673 31.866 23.3333 28 23.3333C24.134 23.3333 21 26.4673 21 30.3333C21 34.1992 24.134 37.3333 28 37.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2313_1079">
                        <rect width="56" height="56" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: "Headphones",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <g clipPath="url(#clip0_2313_820)">
                    <path d="M16.333 30.3333H13.9997C11.4223 30.3333 9.33301 32.4226 9.33301 34.9999V41.9999C9.33301 44.5772 11.4223 46.6666 13.9997 46.6666H16.333C18.9103 46.6666 20.9997 44.5772 20.9997 41.9999V34.9999C20.9997 32.4226 18.9103 30.3333 16.333 30.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4226 35 34.9999V41.9999C35 44.5772 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5772 46.6667 41.9999V34.9999C46.6667 32.4226 44.5773 30.3333 42 30.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.33301 34.9999V27.9999C9.33301 23.0492 11.2997 18.3013 14.8003 14.8006C18.301 11.2999 23.049 9.33325 27.9997 9.33325C32.9504 9.33325 37.6983 11.2999 41.199 14.8006C44.6997 18.3013 46.6663 23.0492 46.6663 27.9999V34.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2313_820">
                        <rect width="56" height="56" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: "Gaming",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <g clipPath="url(#clip0_2313_24)">
                    <path d="M46.667 14H9.33366C6.75633 14 4.66699 16.0893 4.66699 18.6667V37.3333C4.66699 39.9107 6.75633 42 9.33366 42H46.667C49.2443 42 51.3337 39.9107 51.3337 37.3333V18.6667C51.3337 16.0893 49.2443 14 46.667 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 27.9999H23.3333M18.6667 23.3333V32.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M35 25.6667V25.6909" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42 30.3333V30.3574" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2313_24">
                        <rect width="56" height="56" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: "Headphones",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <g clipPath="url(#clip0_2313_820)">
                    <path d="M16.333 30.3333H13.9997C11.4223 30.3333 9.33301 32.4226 9.33301 34.9999V41.9999C9.33301 44.5772 11.4223 46.6666 13.9997 46.6666H16.333C18.9103 46.6666 20.9997 44.5772 20.9997 41.9999V34.9999C20.9997 32.4226 18.9103 30.3333 16.333 30.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4226 35 34.9999V41.9999C35 44.5772 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5772 46.6667 41.9999V34.9999C46.6667 32.4226 44.5773 30.3333 42 30.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.33301 34.9999V27.9999C9.33301 23.0492 11.2997 18.3013 14.8003 14.8006C18.301 11.2999 23.049 9.33325 27.9997 9.33325C32.9504 9.33325 37.6983 11.2999 41.199 14.8006C44.6997 18.3013 46.6663 23.0492 46.6663 27.9999V34.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2313_820">
                        <rect width="56" height="56" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },

];


const CategorySection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy(); // Remove existing nav
            swiperInstance.navigation.init();    // Re-init nav
            swiperInstance.navigation.update();  // Update nav
        }
    }, [swiperInstance]);

    return (
        <section className="category-section">
            {/* Badge */}
            <div className="section-badge">
                <span className="section-badge-text">
                    <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="40" rx="4" fill="#FF6767" />
                    </svg>
                </span>
                Categories
            </div>

            {/* Title & Navigation */}
            <div className="category-section-header">
                <h2 className="section-title">Browse By Category</h2>
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

            {/* Swiper Carousel */}
            <div className="category-slider-wrapper">
                <Swiper
                    onSwiper={setSwiperInstance}
                    slidesPerView={6}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 24,
                        },
                    }}


                    className="category-swiper"
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={index} className="category-slide">
                            <div className="category-item">
                                {category.icon}
                                <span>{category.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CategorySection;
