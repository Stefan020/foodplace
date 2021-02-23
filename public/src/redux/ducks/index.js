import {combineReducers} from 'redux';
// reducers
import recipes from './recipe';
import auth from './auth';

export default combineReducers({
    recipes,
    auth
});

