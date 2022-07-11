import { getToken } from "./authManager";

const baseUrl = '/api/video';

export const getAllVideos = () => {
    return getToken().then((token) => {
        return fetch(baseUrl + '/getwithcomments', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json());
    });
};

// https://localhost:5001/api/Video/GetVideoAndComments?id=1
export const getVideoAndComments = (id) => {
    // return fetch(`${baseUrl}/${id}`).then((res) => res.json());
    return getToken().then((token) => {
        return fetch(baseUrl + '/getvideoandcomments?id=' + id, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
    });
};

export const addVideo = (video) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(video),
        });
    });
};

export const searchAllVideos = (criterion, sortDescending) => {
    return getToken().then((token) => {
        return fetch(baseUrl + '/search?q=' + criterion + '&sortDesc=' + sortDescending, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
    });
};
