import React, { useState , useEffect} from 'react';
import '../assets/MyRecipes.css';
import icon_trash from '../assets/images/icon_trashcan.svg';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';
import plus from '../assets/images/icon_plus_white.svg';
import {getToken} from '../helpers/storageFunctions';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'

export const MyRecipes = () => {
    const [myrecipes, setMyrecipes] = useState([]);
    const token = getToken();
    let dispatch = useDispatch();
    let history = useHistory();
    
    useEffect(()=>{
        fetch('http://localhost:10002/api/v1/recipe', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
        if (!res.ok) {
            throw Error('Cant fetch data!');
        }
        return res.json();
    })
    .then(data => {
        setMyrecipes(data)
    })
    .catch(err => {
        console.log(err)
    })
},[])


    const deleteRecipe = async(rid) => {
          await fetch(`http://localhost:10002/api/v1/recipe/${rid}`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const newRecipes = myrecipes.filter((item)=> item._id !==rid);
            console.log(newRecipes)
            setMyrecipes([...newRecipes]);
    };
    // const [prevData, setPrevData] = useState({})
    const redirectToUpdate = (rid) => {
        history.push(`update-recipe/${rid}`)
    }

    // console.log(myrecipes)
    return(
        <div className='my-recipes'>
            <div className="div-title">
            <h2 className="title">My Recipes</h2><hr className="hr-date"></hr>
           <Link to={ROUTES.ADD_RECIPE}> <div className='plus'><img className='znak' src={plus} alt=""/></div></Link>
            </div>

                <table className='my-recipes-table'>
                    <thead>
                    <tr className='tr'>
                        <th className='head1'>Recipe Name</th>
                        <th className='head2'>Category</th>
                        <th className='head3'>Created On</th>
                        <th className='head4'>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myrecipes && myrecipes.map(recipe => (
                    <tr key={recipe._id} className='trr'>
                        {/* <Link className='tr' to={`recipes/${recipe._id}`}> */}
                            <td className='my-recipe-title' onClick={()=>redirectToUpdate(recipe._id)}>{recipe.title}</td>
                            <td className='my-recipe-cat' onClick={()=>redirectToUpdate(recipe._id)}><div>{recipe.category}</div></td>
                            <td className='my-recipe-date' onClick={()=>redirectToUpdate(recipe._id)}>{new Date(recipe.pubDate).toLocaleDateString()}</td>
                            <td className='my-recipe-del' onClick={()=>{deleteRecipe(recipe._id)}}><img src={icon_trash}/></td>
                        {/* </Link> */}
                    </tr>                    
              ))}
              </tbody>
               </table>
            
          </div>
  
    )
}

export default MyRecipes;