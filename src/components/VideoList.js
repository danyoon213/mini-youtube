import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const videolist = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoClick={props.onVideoClick}
        video={video}
      />
    );
  });

  return <div className="list-group">{videolist}</div>;
};

export default VideoList;
