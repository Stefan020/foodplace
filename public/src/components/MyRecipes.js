import React, { useState , useEffect} from 'react';
import useFetch from './FetchHook';
import '../assets/MyRecipes.css';
import MyRecipesDiv from './MyRecipesDiv';
import icon_trash from '../assets/images/icon_trashcan.svg';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';

export const MyRecipes = (uid) => {

    const {data} = useFetch(`/api/v1/recipe/myrecipes/${uid}`)

    return(
        <div className='myrecipes'>
            <div className="div-title">
            <h2 className="title">My Recipes</h2><hr className="hr-date"></hr>
           <Link to={ROUTES.ADD_RECIPE}> <div className='plus'></div></Link>
            </div>
          <div className='my'>
              
                <table>
                    <tr className='head'>
                        <th className='head1'>Recipe Name</th>
                        <th className='head2'>Category</th>
                        <th className='head3'>Created On</th>
                        <th className='head4'>Delete</th>
                    </tr>
                    {data && data.map(recipe => (
                    <tr  key={recipe._id}>
                    <td>{recipe.title}</td>
                    <td>{recipe.category}</td>
                    <td>{recipe.date}</td>
                    <td><img src={icon_trash}/></td>
                    </tr>
               
              ))}
               </table>
          </div>
        </div>
    )
}

export default MyRecipes;