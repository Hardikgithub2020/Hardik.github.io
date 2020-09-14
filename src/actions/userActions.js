export const GET_REGISTRATION_SUCCESS ='GET_REGISTRATION_SUCCESS';
export const GET_REGISTRATION_FAILURE ='GET_REGISTRATION_FAILURE';


export const getRegistrationSuccess = (userInfo) =>({
    type : GET_REGISTRATION_SUCCESS,
    payload: userInfo,
})

export const getRegistrationFailure = () =>({
    type : GET_REGISTRATION_FAILURE
})