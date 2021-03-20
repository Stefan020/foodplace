import React from 'react';
import { Link } from 'react-router-dom';
import {getToken, removeUserStorage} from '../helpers/storageFunctions';
import ROUTES from '../constants/routes';
import '../assets/Navbar.css';
import logo from '../assets/images/logo_color.svg';

import {authentication, logOut} from '../redux/ducks/auth';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

// if(localStorage.getItem('token')){
//     document.getElementById('toggleOne').style='none';
//     document.getElementById('toggleTwo').style='display:flex';
// }



export const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const logingOut = () => {
        console.log('1')
        logOut()(dispatch)
        // setTimeout(()=> history.push('/login'), 1000);
        // history.push('/login');
    }
    
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
                {!getToken() ?
                <div className='nav-btn'>
                <Link to={ROUTES.LOGIN}>
                         <button className='loginbtn'>LOG IN</button>
                     </Link>
                     <p className='or'>or</p>
                     <Link to={ROUTES.CREATE_ACCOUNT}>
                        <button className='createbtn'> CREATE ACCOUNT</button>
                        </Link>
                        </div>
                        :
                         <div className='toggleTwo'>
                        <ul className='profileNav'>
                            <li className='toggle-li'><Link className='toggle-link-one' to={ROUTES.MY_RECIPES}>my recipes</Link></li>
                            <li className='toggle-li'><Link className='toggle-link-two' to={ROUTES.PROFILE}>my profile</Link></li>
                            <li className='toggle-li'><Link className='toggle-link-three' to={ROUTES.LOGIN} onClick={logingOut}>log out</Link></li>
                        </ul>
                        </div> 
                    }
        </div>
    )
}

