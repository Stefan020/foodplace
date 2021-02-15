import React, { useState , useEffect} from 'react';
import { connect } from 'react-redux';

import '../assets/LogIn.css';

export const LogIn = (props) => {
    return(
        <div className='login'>
             <h2 className='title-login'>Log In</h2><hr className='login-hr'/>
             <div className='container'>
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
                <form className='log-in'>
                <label className='label'>Email</label><br/>
                <input type="email" id='email' className='input' placeholder='user@domain.com'></input><br/>
                <label className='label'>Password</label><br/>
                <input type="password" id='password' className='input' placeholder='******'></input>  <br/>
                <input type="submit" value="Log In" className='submit-login'/>
                </form>
             </div>
        </div>
    )
}

export default LogIn;