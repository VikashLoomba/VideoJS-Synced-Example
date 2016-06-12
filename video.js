var myPlayers = Array(videojs('video_1'), videojs('video_2'));

myPlayers[0].ready(function(){
	myPlayers[0].currentTime(0);
	myPlayers[0].preload(true);
});

myPlayers[1].ready(function(){
	myPlayers[1].currentTime(0);
	myPlayers[1].preload(true);
	console.log('Second video is preloading');
	myPlayers[1].controls(false);
});

function sync() {
	myPlayers[1].currentTime(myPlayers[0].currentTime())
}
function playVideo() {
	myPlayers[1].play();
}
function pauseVideo() {
	myPlayers[1].pause();
	sync();
}

myPlayers[0].on('play', function(){
	playVideo();
});
myPlayers[0].on('pause', function(){
	pauseVideo();
});
myPlayers[0].on('seeking', function(){
	sync();
});
myPlayers[0].on('error',  function (e) {
   switch (e.target.error.code) {
     case e.target.error.MEDIA_ERR_ABORTED:
       alert('You aborted the video playback.');
       break;
     case e.target.error.MEDIA_ERR_NETWORK:
       alert('A network error caused the video download to fail part-way.');
       break;
     case e.target.error.MEDIA_ERR_DECODE:
       alert('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.');
       break;
     case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
       alert('The video could not be loaded, either because the server or network failed or because the format is not supported.');
       break;
     default:
       alert('An unknown error occurred.');
       break;
   }
});




