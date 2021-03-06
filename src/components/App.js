import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("cats");
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
      <div className="containerMain">
        <SearchBar className="searchbar" onSearchSubmit={this.onSearchSubmit} />

        <div>
          <VideoPlayer
            className="video-player"
            video={this.state.selectedVideo}
          />
        </div>

        <div className="video-list">
          <VideoList
            onVideoClick={this.onVideoClick}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
