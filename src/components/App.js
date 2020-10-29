import React from 'react';
import SearchBar from './SearchBar';
import yt from '../api/yt';
import VideoList from './VideoList';
import './App.css';

class App extends React.Component {

  state = { videos: [] }

  onQuerySubmit = async (term) => {
    const res = await yt.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: res.data.items });
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onQuerySubmit} />
        <p>Search returned {this.state.videos.length} videos</p>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;

