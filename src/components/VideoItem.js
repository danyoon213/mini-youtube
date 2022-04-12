import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  let date = props.video.snippet.publishedAt.split("T");
  date = date[0];

  return (
    <div className="list-group-item">
      <div
        onClick={() => props.onVideoClick(props.video)}
        className="card my-1"
      >
        <div className="row g-0">
          <div className="col-md-6">
            <img
              className="img-fluid rounded-start video-item-thumb"
              src={props.video.snippet.thumbnails.medium.url}
              alt={props.video.snippet.title}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p className="card-title">{props.video.snippet.title}</p>
              {/* <p className="card-text">{props.video.snippet.description}</p> */}
              <p className="card-text">
                <small className="text-muted">{date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
