import React, { useState } from 'react';
import { Link } from 'react-router';

import './Header.css';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="header-section">
            <div className="header-container">
                <div className="header-logo">Exclusive</div>
                <nav className="nav-menu" aria-label="Primary Navigation">
                    <Link to="/" className="nav-item active">Home</Link>
                    <Link to="/" className="nav-item">Contact</Link>
                    <Link to="/" className="nav-item">About</Link>
                    <Link to="/signup" className="nav-item signup">Sign Up</Link>
                </nav>

                {/* Hamburger Menu */}
                <button
                    className="hamburger-menu"
                    onClick={toggleSidebar}
                    aria-label="Toggle Navigation"
                    aria-expanded={isSidebarOpen}
                >
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                </button>

                <div className="header-actions">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            aria-label="Search"
                        />
                        <button className="search-btn" aria-label="Search">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="header-icons-group">
                        <button className="icon-btn" aria-label="Wishlist">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button className="icon-btn" aria-label="Cart">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3 5H7L10 22H26"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10 16.6665H25.59C25.7056 16.6666 25.8177 16.6266 25.9072 16.5533C25.9966 16.48 26.0579 16.378 26.0806 16.2646L27.8806 7.26463C27.8951 7.19206 27.8934 7.11717 27.8755 7.04536C27.8575 6.97355 27.8239 6.90662 27.7769 6.8494C27.73 6.79218 27.6709 6.74609 27.604 6.71446C27.5371 6.68283 27.464 6.66645 27.39 6.6665H8"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
                aria-hidden={!isSidebarOpen}
            />

            {/* Sidebar */}
            <div
                className={`landing-sidebar ${isSidebarOpen ? 'active' : ''}`}
                aria-hidden={!isSidebarOpen}
            >
                <nav className="sidebar-nav">
                    <a href="#" className="nav-item active">Home</a>
                    <a href="#" className="nav-item">Contact</a>
                    <a href="#" className="nav-item">About</a>
                    <a href="#" className="nav-item signup">Sign Up</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
