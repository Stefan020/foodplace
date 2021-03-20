// const init = {
//     user: [],
//     error:""
// };

// const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
// const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

// export const fetchUserSuccess = (user) => {
//     return {
//         type:FETCH_USER_SUCCESS,
//         payload:user
//     }
// };

// export const fetchUserFail = (error) => {
//     return {
//         type:FETCH_USER_FAIL,
//         payload:error
//     }
// };

// export const fetchUserRequest = (token) => {
//     console.log(token)
//     return dispatch => {
//         fetch('/api/v1/auth/user/'+ token)
//         .then(res=>res.json())
//         .then(res => {
//             if(res.error){
//                 throw(res.error);
//             }
//             dispatch(fetchUserSuccess(res.user))
//             return res.user
//         })
//         .catch(err=>{
//             dispatch(fetchUserFail(err))
//         })
//     }
// };

// const reducer = (state=init, action) => {
//     switch(action.type){
//         case FETCH_USER_SUCCESS:
//             return {
//                 ...state,
//                 user:action.payload
//             }
//         case FETCH_USER_FAIL:
//             return {
//                 ...state,
//                 error:action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default reducer;
