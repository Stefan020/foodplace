//  inital state
const init = {
    account: []
};

//constants
const SET_ACCOUNT = 'SET_ACCOUNT';
const SAVE_ACCOUNT = 'SAVE_ACCOUNT';
const LOGIN_SUCCESS = 'LOFIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

//actions
export const setAccounts = (account) => {
    return {
        type:SET_ACCOUNT,
        payload: account
    };
};
export const saveAccount = (account) => {
    return {
        type:SAVE_ACCOUNT,
        payload: account
    };
};
// export const loginAccount = (account) => {
//     return {
//         type:LOGIN_ACCOUNT,
//         payload: account
//     }
// }
//reducer
const reducer = (state = init, action) => {
    switch(action.type){
        case SAVE_ACCOUNT:
            return{
                account: [...state.account, action.payload]
            }
        case SET_ACCOUNT:
            return{
                ...state, recipe : action.payload
            }
        // case LOGIN_SUCCESS:
        default:
            return state;
    }
}

export default reducer;
