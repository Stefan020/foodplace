import React from 'react';
import footerlogo from '../assets/images/logo_white.svg';

import '../assets/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo-white">
                <img src={footerlogo} alt="" />
            </div>
            <div className="categories-footer">
                <span>Breakfast</span>
                <div className="circlefooter"></div>
                <span>Brunch</span>
                <div className="circlefooter"></div>
                <span>Lunch</span>
                <div className="circlefooter"></div>
                <span>Dinner</span>
            </div>
            <div className="copyright">
                <span>Baby's Food Place</span> <br />
                <span>copyright © 2021</span>
            </div>
        </div>
    );
}

export default Footer;