//inital state
const init = {
    account: []
};

//constants
const SET_ACCOUNT = 'SET_ACCOUNT';
const SAVE_ACCOUNT = 'SAVE_ACCOUNT';

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

//reducer
const reducer = (state = init, action) => {
    switch(action.type){
        case SAVE_ACCOUNT:
            return{
                ...state, account: [...state.accounts, action.payload]
            }
        case SET_ACCOUNT:
            return{
                ...state, recipe : action.payload
            }
        default:
            return state;
    }
}

export default reducer;