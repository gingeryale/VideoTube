import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    // props.videos
    const renderedList = videos.map((vid) => {
        return <VideoItem key={vid.id.videoId} videoItem={vid} />
    })
    return (
        <div>
            <p>{videos.length}</p>
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        </div>
    )
}

export default VideoList;