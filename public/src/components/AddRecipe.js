import React, { useState , useEffect} from 'react';
import ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';
import picture from '../assets/images/pizza-placeholder.jpg';
import ImageUploader from './ImageUploader';
import back from '../assets/images/icon_back_white.svg';
import '../assets/AddRecipe.css';

export const AddRecipe = () => {
    const[recipe,setRecipe] = useState({
        title:"",
        category:"",
        prep_time:"",
        num_people:"",
        description:"",
        recipe:"",
    })
    
    const[image,setImage] = useState(null);
    const convertBinaryImage = (e) => {
        const file = e.target.files[0]
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
    useEffect(()=>{
        fetch('http://localhost:10002/api/v1/recipe/newrecipe', {

        })

    })

   
    return(
        <div className='new-recipe'>
            <div className="div-title">
            <h2 className="title">My Recipes</h2><hr className="hr-date"></hr>
           <Link to={ROUTES.MY_RECIPES}> <div className='plus'><img className='znak' src={back} alt=""/></div></Link>
            </div>
            <form>
            <div className='container-recipe'>    
             <div className='recipe-image'>   
                <label className='label'>Recipe Image</label>
                    <img src={image} className='image-recipe'></img>
                    <input type='file' className='recipe-img-btn' onChange={(e) => convertBinaryImage(e)}></input>
                </div> 
                <div className='recipe-center'>
                    <label className='label'>Recipe Title</label>
                    <input type='text' className='input-recipe-title'></input>
                    <div className='center-middle'>
                   <span> <label className='label'>Category</label>
                    <select className='input-category'>
                        <option value="vlvo">Breakfast</option>
                        <option value="saab">Brunch</option>
                        <option value="opel">Lunch</option>
                        <option value="audi">Dinner</option>
                    </select></span>
                    <span>
                    <label className='label'>Preparation Time</label>
                    <input type='number' className='prep-time-input' />
                    </span>
                    <span>
                    <label className='label'>No.People</label>
                    <input type='number' className='prep-time-input' />
                    </span>
                    </div>
                    <label className='label'>Short Description</label>
                    <textarea className='descr-text'></textarea>
                    <input type="submit" value="SAVE" className='save-recipe'/>
                </div>
                <div className='right-recipe'>
                    <label className='label'>Recipe</label>
                    <textarea className='recipe-text'>
                        
                    </textarea>
                </div>    
                
            </div>
            </form>
        </div>
    )
}

export default AddRecipe;