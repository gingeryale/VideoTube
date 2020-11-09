import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import yt from '../api/yt';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onQuerySubmit('forest');
  }, []);

  const onQuerySubmit = async (term) => {
    const res = await yt.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0])
  }


  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }


  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onQuerySubmit} />
      <p>Search returned {videos.length} videos</p>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  )

}



export default App;

