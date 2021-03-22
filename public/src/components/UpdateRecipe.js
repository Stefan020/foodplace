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
    let getRecipeId = ()=> {
        const pathnames = window.location.pathname.split('/');
        return pathnames[pathnames.length -1];
    }
    const rid = getRecipeId()
    // const {data} = useFetch(`http://localhost:10002/api/v1/recipe/${rid}`)
    // const {rid} = useParams();

    const [recipeData,setRecipeData] = useState({})
    const [updateRecipeData,setUpdateRecipeData] = useState({
        title:"",
        category:"",
        prep_time:"",
        num_people:"",
        description:"",
        recipe:"",
        recipe_image:""
    })
    useEffect(()=>{
        fetchRecipeForUpdate()
    },[])


    const fetchRecipeForUpdate = async() => {
        console.log(rid)
          await fetch(`http://localhost:10002/api/v1/recipe/${rid}`,{
                method:'GET',
                headers:{
                // 'Authorization':`Bearer ${token}`
                'Content-Type':'application/json'
             },
            }).then(res => 
                 res.json())
                .then(data => {
                    // setRecipeData(data)
                    setUpdateRecipeData(data)
                    // console.log(data.filename)
                }).catch(err => {
                    console.log(err)
                })
        
    }
    // console.log(recipeData.title)

//     // 
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const[image, setImage] = useState(null);
    const convertBinaryImage = (e) => {
        if(!e.target.files[0]) return;
        setUpdateRecipeData({...updateRecipeData, recipe_image: ''})
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

      

      const uploadImage = async (img, token) => {
         return fetch(`http://localhost:10003/api/v1/storage`,{
             method:'POST',
             headers:{
                'Authorization':`Bearer ${token}`
             },
             body:img
         })
     }

     
      const uploadFile = async () => {
          if(!file){
            updateRecipe(updateRecipeData)
            return;
          }
        let formData = new FormData();
        formData.append('document', file);

        uploadImage(formData, token).then(r =>  r.json()).then((res)=>{
            setFileName(res.filename);
            updateRecipe({...updateRecipeData, recipe_image:res.filename})
        })
            .catch(err => {
                console.log(err);
            });
      }
     

   const updateRecipe = async(updateRecipeData) => {
       console.log(updateRecipeData, 1)
       fetch(`http://localhost:10002/api/v1/recipe/${rid}`,{
           method:'PUT',
           headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
           },
           body:JSON.stringify(updateRecipeData)
       }).then(res => {
           if(res){
            setUpdateRecipeData(updateRecipeData)
           }
           
       }).catch(err => {
           console.log(err);
       })
   }
    // console.log(updateRecipeData)
    
    // const {title, category, prep_time, num_people, description, recipe, recipe_image} = updateRecipeData;
    const handleUpdateRecipe = async(e) => {
        e.preventDefault()
        uploadFile().then(
        props.history.push('/my-recipes'));
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
                     <img src={updateRecipeData.recipe_image ? `http://localhost:10003/api/v1/storage/${updateRecipeData.recipe_image}` : image || ''} className='image-recipe'></img> 
                    <input type='file'   className='recipe-img-btn' onChange={(e) => convertBinaryImage(e)}></input> 
                </div> 
                <div className='recipe-center'>
                    <label className='label'>Recipe Title</label>
                    <input type='text' value={updateRecipeData.title} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, title: e.target.value })} className='input-recipe-title'></input>
                    <div className='center-middle'>
                   <span> <label className='label'>Category</label>
                    <select className='input-category' placeholder='Category' value={updateRecipeData.category} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, category: e.target.value })}>
                        
                        <option value="breakfast">Breakfast</option>
                        <option value="brunch">Brunch</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select></span>
                    <span>
                    <label className='label'>Preparation Time</label>
                    <input type='number' className='prep-time-input' value={updateRecipeData.prep_time} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, prep_time: e.target.value })}/>
                    </span>
                    <span>
                    <label className='label'>No.People</label>
                    <input type='number' className='prep-time-input' value={updateRecipeData.num_people} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, num_people: e.target.value })}/>
                    </span>
                    </div>
                    <label className='label'>Short Description</label>
                    <textarea className='descr-text' value={updateRecipeData.description} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, description: e.target.value })}></textarea>
                    <input type="submit" value="SAVE" className='save-recipe'/>
                </div>
                <div className='right-recipe'>
                    <label className='label'>Recipe</label>
                    <textarea className='recipe-text' value={updateRecipeData.recipe} onChange={(e) => setUpdateRecipeData({ ...updateRecipeData, recipe: e.target.value })}>
                        
                    </textarea>
                </div>    
                
            </div>
            </form>
        </div>
    )
}

export default UpdateRecipe;