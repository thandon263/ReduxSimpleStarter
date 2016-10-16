import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_file';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAGJ7px9DKg3XRfksOp8dOlP7X2k_Fbnms';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos:  [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });

  }

  render() {
      return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>
     );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));
