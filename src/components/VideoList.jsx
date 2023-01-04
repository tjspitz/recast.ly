import VideoListEntry from './VideoListEntry.js';

// MAP AN ARRAY OF VIDEO OBJECTS
var VideoList = ({onClick, videos}) => (
  <div className="video-list">
    {videos.map((video) => {
      return (
        <VideoListEntry onClick={onClick} video={video} />
        )
      })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

/*
{groceryItems.map(item => {
  return (
    <GroceryListItem item={item} />
    )
  })}
  */

  // props = exampleVideoData
  // const videos = props.videos;
  // console.log('all videos: ', videos);
  // console.log('onClick', props.onClick);