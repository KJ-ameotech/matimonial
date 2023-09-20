import axios from "axios"
import { Api } from "../../Utils/ApiUrl"
import { header } from "../../Utils/Function"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RELIGION_FAILURE, RELIGION_REQUEST, RELIGION_SUCCESS } from "../Constants"
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


