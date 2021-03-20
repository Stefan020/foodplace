import axios from "axios";
import {getUser, getToken} from '../../helpers/storageFunctions';

const init = {
    recipes: [],
    stars:[],
    error:"",
};

const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
const FETCH_RECIPES_FAIL = 'FETCH_RECIPES_FAIL';
const STAR_RECIPE = 'STAR_RECIPE';
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
}

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
}
    
export const fetchRecipesSuccess = (recipes) => {
    return {
        type:FETCH_RECIPES_SUCCESS,
        payload:recipes
    }
};

export const fetchRecipesFail = (error) => {
    return {
        type:FETCH_RECIPES_FAIL,
        payload:error
    }
};

export const starRecipe =(recipes) => {
    return {
        type:STAR_RECIPE,
        payload:recipes
    }
};

const reducer = (state=init, action) => {
    switch(action.type){
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes:action.payload
            }
        case FETCH_RECIPES_FAIL:
            return {
                ...state,
                error:action.payload
            }
        case STAR_RECIPE:
            return{
                ...state,
                recipes:action.payload
            }
        case SAVE_RECIPE:
            return{
                ...state,
                recipe:action.payload
            }
        case SAVE_RECIPE:
            return{
                ...state,
                recipe:action.payload
            }
        default:
            return state;
    }
};

export default reducer;
