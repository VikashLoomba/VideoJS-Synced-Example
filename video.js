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
	if (Math.abs(myPlayers[0].currentTime() - myPlayers[1].currentTime()) > 0.500) {
		myPlayers[1].currentTime(myPlayers[0].currentTime());
	}
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

});




