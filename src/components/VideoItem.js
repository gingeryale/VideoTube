import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videoItem }) => {
    return (
        <div className="item video-item">
            <img className="ui image" src={videoItem.snippet.thumbnails.medium.url} alt="videoItem.snippet.description" />
            <div className="content">
                <h3 className="header">{videoItem.snippet.title}</h3>
            </div>
        </div>
    )
}

export default VideoItem;