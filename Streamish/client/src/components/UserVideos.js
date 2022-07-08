import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from './Video';
import { getUserProfileAndVideos } from "../modules/userProfileManager";

const UserVideos = () => {
    const [userProfile, setUserProfile] = useState([]);
    const { id } = useParams();

    const getUserVideos = () => {
        getUserProfileAndVideos(id).then(userProfileFromAPI => {

            setUserProfile(userProfileFromAPI)
        });
    };

    useEffect(() => {
        getUserVideos();
    }, []);

    return (
        <div className="container">
            <h2>User Videos</h2>
            <div className="row justify-content-center">
                {userProfile && userProfile.videos?.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    );
};

export default UserVideos;