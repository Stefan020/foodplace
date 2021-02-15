import {combineReducers} from 'redux';
// reducers
import recipes from './recipe';
import accounts from './accounts';

export default combineReducers({
    recipes,
    accounts
});

