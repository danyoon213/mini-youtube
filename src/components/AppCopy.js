import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("react js");
  }

  onSearchSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoClick = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />

        <div className="row mt-3">
          <div className="col-8">
            <VideoPlayer
              className="video-player"
              video={this.state.selectedVideo}
            />
          </div>

          <div className="col-4">
            <VideoList
              onVideoClick={this.onVideoClick}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
