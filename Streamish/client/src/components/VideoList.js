import React, { useEffect, useState } from "react";
import Video from './Video';
import VideoForm from './VideoForm';
import { getAllVideos, searchAllVideos } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [wordsToSearch, setWordsToSearch] = useState("");

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    // update component state with the search input user entered
    const handleSearchInput = (event) => {

        let inputString = event.target.value;
        setWordsToSearch(inputString);
    }

    // search the videos for the words entered
    const searchVideos = () => {

        searchAllVideos(wordsToSearch, false).then(videos => {
            setVideos(videos);
        });

        // The user should see what words he searched for. So, do not update the
        // state here for wordsToSearch as it will clear the search field.
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="container">
            <div className="mb-5 mt-3">
                <input className="justify-content-center" type="text"
                    name="search" id="search" placeholder="search videos"
                    onChange={(e) => handleSearchInput(e)} value={wordsToSearch}
                    required autoFocus /> &nbsp;
                <button className="btn btn-success" type="submit"
                    onClick={() => searchVideos()}>Search</button>
            </div>

            <div className="mb-5">
                <VideoForm getVideos={getVideos} />
            </div>

            <h2>Videos</h2>
            <div className="row justify-content-center">
                {videos && videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    );
};

export default VideoList;