import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Video = ({ video }) => {
    return (
        <Card className="mt-2">
            {video.userProfile &&
                <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
            }
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <Link to={`/videos/${video.id}`}>
                    <strong>{video.title}</strong>
                </Link>
                <p>{video.description}</p>
                <div>
                    {video.comments && video.comments.map((comment) => (
                        <p key={comment.id}>Comment Text: {comment.message} </p>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default Video;