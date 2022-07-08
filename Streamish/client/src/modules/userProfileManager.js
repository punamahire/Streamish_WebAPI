const baseUrl = '/api/userprofile';

// https://localhost:5001/api/UserProfile/GetUserProfileAndVideos?id=1
export const getUserProfileAndVideos = (id) => {
    return fetch(baseUrl + '/getuserprofileandvideos?id=' + id)
        .then((res) => res.json())
};