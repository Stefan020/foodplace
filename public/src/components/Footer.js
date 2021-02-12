import React from 'react';
import footerlogo from '../assets/images/logo_white.svg';

import '../assets/Footer.css';

export const Footer = () => {
    return(
        <div className='footer'>
            <div className='design-list'>
            <ul>
                <li>
             <img src={footerlogo} alt='logo' className='footerlogo'></img>
             </li>
             <div className='footer-category'>
                <li>
                    breakfast
                </li>
                <div className='krug'></div>
                <li>
                    breakfast
                </li>
                <div className='krug'></div>
                <li>
                    breakfast
                </li>
                <div className='krug'></div>
                <li>
                    breakfast
                </li>
                </div>
            </ul>
        </div>
       
        </div>
    )
}

export default Footer;