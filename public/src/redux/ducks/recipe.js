//inital state
const init = {
    recipe: []
};

//constants
const SET_RECIPES = 'SET_RECIPE';
const SAVE_RECIPE = 'SAVE_RECIPE';
 
//actions
export const setRecipes = (recipes) => {
    return {
        type:SET_RECIPES,
        payload: recipes
    };
};

export const saveRecipe = (recipe) => {
    return {
        type:SAVE_RECIPE,
        payload: recipe
    };
};

//reducer
const reducer = (state = init, action) => {
    switch(action.type){
        case SET_RECIPES:
            return{
                ...state, recipes: action.payload
            }
        case SAVE_RECIPE:
            return{
                ...state, recipes: [...state.recipes, action.payload]
            }        
        default:
            return state;    

    };
};

export default reducer;
// import * as api from '../../api/index';
// //initial state
// const init = {
//         recipe: []
//     };

// //constants
// const FETCH_NEW_RECIPES = 'FETCH_NEW_RECIPES'

// //actions
// export const getByPubDate = () => async (dispatch) => {
//     try {
//         const {data} = await api.fetchNewRecipes();
//         dispatch({type:FETCH_NEW_RECIPES, payload:data});
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// //reducer
// const reducer = (state=init,action) => {
//     switch(action.type) {
//         case FETCH_NEW_RECIPES:
//             return action.payload
//             default:
//                 return state;
//     };
// };

// export default reducer;