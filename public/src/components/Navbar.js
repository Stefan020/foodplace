import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../constants/routes';
import '../assets/Navbar.css';
import logo from '../assets/images/logo_color.svg';

import {authentication,logOut} from '../redux/ducks/auth';

import {useHistory} from 'react-router-dom';


export const Navbar = (logout) => {
    
    return(
        
        <div className='navbar'>
            <Link to={ROUTES.ROOT}><img src={logo} alt='logo' className='logo'></img></Link>
            <ul className='nav'>
                    <li className='nav-li'> 
                        <Link to={ROUTES.BREAKFAST} className='nav-cat'>breakfast</Link>
                    </li>
                    <li className='nav-li'>
                        <Link to={ROUTES.BRUNCH} className='nav-cat'>brunch</Link>
                    </li>
                    <li className='nav-li'>
                        <Link to={ROUTES.LUNCH} className='nav-cat'>lunch</Link>
                    </li>
                    <li className='nav-li'>
                        <Link to={ROUTES.DINNER} className='nav-cat'>dinner</Link>
                    </li>     
                </ul>
                <div className='nav-btn'>
                <Link to={ROUTES.LOGIN}>
                         <button className='loginbtn'>LOG IN</button>
                     </Link>
                     <p className='or'>or</p>
                     <Link to={ROUTES.CREATE_ACCOUNT}>
                        <button className='createbtn'> CREATE ACCOUNT</button>
                        </Link>
                         {/* <div className='toggleTwo' id='toggleTwo'>
                        <ul className='profileNav'>
                            <li>my recipes</li>
                            <li><Link to={ROUTES.PROFILE}>my profile</Link></li>
                            <li><Link to={ROUTES.ROOT} onClick={(e)=>e.logout}>log out</Link></li>
                        </ul>
                        </div>  */}
                        </div>
        </div>
    )
}

