import React, { useState , useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import '../assets/MyProfile.css';
import avatar from '../assets/images/avatar.png';
// import { fetchUserRequest } from '../redux/ducks/user';
import {getUser,getToken} from '../helpers/storageFunctions';
import ImageUploader from './ImageUploader';


// const pageReload=()=>{
//     window.location.reload();

// }


export const MyProfile = () => {
    const [user, setUser] = useState(getUser()); 
    const [token, setToken] = useState(getToken());

    useEffect(()=>{
        setUser(getUser());
        setToken(getToken());
    },[])

    
    
    const[image,setImage] = useState(null);
    const convertBinaryImage = (e) => {
        const file = e.target.files[0]
        console.log(file)
        let reader = new FileReader()
        reader.readAsDataURL(file)
    
        let bin = null
    
        reader.onload = function() {
          bin = reader.result
          setImage(bin)
          
        }
      
        reader.onerror = function() {
          bin = null
        }
        
      }
    const [updateData,setUpdateData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        birthday:"",
        password:"",
        repeatPassword:""
    })
    const {firstName,lastName,email,password,repeatPassword,birthday} = updateData;

    const updateUser = async() => {
        try{
            const response = await fetch(`http://localhost:10001/api/v1/auth/user/${user._id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    //  'Accept': 'application/json, text/plain, */*',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updateData)
    })
    const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    

    return(
        <div className='profile'>
        <div className="div-profile-title">
        <h2 className='title-profile'>My Profile</h2> <hr className='linija'/>
        </div>
        <div className='profile-cont'>
            <div className='avatar'>
            <img src={image} className='image-avatar'></img>
            <input type='file' className='avatar-btn' onChange={(e) => convertBinaryImage(e)}></input>
            {/* <ImageUploader
             onImageSelectSuccess={(image) => setImage(image)}
             onImageSelectError={({error}) => alert(error)}
            /> */}
            </div> 
      <div  className='update'>
        <form >
                <div className='left-form'>
                <label  className='label'>First Name</label><br/>
                <input type="text" id='firstName' className='input' placeholder={user.firstName} value={firstName} onChange={(e) => setUpdateData({ ...updateData, firstName: e.target.value })}></input><br/>
                <label className='label'>Email</label><br/>
                <input type="email" id='email' className='input' placeholder={user.email} value={email} onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}></input><br/>
                <label  className='label'>Password</label><br/>
                <input type="password" id='password' placeholder='******' className='input' value={password} onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })}></input>  <br/>                             
                <div className='button-div'>
                <input type="submit" value="Save" className='update-acc'/>
                </div>
                </div>
                <div className='right-form'>
                <label className='label'>Last Name</label><br/>
                <input type="text" id='lastName' className='input' placeholder={user.lastName} value={lastName} onChange={(e) => setUpdateData({ ...updateData, lastName: e.target.value })}></input><br/>
                <label className='label'>Birthday</label><br/>
                <input type="date" id='birthday' className='input' placeholder={user.birthday} value={birthday} onChange={(e) => setUpdateData({ ...updateData, birthday: e.target.value })}></input><br/>       
                <label  className='label'>Repeat Password</label><br/>
                <input type="password" id='repeatPassword' placeholder='******' className='input' value={repeatPassword} onChange={(e) => setUpdateData({ ...updateData, repeatPassword: e.target.value })}></input><br/>
                </div>
                
            </form>
        </div>
        </div>
        </div>
    )

    
}

export default MyProfile;