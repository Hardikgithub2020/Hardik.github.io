import * as actions from "../actions/userActions"

export const initialState={
    userInfo : {user_firstName : '',
    user_lastName :'Resident',
    user_email : 'fakr@email',
    user_phoneNumber:'000-000-0000',
    user_message :'Welcome'},            
    registration: false,
    hasErrors: false
}

export default function userReducer(state=initialState, action){
    switch(action.type){


        case actions.GET_REGISTRATION_SUCCESS:
            console.log(action.payload);
            return{...state, userInfo:action.payload, registration: true, hasErrors:false};

        case actions.GET_REGISTRATION_FAILURE:
            return{...state, registration: false, hasErrors: true};
            
        default:
            return state;
    }
}