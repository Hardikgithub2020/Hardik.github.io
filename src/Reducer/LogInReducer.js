import * as actions from "../actions/userActions"

export const initialState={
        logIn_info :{
                        user_email : '',
                        user_password :''
                    },
        save_email:'Hardik@mail',
        save_password:"1234",
        haserror: false,
        login: false

                

}

export default function LoginReducer(state=initialState, action){
    switch(action.type){


        case actions.GET_LOGIN_SUCCESS:
            return{...state, logIn_Info:action.payload, login: true, hasErrors:false};

        case actions.GET_LOGIN_FAILURE:
            return{...state, login: false, hasErrors: true};
            
        default:
            return state;
    }
}