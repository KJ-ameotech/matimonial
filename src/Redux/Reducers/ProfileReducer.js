import { FRIEND_REQUEST_FAILURE, FRIEND_REQUEST_REQUEST, FRIEND_REQUEST_SUCCESS, GET_ALL_PROFILE_FAILURE, GET_ALL_PROFILE_REQUEST, GET_ALL_PROFILE_SUCCESS, GET_PROFILE_IMAGE_FAILURE, GET_PROFILE_IMAGE_REQUEST, GET_PROFILE_IMAGE_SUCCESS, GET_SEARCH_PROFILE_FAILURE, GET_SEARCH_PROFILE_REQUEST, GET_SEARCH_PROFILE_SUCCESS, PROFILE_FAILURE, PROFILE_IMAGE_USER_FAILURE, PROFILE_IMAGE_USER_REQUEST, PROFILE_IMAGE_USER_SUCCESS, PROFILE_POST_FAILURE, PROFILE_POST_REQUEST, PROFILE_POST_SUCCESS, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_USER_FAILURE, PROFILE_USER_REQUEST, PROFILE_USER_SUCCESS } from "../Constants"
let initialState = {
    profileData: "",
    profileLoading: false,
    postProfileData: "",
    profilePostDataLoading: false,
    userData: "",
    userLoading: false,
    uploadImageLoading: false,
    uploadImageRes: "",
    profileImage: "",
    profileLoading: false,
    allProfileLoading: false,
    allProfile: null,
    allSearchData: null,
    allSearchLoading: false,
    sendRequestLoading: false,
    sendRequest: null

}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
                ...state,
                registerLoading: true,
            }
        case PROFILE_SUCCESS:

            return {
                ...state,
                profileLoading: false,
                profileData: action.payload,
            }
        case PROFILE_FAILURE:
            return {
                ...state,
                profileLoading: false,
                profileData: action.payload,
            }
        case PROFILE_POST_REQUEST:
            return {
                ...state,
                profilePostDataLoading: true,
            }
        case PROFILE_POST_SUCCESS:

            return {
                ...state,
                profilePostDataLoading: false,
                postProfileData: action.payload,
            }
        case PROFILE_POST_FAILURE:
            return {
                ...state,
                profilePostDataLoading: false,
                postProfileData: action.payload,
            }

        case PROFILE_USER_REQUEST:
            return {
                ...state,
                userLoading: true,
            }
        case PROFILE_USER_SUCCESS:

            return {
                ...state,
                userLoading: false,
                userData: action.payload,
            }
        case PROFILE_USER_FAILURE:
            return {
                ...state,
                userLoading: false,
                userData: action.payload,
            }
        case PROFILE_IMAGE_USER_REQUEST:
            return {
                ...state,
                uploadImageLoading: true,
            }
        case PROFILE_IMAGE_USER_SUCCESS:

            return {
                ...state,
                uploadImageLoading: false,
                uploadImageRes: action.payload,
            }
        case PROFILE_IMAGE_USER_FAILURE:
            return {
                ...state,
                uploadImageLoading: false,
                uploadImageRes: action.payload,
            }
        case GET_PROFILE_IMAGE_REQUEST:
            return {
                ...state,
                profileLoading: true,
            }
        case GET_PROFILE_IMAGE_SUCCESS:

            return {
                ...state,
                profileLoading: false,
                profileImage: action.payload,
            }
        case GET_PROFILE_IMAGE_FAILURE:
            return {
                ...state,
                profileLoading: false,
                profileImage: action.payload,
            }
        case GET_ALL_PROFILE_REQUEST:
            return {
                ...state,
                allProfileLoading: true,
            }
        case GET_ALL_PROFILE_SUCCESS:

            return {
                ...state,
                allProfileLoading: false,
                allProfile: action.payload,
            }
        case GET_ALL_PROFILE_FAILURE:
            return {
                ...state,
                allProfileLoading: false,
                allProfile: action.payload,
            }
        case GET_SEARCH_PROFILE_REQUEST:
            return {
                ...state,
                allSearchLoading: true,
            }
        case GET_SEARCH_PROFILE_SUCCESS:

            return {
                ...state,
                allSearchLoading: false,
                allSearchData: action.payload,
            }
        case GET_SEARCH_PROFILE_FAILURE:
            return {
                ...state,
                allSearchLoading: false,
                allSearchData: action.payload,
            }
        case FRIEND_REQUEST_REQUEST:
            return {
                ...state,
                sendRequestLoading: true,
            }
        case FRIEND_REQUEST_SUCCESS:

            return {
                ...state,
                sendRequestLoading: false,
                sendRequest: action.payload,
            }
        case FRIEND_REQUEST_FAILURE:
            return {
                ...state,
                sendRequestLoading: false,
                sendRequest: action.payload,
            }
        default:
            return state
    }
}
export { ProfileReducer }