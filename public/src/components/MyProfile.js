import React, { useState , useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import '../assets/MyProfile.css';
import avatar from '../assets/images/avatar.png';
// import { fetchUserRequest } from '../redux/ducks/user';
import {getUser,getToken, setUserStorage} from '../helpers/storageFunctions';


export const MyProfile = () => {
    const [user, setUser] = useState(getUser()); 
    const [token, setToken] = useState('');

    useEffect(()=>{
        setUser(getUser());
        setToken(getToken());
    },[''])
    // const setUserFromStorage  = ()=> {
    //     if(user.firstName){
    //         return;
    //     }
    //     let userFromStorage = getUser();
    //     // const token
    //     console.log(userFromStorage)
    //     // setUser(userFromStorage)
        
    // }
    // setUserFromStorage()
    
    const [file, setFile] = useState(null);
    const[image,setImage] = useState(null);
    const convertBinaryImage = (e) => {
        if(!e.target.files[0]) return;
        setUpdateData({...updateData, avatar: null})
        const file = e.target.files[0]
        setFile(file);
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
      const uploadImage =(img, token) => {
        // for(let key of img.entries()){
        //     console.log(key)
        //     console.log(key[0], key[1])
        // }
         return fetch(`http://localhost:10003/api/v1/storage`,{
             method:'POST',
             headers:{

                'Authorization':`Bearer ${token}`
             },
             body:img
         }).then(res => {
             return res.json();
         }).catch(err => {
             console.log(err);
         })
     }

     
      const uploadFile = async () => {
          if(!file) {
              updateUser(updateData);
              return;
          }
        let formData = new FormData();
        formData.append('document', file);
        console.log(file, token)
        await uploadImage(formData, token)
            .then(res => {
                updateUser({...updateData, avatar: res.filename});
            })
            .catch(err => {
                console.log(err);
            });
      }
    const [updateData,setUpdateData] = useState({
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        birthday:new Date(user.birthday).toLocaleDateString(),
        password:user.password,
        repeatPassword:"",
        _id: user._id,
        avatar:user.avatar
    })
    // const {firstName,lastName,email,password,repeatPassword,birthday} = updateData;

    const updateUser = async(updateData) => {
        console.log(updateData.avatar)
        // e.preventDefault()
            fetch(`http://localhost:10001/api/v1/auth/${user._id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updateData)
            })
            .then(r=> r).then((result)=> {
                if(result){
                    setUser(updateData);
                    setUpdateData(updateData)
                    localStorage.setItem("user", JSON.stringify(updateData));
                }
            })
    }

    const handleUpdateUser = async(e) => {
        e.preventDefault()
        await uploadFile()   
      }
    



    return(
        <div className='profile'>
        <div className="div-profile-title">
        <h2 className='title-profile'>My Profile</h2> <hr className='linija'/>
        </div>
        <div className='profile-cont'>
        <form onSubmit={handleUpdateUser}>
            <div className='avatar'>
            <img src={updateData.avatar ? `http://localhost:10003/api/v1/storage/${updateData.avatar}` : image || avatar} className='image-avatar'/>
            <input type='file' className='avatar-btn' onChange={(e) => convertBinaryImage(e)}></input>
            </div> 
            <div  className='update'>
                <div className='left-form'>
                <label  className='label'>First Name</label><br/>
                <input type="text" id='firstName' className='input' value={updateData.firstName} onChange={(e) => setUpdateData({ ...updateData, firstName: e.target.value })}></input><br/>
                <label className='label'>Email</label><br/>
                <input type="email" id='email' className='input' value={updateData.email} onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}></input><br/>
                <label  className='label'>Password</label><br/>
                <input type="password" id='password' value={updateData.password} className='input'  onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })}></input>  <br/>                             
                <div className='button-div'>
                <input type="submit" value="Save" className='update-acc'/>
                </div>
                </div>
                <div className='right-form'>
                <label className='label'>Last Name</label><br/>
                <input type="text" id='lastName' className='input' value={updateData.lastName} onChange={(e) => setUpdateData({ ...updateData, lastName: e.target.value })}></input><br/>
                <label className='label'>Birthday</label><br/>
                <input type="date" id='birthday' className='input' value={updateData.birthday} onChange={(e) => setUpdateData({ ...updateData, birthday: e.target.value })}></input><br/>       
                <label  className='label'>Repeat Password</label><br/>
                <input type="password" id='repeatPassword'  value={updateData.password} className='input' onChange={(e) => setUpdateData({ ...updateData, repeatPassword: e.target.value })}></input><br/>
                </div>
                
           
        </div>
        </form>
        </div>
        
        </div>
    )

    
}

export default MyProfile;