import React, { useState, useEffect } from 'react';
import { addVideo } from "../modules/videoManager";

const VideoForm = ({ getVideos }) => {

    const [video, setVideo] = useState({
        title: "",
        description: "",
        url: "",
    });

    const [isLoading, setIsLoading] = useState(true);

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newVideo = { ...video }
        let selectedVal = event.target.value

        newVideo[event.target.id] = selectedVal
        // update state
        setVideo(newVideo);
    }

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const handleClickAddVideo = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        if (video.title === "" || video.url == "") {
            window.alert("Video title and url cannot be blank")
        } else {
            // using addVideo invoke the API to store new video to DB.
            // once complete, refresh the list to display the added video.
            setIsLoading(true);
            addVideo(video)
                .then(() => {
                    console.log("Video added");
                    getVideos();
                });
        }
    }

    return (
        <form className="videoForm col-sm-6">
            <h2 className="videoForm__title">New Video</h2>
            <fieldset>
                <div className="form-group mb-2">
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Video title" value={video.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group mb-2">
                    <input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Video Description" value={video.description} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group mb-2">
                    <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Video url" value={video.url} />
                </div>
            </fieldset>
            <button type="button" className="btn btn-primary"
                disabled={isLoading}
                onClick={handleClickAddVideo}>
                Add Video
            </button>
        </form>
    )
};

export default VideoForm;