
acto1 = ducument.getElementById("acto1");
acto2 = ducument.getElementById("acto2");
audio = ducument.getElementById("audio");

function show1(){
	acto1.style.display = "block";
	audio.src = "Faure4.mp3";
	audio.load();
	audio.play();
}
function show2(){
	acto2.style.display = "block";
	audio.pause()
	audio.src = "Faure2.mp3";
	audio.load();
	audio.play();
}
