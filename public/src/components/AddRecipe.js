import React, { useState , useEffect} from 'react';
import ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';
import picture from '../assets/images/pizza-placeholder.jpg';
import back from '../assets/images/icon_back_white.svg';
import '../assets/AddRecipe.css';
import { getToken, getUser } from '../helpers/storageFunctions';
import { saveRecipe } from '../redux/ducks/recipe';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const AddRecipe = (props) => {
    const token = getToken();
    const user = getUser();
    const dispatch = useDispatch();
    let history = useHistory();

    
    const [file, setFile] = useState(null);
    const[image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');
    
    const convertBinaryImage = (e) => {
        setFile(e.target.files[0])
        // console.log(file)
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
    
        let bin = null
    
        reader.onload = function() {
          bin = reader.result
          setImage(bin);
        }
        // console.log(file)
        
        reader.onerror = function() {
          bin = null
        }
        // uploadFile().then(r=>r)
      }

     const uploadImage =(img, token) => {
        // for(let key of img.entries()){
        //     console.log(key)
        //     console.log(key[0], key[1])
        // }
         return fetch(`http://localhost:10003/api/v1/storage`,{
             method:'POST',
             headers:{

                'Authorization':`Bearer ${token}`
             },
             body:img
         }).then(res => {
             return res.json();
         }).catch(err => {
             console.log(err);
         })
     }

     
      const uploadFile = async () => {
        let formData = new FormData();
        formData.append('document', file);
        await uploadImage(formData, token)
            .then(res => {
                setFileName(res.filename);
                saveRecipe(title, category, prep_time, num_people, description, recipe, res.filename)(dispatch)
            })
            .catch(err => {
                console.log(err);
            });
      }
      
      const[newRecipe,setNewRecipe] = useState({
        title:"",
        category:"breakfast",
        prep_time:"",
        num_people:"",
        description:"",
        recipe:"",
        recipe_image:fileName
    })
    
    const {title, category, prep_time, num_people, description, recipe, recipe_image} = newRecipe;
    const handleSaveRecipe = async(e) => {
      e.preventDefault()
      await uploadFile()
      props.history.push('/my-recipes')
    }
   
    return(
        <div className='new-recipe'>
            <div className="div-title">
            <h2 className="title">My Recipes</h2><hr className="hr-date"></hr>
           <Link to={ROUTES.MY_RECIPES}> <div className='plus'><img className='znak' src={back} alt=""/></div></Link>
            </div>
            <form onSubmit={handleSaveRecipe} >
            <div className='container-recipe'>    
             <div className='recipe-image'>   
                <label className='label'>Recipe Image</label>
                    <img src={image} className='image-recipe'></img>
                    <input type='file' value={recipe_image} className='recipe-img-btn' onChange={(e) => convertBinaryImage(e)}></input>
                </div> 
                <div className='recipe-center'>
                    <label className='label'>Recipe Title</label>
                    <input type='text' value={title} onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })} className='input-recipe-title'></input>
                    <div className='center-middle'>
                   <span> <label className='label'>Category</label>
                    <select className='input-category' placeholder='Category' value={category} onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}>
                        
                        <option value="breakfast">Breakfast</option>
                        <option value="brunch">Brunch</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select></span>
                    <span>
                    <label className='label'>Preparation Time</label>
                    <input type='number' className='prep-time-input' value={prep_time} onChange={(e) => setNewRecipe({ ...newRecipe, prep_time: e.target.value })}/>
                    </span>
                    <span>
                    <label className='label'>No.People</label>
                    <input type='number' className='prep-time-input' value={num_people} onChange={(e) => setNewRecipe({ ...newRecipe, num_people: e.target.value })}/>
                    </span>
                    </div>
                    <label className='label'>Short Description</label>
                    <textarea className='descr-text' value={description} onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}></textarea>
                    <input type="submit" value="SAVE" className='save-recipe'/>
                </div>
                <div className='right-recipe'>
                    <label className='label'>Recipe</label>
                    <textarea className='recipe-text' value={recipe} onChange={(e) => setNewRecipe({ ...newRecipe, recipe: e.target.value })}>
                        
                    </textarea>
                </div>    
                
            </div>
            </form>
        </div>
    )
}

export default AddRecipe;