import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div className="list-group-item">
      <div onClick={() => props.onVideoClick(props.video)} className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={props.video.snippet.thumbnails.medium.url}
              alt={props.video.snippet.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.video.snippet.title}</h5>
              <p className="card-text">{props.video.snippet.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  {props.video.snippet.publishedAt}
                </small>
              </p>
            </div>
          </div>
        </div>
        {/* <img src={props.video.snippet.thumbnails.medium.url} /> */}
        {/* <div className="card-title">{props.video.snippet.title}</div> */}
      </div>
    </div>
  );
};

export default VideoItem;
