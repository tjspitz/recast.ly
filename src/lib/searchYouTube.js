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
    data: { q: query },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('recast.ly: Failed to fetch videos', error);
      // if (error === whatever error is for too many requests)
      //   searchYouTubeAgain(query, callback)
    }
  });
};

var searchYouTubeAgain = (query, callback) => {
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
}

export default searchYouTube;


/*
var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // Send a request to the Parse API to save the message
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      },
    });
  },

  // GET request via $.ajax
  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
*/