import { setLocalStorage } from "../../Utils/LocalStorage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RELIGION_FAILURE, RELIGION_REQUEST, RELIGION_SUCCESS } from "../Constants"

let initialState = {
    registrationRequest: "",
    registerLoading: false,
    loginRequest: "",
    loginLoading: false,
    religionData: "",
    religionLoading: false,
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                registerLoading: true,
            }
        case REGISTER_SUCCESS:

            return {
                ...state,
                registerLoading: false,
                registrationRequest: action.payload,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registerLoading: false,
                registrationRequest: action.payload,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                loginLoading: true,
            }
        case LOGIN_SUCCESS:

            return {
                ...state,
                loginLoading: false,
                loginRequest: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginRequest: action.payload,
            }
        case RELIGION_REQUEST:
            return {
                ...state,
                religionLoading: true,
            }
        case RELIGION_SUCCESS:

            return {
                ...state,
                religionLoading: false,
                religionData: action.payload,
            }
        case RELIGION_FAILURE:
            return {
                ...state,
                religionLoading: false,
                religionData: action.payload,
            }

        default:
            return state
    }
}
export { AuthReducer }