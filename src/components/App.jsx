import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

// import { useState } from 'react';

var App = () => {

  // const [currentVideo, setCurrentVideo] = React.useState(exampleVideoData[0]);
  // const [videos, setVideos] = React.useState(exampleVideoData);
  const [currentVideo, setCurrentVideo] = React.useState(exampleVideoData[0]);
  const [videos, setVideos] = React.useState([]);

  const {useEffect} = React;
  // useEffect()

  // useEffect(() => {
  //   setVideos(searchYouTube({...}))
  // }, [videos]);

  const onVideoClick = (video) => {
    console.log('clicked: ', video);
    setCurrentVideo(video);
  }

  const onSearchSubmit = (query) => {
    // console.log(query);
    searchYouTube(query, (data) => {
      setVideos(data)
      console.log(videos);
    });
    
  }

  // breaks tests currentVideo -> exampleVideoData[0]
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          < Search onSubmit={onSearchSubmit} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          < VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          < VideoList onClick={onVideoClick} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

/*

*/