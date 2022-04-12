import React from "react";

const VideoPlayer = (props) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const videoSRC = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe title="video-player" src={videoSRC} />
      </div>
      <div className="card">
        <h4>{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
