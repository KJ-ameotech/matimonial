let baseUrl = "http://127.0.0.1:8000"
// const socket = io('http://your-server-url');
export const Api = {
    register: `${baseUrl}/register/`,
    login: `${baseUrl}/login/`,
    forgetPassword: `${baseUrl}/forget-password/`,
    religions: `${baseUrl}/religions/`,
    community: (id) => `${baseUrl}/community/${id}/religions/`,
    profile: (id) => `${baseUrl}/profiles/${id}/`,
    profilePost: `${baseUrl}/profiles/`,
    user: (id) => `${baseUrl}/api/user/${id}/`,
    profileImage: `${baseUrl}/profiles_picture/`,
    getProfile: (id) => `${baseUrl}/profiles_picture/${id}`,
    allProfile: `${baseUrl}/profiles/`,
    searchProfile: (quary) => `${baseUrl}/search/${quary}`,
    sendFriendRequest: `${baseUrl}/like/`,
}
