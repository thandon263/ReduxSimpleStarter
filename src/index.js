import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_file';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyAGJ7px9DKg3XRfksOp8dOlP7X2k_Fbnms';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos:  [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'hummer h3'}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
       });
    });

  }

  render() {
      return (
        <div>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos} />
        </div>
     );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));
