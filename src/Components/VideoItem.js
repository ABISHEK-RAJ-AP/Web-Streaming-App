import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      <img src={video.thumbnail} alt={video.title} />
      <div>
        <h3>{video.title}</h3>
        <p>Duration: {video.duration}</p>
        <p>Views: {video.views}</p>
      </div>
    </div>
  );
};

export default VideoItem;
