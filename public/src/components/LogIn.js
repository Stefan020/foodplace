import React, { useState , useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
// import {loginAccount} from '../redux/ducks/accounts';
import {logIn} from '../redux/ducks/auth';
import {toggle} from './Navbar';


import '../assets/LogIn.css';

export const LogIn = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [loginData, setLoginData] = useState({
        email:'',
        password:'',
        
    });

    const handleLogin = (e) => {
        e.preventDefault()
        logIn(email,password)(dispatch);
        props.history.push("/my-profile")
    }

    const {email, password} = loginData;

    return(
        <div className='login'>
            <div className="login-title-div">
             <h2 className='title'>Log In</h2><hr className='login-hr'/>
             </div>
             <div className='cont'>
                 <div className="left-login">
             <h3 className="login-title">
                <span className="spam-eden">Welcome to</span>
                <span className="spam-dva">Baby's</span>
            </h3>
            
            <p className='welcome'>All the Lorem Ipsum generators on the Internet tend to repeat 
            predefined chunks as necessary, making this the first true generator on the Internet. 
            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
            to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free 
            from repetition, injected humour, or non-characteristic words etc.</p>
             </div>
             
             <div className='login-form'>
                <form className='log-in' onSubmit={handleLogin}>
                <label className='label'>Email</label><br/>
                <input type="email" id='email' className='input' placeholder='user@domain.com' value={email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}></input><br/>
                <label className='label'>Password</label><br/>
                <input type="password" id='password' className='input' placeholder='******' value={password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}></input>  <br/>
                <input type="submit" value="Log In" className='submit-login'/>
                </form>
             </div>
             </div>
        </div>
    )
}

export default connect (null,logIn)(LogIn);