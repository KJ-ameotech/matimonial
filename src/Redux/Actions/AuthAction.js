import axios from "axios"
import { Api } from "../../Utils/ApiUrl"
import { header } from "../../Utils/Function"
import { COMMUNITIES_FAILURE, COMMUNITIES_REQUEST, COMMUNITIES_SUCCESS, FORGOTPASSWORD_FAILURE, FORGOTPASSWORD_REQUEST, FORGOTPASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RELIGION_FAILURE, RELIGION_REQUEST, RELIGION_SUCCESS } from "../Constants"
const registerRequest = () => ({ type: REGISTER_REQUEST })

const registerSuccess = posts => ({
    type: REGISTER_SUCCESS,
    payload: posts,
})

const registerFailure = error => ({
    type: REGISTER_FAILURE,
    payload: error,
    error: true,
})



export const registerUser = (register) => {

    return async (dispatch) => {
        dispatch(registerRequest())
        axios(Api.register, header("POST", register))
            .then((response) => {
                dispatch(registerSuccess(response.data))
            })
            .catch((error) => {
                dispatch(registerFailure(error))
            })
    }
}


const loginRequest = () => ({ type: LOGIN_REQUEST })

const loginSuccess = posts => ({
    type: LOGIN_SUCCESS,
    payload: posts,
})

const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: error,
    error: true,
})
export const loginUser = (user) => {
    return async (dispatch) => {
        dispatch(loginRequest())
        axios(Api.login, header("POST", user))
            .then((response) => {
                dispatch(loginSuccess(response.data))
            })
            .catch((error) => {
                dispatch(loginFailure(error))
            })
    }
}


const forgetPasswordRequest = () => ({ type: FORGOTPASSWORD_REQUEST })

const forgetPasswordSuccess = response => ({
    type: FORGOTPASSWORD_SUCCESS,
    payload: response,
})

const forgetPasswordFailure = error => ({
    type: FORGOTPASSWORD_FAILURE,
    payload: error,
    error: true,
})
export const forgetPassword = (email) => {
    console.log(Api, "ApiApiApi");
    return async (dispatch) => {
        dispatch(forgetPasswordRequest())
        axios(Api.forgetPassword, header("POST", email))
            .then((response) => {
                dispatch(forgetPasswordSuccess(response.data))
            })
            .catch((error) => {
                dispatch(forgetPasswordFailure(error))
            })
    }
}

const religionsRequest = () => ({ type: RELIGION_REQUEST })

const religionsSuccess = data => ({
    type: RELIGION_SUCCESS,
    payload: data,
}
)

const religionsFailure = error => ({
    type: RELIGION_FAILURE,
    payload: error,
    error: true,
})
export const getReligion = () => {
    return async (dispatch) => {
        dispatch(religionsRequest())
        axios.get(Api.religions)
            .then((response) => {
                dispatch(religionsSuccess(response.data))
            })
            .catch((error) => {
                dispatch(religionsFailure(error))
            })
    }
}



const communitiesRequest = () => ({ type: COMMUNITIES_REQUEST })

const communitiesSuccess = data => ({
    type: COMMUNITIES_SUCCESS,
    payload: data,
}
)

const communitiesFailure = error => ({
    type: COMMUNITIES_FAILURE,
    payload: error,
    error: true,
})
export const getCommunities = (id) => {
    return async (dispatch) => {
        dispatch(communitiesRequest())
        axios.get(Api.community(id))
            .then((response) => {
                dispatch(communitiesSuccess(response.data))
            })
            .catch((error) => {
                dispatch(communitiesFailure(error))
            })
    }
}


