import axios from "axios"
const loadPostsRequest = () => ({ type: 'LOAD_POSTS_REQUEST' })

const loadPostsSuccess = posts => ({
    type: 'LOAD_POSTS_SUCCESS',
    payload: posts,
})

const loadPostsFailure = error => ({
    type: 'LOAD_POSTS_FAILURE',
    payload: error,
    error: true,
})
export const fetchPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return (dispatch) => {
        dispatch(loadPostsRequest())
        axios.get(url)
            .then((response) => {
                dispatch(loadPostsSuccess(response.data))
            })
            .catch((error) => {
                dispatch(loadPostsFailure(error))
            })
    }
}
