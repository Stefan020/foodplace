import React, { useState , useEffect} from 'react';
import ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';
import picture from '../assets/images/pizza-placeholder.jpg';
import ImageUploader from './ImageUploader';

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
    useEffect(()=>{
        fetch('http://localhost:10002/api/v1/recipe/newrecipe', {

        })

    })

   
    return(
        <div className='new-recipe'>
            <div className="div-title">
            <h2 className="title">My Recipes</h2><hr className="hr-date"></hr>
           <Link to={ROUTES.MY_RECIPES}> <div className='plus'></div></Link>
            </div>
            <div className='container'>
                <form>
                    <label className='label'>Recipe Image</label>
                    {/* <div className='img-placeholder'><img src={picture} /></div> */}
                    {/* <input type='file' id='image' value={image} onChange={(e) => setImage(e.target.images[0])} className='img-input' /> */}
                    <ImageUploader
                        onImageSelectSuccess={(image) => setImage(image)}
                        onImageSelectError={({error}) => alert(error)}
                    />
                    
                </form>
            </div>
        </div>
    )
}

export default AddRecipe;