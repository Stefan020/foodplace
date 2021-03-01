import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom'
import icon_trash from '../assets/images/icon_trashcan.svg';

const MyRecipesDiv =({ myrecipes }) => {

    return(
        <div className='my-recipe-div'>
            <span>{myrecipes.title}</span>
            <span>{myrecipes.category}</span>
            <span>{myrecipes.pudDate}</span>
            <span><img src={icon_trash}/></span>
        </div>
    )
};

export default MyRecipesDiv;