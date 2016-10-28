import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div><img src="http://jnuneswebdesigner.16mb.com/gallery_gen/3b733c0f8804078bfb3fe247095f259f_180x180.gif" /></div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}>
        </iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
