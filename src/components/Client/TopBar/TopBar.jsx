import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className='topbar-section'>
            <div className="top-bar">
                <div className="left-text">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <span className="shop-now">
                        ShopNow
                    </span>
                </div>
                <div className="right-text">
                    English
                    <span className="dropdown-arrow" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                            <path d="M6.36452 4.95L11.3145 0L12.7285 1.414L6.36452 7.778L0.000514984 1.414L1.41451 0L6.36452 4.95Z" fill="white" />
                        </svg>
                    </span>
                </div>
            </div>
        </div >
    );
};

export default TopBar;
