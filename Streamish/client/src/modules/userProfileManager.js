import { getToken } from "./authManager";

const baseUrl = '/api/userprofile';

// https://localhost:5001/api/UserProfile/GetUserProfileAndVideos?id=1
export const getUserProfileAndVideos = (id) => {
    return getToken().then((token) => {
        return fetch(baseUrl + '/getuserprofileandvideos?id=' + id, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json());
    })
};