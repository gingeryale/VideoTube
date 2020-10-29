import React from 'react';
import SearchBar from './SearchBar';
import yt from '../api/yt';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component {

  state = { videos: [], selctedVideo: null }

  onQuerySubmit = async (term) => {
    const res = await yt.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: res.data.items,
      selctedVideo: res.data.items[0]
    });
  }

  onVideoSelect = (videoItem) => {
    this.setState({ selctedVideo: videoItem })
    console.log(this.state.selctedVideo)
  }

  componentDidMount() {
    this.onQuerySubmit('ponies');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onQuerySubmit} />
        <p>Search returned {this.state.videos.length} videos</p>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selctedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

