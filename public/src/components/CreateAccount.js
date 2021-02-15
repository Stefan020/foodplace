import React, { useState , useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';

import {saveAccount} from '../redux/ducks/accounts';

import '../assets/CreateAccount.css';

export const CreateAccount = (props) => {
    const [account, setSaveAccount] = useState({
        firstName:"",
        lastName:"",
        email:"",
        birthday:"",
        password:"",
        repeatPassword:""
    });
    const dispatch = useDispatch();

    // const changeHandler = (e) => {
    //     this.setSaveAccount( e.target.value)
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(account.password === account.repeatPassword){
            createAccount();
        dispatch(saveAccount(account));
        }else{
            alert('please repeat password')
        }
    };

const createAccount = () => {
    fetch('http://localhost:10001/api/v1/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( account )
    })
    .then(data => data.json())
    // .then(account =>{console.log(account); setSaveAccount(account)})
    .catch((err) => console.log(err))
};


    return(
        <div className='createAcc'>
            
            <h2 className='title-account'>Create Account</h2><hr className='create-acc-hr'/>
           
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
                <input type="text" id='firstName' className='input' placeholder='John' value={account.firstName} onChange={(e) => setSaveAccount({ ...account, firstName: e.target.value })}></input><br/>
                <label className='label'>Email</label><br/>
                <input type="email" id='email' className='input' placeholder='john@smith.com'  value={account.email} onChange={(e) => setSaveAccount({ ...account, email: e.target.value })}></input><br/>
                <label  className='label'>Password</label><br/>
                <input type="password" id='password' className='input' placeholder='******'  value={account.password} onChange={(e) => setSaveAccount({ ...account, password: e.target.value })}></input>  <br/>                             
                </div>
                <div className='right-form'>
                <label className='label'>Last Name</label><br/>
                <input type="text" id='lastName' className='input' placeholder='Smith'  value={account.lastName} onChange={(e) => setSaveAccount({ ...account, lastName: e.target.value })}></input><br/>
                <label className='label'>Birthday</label><br/>
                <input type="date" id='birthday' className='input' placeholder='22-12-1999'  value={account.birthday} onChange={(e) => setSaveAccount({ ...account, birthday: e.target.value })}></input>     <br/>       
                <label  className='label'>Repeat Password</label><br/>
                <input type="password" id='repeatPassword' className='input' placeholder='******'  value={account.repeatPassword} onChange={(e) => setSaveAccount({ ...account, repeatPassword: e.target.value })}></input><br/>
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
// const mapStateToProps = state => {
//     return{
//         account: state.account
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return{
//         setSaveAccount: (account) => {dispatch(saveAccount(account))} 

//     };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(CreateAccount);