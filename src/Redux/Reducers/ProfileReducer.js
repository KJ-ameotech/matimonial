import { PROFILE_FAILURE, PROFILE_IMAGE_USER_FAILURE, PROFILE_IMAGE_USER_REQUEST, PROFILE_IMAGE_USER_SUCCESS, PROFILE_POST_FAILURE, PROFILE_POST_REQUEST, PROFILE_POST_SUCCESS, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_USER_FAILURE, PROFILE_USER_REQUEST, PROFILE_USER_SUCCESS } from "../Constants"
let initialState = {
    profileData: "",
    profileLoading: false,
    postProfileData: "",
    profilePostDataLoading: false.valueOf,
    userData: "",
    userLoading: false,
    uploadImageLoading: false,
    uploadImageRes: ""

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

        default:
            return state
    }
}
export { ProfileReducer }