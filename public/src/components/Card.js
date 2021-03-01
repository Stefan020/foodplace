import React, { useState , useEffect} from 'react';
import icon_time from '../assets/images/icon_time.svg';
import icon_plate from '../assets/images/icon_plate.svg';
import icon_star from '../assets/images/icon_star.svg';
import icon_arrows_white from '../assets/images/icon_arrows_white.svg';
import {Link} from 'react-router-dom'
import '../assets/Card.css';
import {starRecipe} from '../redux/ducks/recipe'; 
import {useStar} from './StarHook';
import {useDispatch} from 'react-redux';


const Card = ({ recipes }) => {
    const [recipe,setRecipe] = useState({
        starCount:""
    })
    const dispatch = useDispatch();
 const starOne = (_id) => {
        fetch(`http://localhost:10002/api/v1/recipe/${_id}/star`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                rid:_id
            })
        }).then(res=>res.json())
        .then(result=>{
            setRecipe(result)
        }).then(dispatch =>dispatch(recipe))
        .catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div className="div-card">
            {recipes.map(recipe => (
                
                    <div className="recipe-card" key={recipe._id}>
                        <div className="card-img">
                        <img src={recipe.image} alt="" />
                        </div>
                    
                    <div className="card-container">
                        <h3 className="card-title">{recipe.title}</h3>
                        <p className="card-desc">{recipe.description}</p>
                    <div className="card-icons">
                        <div className="icons-left">
                            <span><img src={icon_time} alt="" /></span><span className="time">{recipe.prep_time} min</span>
                            <span><img src={icon_plate} alt="" /></span><span className="plate">{recipe.num_people} persons</span>
                            <span  onClick={()=>{starOne(recipe._id)}}><img src={icon_star} alt="" /></span><span className="star">{recipe.starCount}</span>
                        </div>
                        <div className="icon-right">
                            <span><Link to={`/recipes/${recipe._id}`} className="card-link"><img src={icon_arrows_white} alt="" /></Link></span>
                        </div>
                    </div>
                    </div>
                    </div>  
                
            ))}
        </div>
    )
};

export default Card;
