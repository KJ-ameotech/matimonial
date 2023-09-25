import axios from "axios"
import { Api } from "../../Utils/ApiUrl"
import { PROFILE_FAILURE, PROFILE_IMAGE_USER_FAILURE, PROFILE_IMAGE_USER_REQUEST, PROFILE_IMAGE_USER_SUCCESS, PROFILE_POST_FAILURE, PROFILE_POST_REQUEST, PROFILE_POST_SUCCESS, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_USER_FAILURE, PROFILE_USER_REQUEST, PROFILE_USER_SUCCESS } from "../Constants";
import { header } from "../../Utils/Function"

const ProfileRequest = () => ({ type: PROFILE_REQUEST })

const ProfileSuccess = data => ({
    type: PROFILE_SUCCESS,
    payload: data,
}
)

const ProfileFailure = error => ({
    type: PROFILE_FAILURE,
    payload: error,
    error: true,
})
export const getProfile = (id) => {
    return async (dispatch) => {
        dispatch(ProfileRequest())
        axios.get(Api.profile(id))
            .then((response) => {
                dispatch(ProfileSuccess(response.data))
            })
            .catch((error) => {
                dispatch(ProfileFailure(error))
            })
    }
}


const ProfilePostRequest = () => ({ type: PROFILE_POST_REQUEST })

const ProfilePostSuccess = data => ({
    type: PROFILE_POST_SUCCESS,
    payload: data,
}
)

const ProfilePostFailure = error => ({
    type: PROFILE_POST_FAILURE,
    payload: error,
    error: true,
})
export const ProfilePost = (data) => {
    return async (dispatch) => {
        dispatch(ProfilePostRequest())
        axios(Api.profilePost, header("POST", data))
            .then((response) => {
                dispatch(ProfilePostSuccess(response.data))
            })
            .catch((error) => {
                dispatch(ProfilePostFailure(error))
            })
    }
}


const userRequest = () => ({ type: PROFILE_USER_REQUEST })

const userSuccess = data => ({
    type: PROFILE_USER_SUCCESS,
    payload: data,
}
)

const userFailure = error => ({
    type: PROFILE_USER_FAILURE,
    payload: error,
    error: true,
})
export const getuser = (id) => {
    return async (dispatch) => {
        dispatch(userRequest())
        axios.get(Api.user(id))
            .then((response) => {
                dispatch(userSuccess(response.data))
            })
            .catch((error) => {
                dispatch(userFailure(error))
            })
    }
}




const profileImageRequest = () => ({ type: PROFILE_IMAGE_USER_REQUEST })

const profileImageSuccess = data => ({
    type: PROFILE_IMAGE_USER_SUCCESS,
    payload: data,
}
)

const profileImageFailure = error => ({
    type: PROFILE_IMAGE_USER_FAILURE,
    payload: error,
    error: true,
})
export const uploadProfileImage = (image) => {
    return async (dispatch) => {
        dispatch(profileImageRequest())
        const formData = new FormData();
        formData.append('image', image);
        formData.append("user", 3)
        const requestOptions = {
            method: 'POST',
            data: formData, // Use 'data' to send the FormData
            headers: {
                'Content-Type': 'multipart/form-data', // Set the correct content type
            },
        };
        axios.post(Api.profileImage, formData, requestOptions)
            .then((response) => {
                dispatch(profileImageSuccess(response.data))
            })
            .catch((error) => {
                dispatch(profileImageFailure(error))
            })
    }
}



