import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

const server = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

var searchYouTube = (query, callback) => {
  // TODO
  // searchYouTube(YOUTUBE_API_KEY, cb);
  // searchYouTube('asdfasdfasdf', cb);
  $.ajax({
    url: server,
    type: 'GET',
    data: { q: query, youtube_api_key: YOUTUBE_API_KEY },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('recast.ly: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;
