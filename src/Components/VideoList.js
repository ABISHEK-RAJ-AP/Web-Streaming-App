import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoItem key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
