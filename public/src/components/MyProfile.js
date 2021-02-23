import React, { useState , useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import '../assets/MyProfile.css';
import avatar from '../assets/images/avatar.png';
import { fetchUserRequest } from '../redux/ducks/user';


export const MyProfile = () => {
    const [profile, setProfile] = useState({
        firstName:"",
        lastName:"",
        email:"",
        birthday:"",
        password:"",
        repeatPassword:"",
        loggedIn: false,
    })

    const profileParams = fetchUserRequest(localStorage.getItem('token'))


    return(
        <div className='profile'>
        <div className="div-profile-title">
        <h2 className='title-profile'>My Profile</h2> <hr className='linija'/>
        </div>
        <div className='profile-cont'>
            <div className='avatar'>
            <img src={avatar} className='image-avatar'></img>
            <button className='avatar-btn'>change avatar</button>
            </div> 
      <div  className='update'>
        <form >
                <div className='left-form'>
                <label  className='label'>First Name</label><br/>
                <input type="text" id='firstName' className='input' ></input><br/>
                <label className='label'>Email</label><br/>
                <input type="email" id='email' className='input' ></input><br/>
                <label  className='label'>Password</label><br/>
                <input type="password" id='password' className='input' ></input>  <br/>                             
                <div className='button-div'>
                <input type="submit" value="Save" className='update-acc'/>
                </div>
                </div>
                <div className='right-form'>
                <label className='label'>Last Name</label><br/>
                <input type="text" id='lastName' className='input'></input><br/>
                <label className='label'>Birthday</label><br/>
                <input type="date" id='birthday' className='input' ></input><br/>       
                <label  className='label'>Repeat Password</label><br/>
                <input type="password" id='repeatPassword' className='input' ></input><br/>
                </div>
                
            </form>
        </div>
        </div>
        </div>
    )
}

export default MyProfile;