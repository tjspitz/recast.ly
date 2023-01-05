import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

var App = ({search}) => {

  const [currentVideo, setCurrentVideo] = React.useState(null);
  const [videos, setVideos] = React.useState([]);

  const {useEffect} = React;
  var timer;

  useEffect(() => {
    search('spaghetti', (data) => {
      setCurrentVideo(data[0]);
      setVideos(data);
    });
  }, []);

  const onVideoClick = (video) => {
    console.log('clicked: ', video);
    setCurrentVideo(video);
  }

  const onSearchChange = (query) => {
    clearTimeout(timer);
    timer = setTimeout( () => {
      search(query, (data) => {
        setCurrentVideo(data[0]);
        setVideos(data)
      });
    }, 500);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          < Search onChange={onSearchChange} />
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
