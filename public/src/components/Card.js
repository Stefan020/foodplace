import React, { useState , useEffect} from 'react';
import icon_time from '../assets/images/icon_time.svg';
import icon_plate from '../assets/images/icon_plate.svg';
import icon_star from '../assets/images/icon_star.svg';
import icon_arrows_white from '../assets/images/icon_arrows_white.svg';
import '../assets/Card.css';
import PopUp from './PopUp';



const Card = ({ recipes }) => {
    const [recipe,setRecipe] = useState(recipes)
    const [popupData, setPopupData] = useState({});
  
 const starOne = (_id) => {
        fetch(`http://localhost:10002/api/v1/recipe/${_id}/star`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then(result=>{
            const newRecipe = [...recipes];
            if(result){
                newRecipe.forEach(element => {
                    if(element._id === _id) element.starCount ++;
                });
            }
            setRecipe(newRecipe)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const onClickPopUp = (rid) => {
        const popupData = recipes.filter((item)=> item._id === rid)[0];
        popupData.triggered = true;
        setPopupData(popupData)
    }
    

    return (
        <div className="div-card">
            {recipes.map(recipe => (
                    <div className="recipe-card" key={recipe._id}>
                        <img className="card-img" src={`http://localhost:10003/api/v1/storage/${recipe.recipe_image}`} alt="" />
                    
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
                            <span onClick={()=> onClickPopUp(recipe._id)}><img src={icon_arrows_white} alt="" /></span>
                        </div>
                        <PopUp setTriger={setPopupData} data={popupData} />
                    </div>
                    </div>
                    </div>  
                
            ))}
        </div>
    )
};

export default Card;
