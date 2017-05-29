var YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAVCXaAkJxheclwY91Cougu0pHJkCVUFlg'

var RESULT_HTML_TEMPLATE = (
  '<div>' +
    '<h2>' +
    '<a class="js-result-name" href="" target="_blank"></a> by <a class="js-user-name" href="" target="_blank"></a></h2>' +
    '<img src = "" class = "thumbnail">' +
  '</div>'
);

var YOUTUBE_JSON_STRING = 'items[i].snippet.thumbnails.default.url'
var userSearch;

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
  console.log(userSearch);
}

function renderData(data){
  for(var i = 0; i < data.items.length; i++){
    console.log(data.items[i].snippet.thumbnails.high.url)
    console.log(data.items[i].id.videoId)
    displayLinks(data.items[i].id.videoId, data.items[i].snippet.thumbnails.high.url);
  }
}

function displayLinks(links, imgSrc) {
  $('#search-container').append('<a href="https://www.youtube.com/watch?v='+links+'"> <img src ="' + imgSrc + '" class= "image-holder"> </a>')
}

function displayThumbnails(thumbnail) {
  $('.image-holder').attr('src', thumbnail)
}

function submitUserInput () {
  $('#search-button').on('click', function(event){
    userSearch = $("input[type=text]").val()
    getDataFromApi(userSearch, renderData);
    $("input[type=text]").val('');
  });
}

submitUserInput();