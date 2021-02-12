import React, { useState , useEffect} from 'react';
import { connect } from 'react-redux';

import '../assets/CreateAccount.css';

export const CreateAccount = (props) => {
    const [accounts, setAccounts] = useState('');



    return(
        <div className='createAcc'>
            
            <h2 className='title-account'>Create Account</h2><hr className='create-acc-hr'/>
           
            <div className='container'>
            <div className='description'>
            <h3><spam className='spam-one'>Create your</spam><br/>
            <spam className='spam-two'> account</spam></h3>
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
            <form>
                <div className='left-form'>
                <label for='first-name' className='label' value={firstName} onChange={(e)=>setFirstName(e.target.value)}>First Name</label><br/>
                <input type="text" id='first-name' className='input' placeholder='John'></input><br/>
                <label for='email' className='label'>Email</label><br/>
                <input type="email" id='email' className='input' placeholder='john@smith.com'></input><br/>
                <label for='password' className='label'>Password</label><br/>
                <input type="password" id='password' className='input' placeholder='******'></input>  <br/>                             
                </div>
                <div className='right-form'>
                <label for='last-name' className='label'>Last Name</label><br/>
                <input type="text" id='last-name' className='input' placeholder='Smith'></input><br/>
                <label for='dob' className='label'>Birthday</label><br/>
                <input type="date" id='dob' className='input' placeholder='22-12-1999'></input>     <br/>       
                <label for='repeat-password' className='label'>Repeat Password</label><br/>
                <input type="password" id='repeat-password' className='input' placeholder='******'></input><br/>
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
{/* <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname"></input> */}

// const mapStateToProps = state => {
//     return{
//         accounts: state.accounts
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return{
//         setAccounts: (accounts) => {dispatch(setAccounts(accounts))}
//     };
// };
export default CreateAccount;
// export default connect(mapStateToProps,mapDispatchToProps)(CreateAccount);