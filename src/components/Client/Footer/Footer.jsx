import React from 'react';
import './Footer.css';

import qrCode from '@/assets/qr-code.png'
import playstore from '@/assets/google-play.png'
import appstore from '@/assets/app-store.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1: Subscribe */}
                <div className="footer-column logo-col">
                    <h3 className='footer-logo'>Exclusive</h3>
                    <p className='newsletter-title'>Subscribe</p>
                    <p className='newsletter-desc'>Get 10% off your first order</p>
                    <div className="subscribe-box">
                        <input type="email" placeholder="Enter your email" />
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                            <path d="M8.91245 10H3.00045L1.02345 2.135C1.01079 2.08929 1.00308 2.04236 1.00045 1.995C0.978447 1.274 1.77245 0.774002 2.46045 1.104L21.0004 10L2.46045 18.896C1.78045 19.223 0.996447 18.737 1.00045 18.029C1.00247 17.9657 1.01359 17.9031 1.03345 17.843L2.50045 13" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                    </div>
                </div>

                {/* Column 2: Support */}
                <div className="footer-column support-col">
                    <h3>Support</h3>
                    <p>111 Bijoy sarani, Dhaka,</p>
                    <p>DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                {/* Column 3: Account */}
                <div className="footer-column account-col">
                    <h3>Account</h3>
                    <a href="#">My Account</a>
                    <a href="#">Login / Register</a>
                    <a href="#">Cart</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Shop</a>
                </div>

                {/* Column 4: Quick Link */}
                <div className="footer-column quick-links-col">
                    <h3>Quick Link</h3>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms Of Use</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact</a>
                </div>

                {/* Column 5: App Download */}
                <div className="footer-column download-app-col">
                    <h3>Download App</h3>
                    <p className='download-app-dec'>Save $3 with App New User Only</p>
                    <div className="download-app">
                        <img className="qr" src={qrCode} alt="QR Code" />
                        <div className="download-buttons">
                            <img src={playstore} alt="Google Play" />
                            <img src={appstore} alt="App Store" />
                        </div>
                    </div>
                    <div className="social-icons">
                        {/* <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a> */}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; Copyright Rimel 2022. All right reserved
            </div>
        </footer>
    );
};

export default Footer;
