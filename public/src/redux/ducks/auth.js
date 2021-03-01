import axios from 'axios';
// import React, { useState , useEffect} from 'react';
// import { connect, useDispatch } from 'react-redux';
const init = {
    token: localStorage.getItem('token'),
    isAuthenticated:null,
    user:null
};

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILED = 'REGISTER_FAILED';
const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';
const LOGOUT_USER = 'LOGOUT_USER';

export const register = (firstName,lastName,email,birthday,password,repeatPassword) => async(dispatch) => {
    const config = {
        header:{
            'Content-Type':'application/json'
        }
    }
    const body = {firstName,lastName,email,birthday,password,repeatPassword}
    try {
        const res = await axios.post('http://localhost:10001/api/v1/auth', body, config)

        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:REGISTER_FAILED
        })
    }
}

export const logIn =(email,password) => async (dispatch)=>{
    const config = {
        header:{
            'Content-Type':'application/json'
        }
    };
    const body = {email,password};
    console.log(body,config)
    try{
        
        const res = await axios.post('http://localhost:10001/api/v1/auth/login', body, config)
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        console.log('user logged in')
    }catch(err){
        dispatch({
            type:LOGIN_FAILED
        });
    }
};

export const authentication = () => async(dispatch) => {
    if(localStorage.getItem('token')){
        const tokenCheck = {jwt: localStorage.getItem('token')};

        try {
            if(tokenCheck.token !== null){
                dispatch({
                    type:AUTHENTICATION_SUCCESS,
                    payload:tokenCheck
                })
            }
        } catch (err) {
            dispatch({
                type:AUTHENTICATION_FAILED
            })
        }
    }else{
        dispatch({
            type:AUTHENTICATION_FAILED
        })
    }
}

export const logOut = () => (dispatch) => {
    dispatch({
        type:LOGOUT_USER
    })
}

const reducer = (state=init,action) => {
    const {type, payload} = action;
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated:false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.jwt)
            // console.log('token')
            return{
                ...state,
                isAuthenticated:true,
                token:payload.jwt
                // user: tuka raboti!
                
            }
        case LOGIN_FAILED:
        case LOGOUT_USER:
            localStorage.removeItem('token')
            return{
                ...state,
                isAuthenticated:false,
                user:null 
            }
        case AUTHENTICATION_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                token:payload.jwt
            }
        case AUTHENTICATION_FAILED:
            return{
                ...state,
                isAuthenticated:false,
                token:null
                }
        default:
            return state;
    }
}

export default reducer;