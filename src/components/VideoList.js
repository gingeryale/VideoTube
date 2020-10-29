import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    // props.videos
    const renderedList = videos.map((vid) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={vid.id.videoId} videoItem={vid} />
    })
    return (
        <div>
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        </div>
    )
}

export default VideoList;