import useStar from "../../components/StarHook";

const init = {
    recipes: [],
    stars:[],
    error:""
};

const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
const FETCH_RECIPES_FAIL = 'FETCH_RECIPES_FAIL';
const STAR_RECIPE = 'STAR_RECIPE';

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
}

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
        default:
            return state;
    }
};

export default reducer;
