import axios from "axios";
import {getUser, getToken} from '../../helpers/storageFunctions';

const init = {
    recipes: [],
    stars:[],
    error:"",
};

const SAVE_RECIPE = 'SAVE_RECIPE';
const UPDATE_RECIPE ='UPDATE_RECIPE';
const token = getToken();


export const saveRecipe = (title, category, prep_time, num_people, description, recipe, recipe_image) =>async(dispatch) => {
    const config = {
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const body = {title, category, prep_time, num_people, description, recipe,recipe_image}
    console.log(body)
   try {
       const response = await axios.post('http://localhost:10002/api/v1/recipe', body, config)

       dispatch({
           type:SAVE_RECIPE,
           payload:response
       })
    } catch (error) {
       console.log(error);
   }
};

export const updateRecipe = (title, category, prep_time, num_people, description, recipe, recipe_image) =>async(dispatch) => {
    const config = {
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const body = {title, category, prep_time, num_people, description, recipe,recipe_image}
    console.log(body)
   try {
       const response = await axios.put('http://localhost:10002/api/v1/recipe', body, config)

       dispatch({
           type:SAVE_RECIPE,
           payload:response
       })
    } catch (error) {
       console.log(error);
   }
};

const reducer = (state=init, action) => {
    switch(action.type){
        case SAVE_RECIPE:
            return{
                ...state,
                recipe:action.payload
            }
        case UPDATE_RECIPE:
            return {
                ...state,
                recipe:action.payload
            }
        default:
            return state;
    }
};

export default reducer;
