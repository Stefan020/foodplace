import React, { useState , useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import '../assets/CreateAccount.css';
import {register} from '../redux/ducks/auth';

export const CreateAccount = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [registrationData, setRegistrationData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        birthday:"",
        password:"",
        repeatPassword:""
    })
    
    const {firstName,lastName,email,birthday,password,repeatPassword} = registrationData;

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password === repeatPassword){
            register(firstName,lastName,email,birthday,password,repeatPassword)(dispatch)
            props.history.push("/login")
        }else{
            alert('Password and Repeat Password do not match!')
        }
        
        
    }
    return(
        <div className='createAcc'>
            <div className="div-title">
            <h2 className='title'>Create Account</h2> <hr className='create-acc-hr'/>
            </div>

            <div className='container'>
            <div className='description'>
            <h3><span className='spam-one'>Create your</span><br/>
            <span className='spam-two'> account</span></h3>
                <p className='descr'> All the Lorem Ipsum generators on the 
                Internet tend to repeat predefined chunks 
                as necessary, making this the first true 
                generator on the Internet. It uses a 
                dictionary of over 200 Latin words,
                 combined with a handful of model 
                 sentence structures, to generate Lorem 
                 Ipsum which looks reasonable.
            </p>
            </div>
            <div className='account-form'>
            <form onSubmit={handleSubmit}>
                <div className='left-form'>
                <label  className='label'>First Name</label><br/>
                <input type="text" id='firstName' className='input' placeholder='John' value={firstName} onChange={(e) => setRegistrationData({ ...registrationData, firstName: e.target.value })}></input><br/>
                <label className='label'>Email</label><br/>
                <input type="email" id='email' className='input' placeholder='john@smith.com'  value={email} onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}></input><br/>
                <label  className='label'>Password</label><br/>
                <input type="password" id='password' className='input' placeholder='******'  value={password} onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}></input>  <br/>                             
                </div>
                <div className='right-form'>
                <label className='label'>Last Name</label><br/>
                <input type="text" id='lastName' className='input' placeholder='Smith'  value={lastName} onChange={(e) => setRegistrationData({ ...registrationData, lastName: e.target.value })}></input><br/>
                <label className='label'>Birthday</label><br/>
                <input type="date" id='birthday' className='input' placeholder='22-12-1999'  value={birthday} onChange={(e) => setRegistrationData({ ...registrationData, birthday: e.target.value })}></input>     <br/>       
                <label  className='label'>Repeat Password</label><br/>
                <input type="password" id='repeatPassword' className='input' placeholder='******'  value={repeatPassword} onChange={(e) => setRegistrationData({ ...registrationData, repeatPassword: e.target.value })}></input><br/>
                </div>
                <div className='btn-div'>
                <input type="submit" value="Create Account" className='submit-acc'/>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
};
export default CreateAccount;
