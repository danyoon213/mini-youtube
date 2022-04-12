import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const videoSRC = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe className="video-player" title="video-player" src={videoSRC} />
      </div>
      <div className="card video-player-description">
        <h4>{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
        <p>Channel: {props.video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
