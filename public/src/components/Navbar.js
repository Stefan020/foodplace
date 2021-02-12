import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../constants/routes';
import '../assets/Navbar.css';
import logo from '../assets/images/logo_color.svg';


export const Navbar = () => {
    return(
        <div className='navbar'>
            <ul className='nav'>
            <Link to={ROUTES.ROOT}>
                    <li className='mynav'>
                    <img src={logo} alt='logo' className='logo'></img>
                    </li></Link>
                    <li className='mynav'> 
                        <Link to={ROUTES.BREAKFAST} className='nav-cat'>breakfast</Link>
                    </li>
                    <div className='tocka'></div>
                    <li className='mynav'>
                        <Link to={ROUTES.BRUNCH} className='nav-cat'>brunch</Link>
                    </li>
                    <div className='tocka'></div>
                    <li className='mynav'>
                        <Link to={ROUTES.LUNCH} className='nav-cat'>lunch</Link>
                    </li>
                    <div className='tocka'></div>
                    <li className='mynav'>
                        <Link to={ROUTES.DINNER} className='nav-cat'>dinner</Link>
                    </li>                 
                    <li className='mynav'>
                    <Link to={ROUTES.LOGIN}>
                         <button className='loginb'>LOG IN</button>
                     </Link>
                    </li>
                    <li className='mynav'>
                        <p className='or'>or</p>
                    </li>
                    <li className='mynav'>
                        <Link to={ROUTES.CREATE_ACCOUNT}>
                        <button className='createbtn'> CREATE ACCOUNT</button>
                        </Link>
                    </li>
                </ul>
        </div>
    )
}
{/* <Link to={ROUTES.CREATE_ACCOUNT} className="link-item">
                        <button className="create-acc-btn">CREATE ACCOUNT</button>
                    </Link> */}
