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
	sync();
	myPlayers[1].pause();
}

myPlayers[0].on('play', function(){
	playVideo();
});
myPlayers[0].on('pause', function(){
	pauseVideo();
});
myPlayers[0].on('seeked', function(){
	sync();
});




