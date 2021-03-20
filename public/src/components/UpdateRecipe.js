import React, { useState , useEffect} from 'react';
import ROUTES from '../constants/routes';
import { getToken, getUser } from '../helpers/storageFunctions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import back from '../assets/images/icon_back_white.svg';
import { updateRecipe } from '../redux/ducks/recipe'
import { useParams} from 'react-router-dom';

export const UpdateRecipe = (props) => {
    const token = getToken();
    const dispatch = useDispatch();
    const {rid} = useParams()
    

    const [updateRecipeData,setUpdateRecipeData] = useState({})

    useEffect(()=>{
        fetchRecipeForUpdate()
    },[])


    const fetchRecipeForUpdate = () => {
        if(rid){
            fetch(`http://localhost:10002/api/v1/recipe/${rid}`,{
                
                method:'GET',
                headers:{
                'Authorization':`Bearer ${token}`
             },
            })
            .then(data=>{
                setUpdateRecipeData(data)
                console.log(updateRecipeData)
            }).catch(err=>console.log(err))
        }
    }

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const[image, setImage] = useState(null);
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
        reader.onerror = function() {
          bin = null
        }
      }

      

      const uploadImage =(img, token) => {
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
                updateRecipe(title, category, prep_time, num_people, description, recipe, res.filename)(dispatch)
            })
            .catch(err => {
                console.log(err);
            });
      }

    // const [updateRecipeData,setUpdateRecipeData] = useState({
    //     title:"",
    //     category:"",
    //     prep_time:"",
    //     num_people:"",
    //     description:"",
    //     recipe:"",
    //     recipe_image:""
    // })

    const {title, category, prep_time, num_people, description, recipe, recipe_image} = updateRecipeData;
    const handleUpdateRecipe = async(e) => {
        e.preventDefault()
        await uploadFile()
        props.history.push('/my-recipes');
    }


    return(
        <div className='update-recipe'>
            <div className="div-title">
            <h2 className="title">My Recipes</h2><hr className="hr-date"></hr>
           <Link to={ROUTES.MY_RECIPES}> <div className='plus'><img className='znak' src={back} alt=""/></div></Link>
            </div>
            <form onSubmit={handleUpdateRecipe} >
            <div className='container-recipe'>    
             <div className='recipe-image'>   
                <label className='label'>Recipe Image</label>
                    <img src={image} className='image-recipe'></img>
                    <input type='file' value={recipe_image} className='recipe-img-btn' onChange={(e) => convertBinaryImage(e)}></input>
                </div> 
                <div className='recipe-center'>
                    <label className='label'>Recipe Title</label>
                    <input type='text' value={title} onChange={(e) => setUpdateRecipeData({ ...updateRecipe, title: e.target.value })} className='input-recipe-title'></input>
                    <div className='center-middle'>
                   <span> <label className='label'>Category</label>
                    <select className='input-category' placeholder='Category' value={category} onChange={(e) => setUpdateRecipeData({ ...updateRecipe, category: e.target.value })}>
                        
                        <option value="breakfast">Breakfast</option>
                        <option value="brunch">Brunch</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select></span>
                    <span>
                    <label className='label'>Preparation Time</label>
                    <input type='number' className='prep-time-input' value={prep_time} onChange={(e) => setUpdateRecipeData({ ...updateRecipe, prep_time: e.target.value })}/>
                    </span>
                    <span>
                    <label className='label'>No.People</label>
                    <input type='number' className='prep-time-input' value={num_people} onChange={(e) => setUpdateRecipeData({ ...updateRecipe, num_people: e.target.value })}/>
                    </span>
                    </div>
                    <label className='label'>Short Description</label>
                    <textarea className='descr-text' value={description} onChange={(e) => setUpdateRecipeData({ ...updateRecipe, description: e.target.value })}></textarea>
                    <input type="submit" value="SAVE" className='save-recipe'/>
                </div>
                <div className='right-recipe'>
                    <label className='label'>Recipe</label>
                    <textarea className='recipe-text' value={recipe} onChange={(e) => setUpdateRecipeData({ ...updateRecipe, recipe: e.target.value })}>
                        
                    </textarea>
                </div>    
                
            </div>
            </form>
        </div>
    )
}

export default UpdateRecipe;