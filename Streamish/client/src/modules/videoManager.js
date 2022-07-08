const baseUrl = '/api/video';

export const getAllVideos = () => {
    return fetch(baseUrl + '/getwithcomments')
        .then((res) => res.json())
};

// https://localhost:5001/api/Video/GetVideoAndComments?id=1
export const getVideoAndComments = (id) => {
    // return fetch(`${baseUrl}/${id}`).then((res) => res.json());

    return fetch(baseUrl + '/getvideoandcomments?id=' + id)
        .then((res) => res.json())
};

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};

export const searchAllVideos = (criterion, sortDescending) => {
    return fetch(baseUrl + '/search?q=' + criterion + '&sortDesc=' + sortDescending)
        .then((res) => res.json())
};
