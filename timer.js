var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var minsLeft = document.getElementById("mins-left");
var secsLeft = document.getElementById("secs-left");
var begin = setInterval(countdown, 1000); // Call countdown function every 1000 milliseconds

var startTimer = function(){
	console.log("Start");
	startButton.disabled=true;
};

var resetTimer = function(){
	console.log("Reset");
	window.clearInterval(begin); // clear the timer and stop the clock
	secsLeft.innerText=00;
	minsLeft.innerText=document.getElementById("mins").innerText;
	startButton.disabled=false;
};

// This is what makes the clock tick downwards
var countdown = function(){
	console.log("countdown");
	if(secsLeft.innerText<=0){
		secsLeft.innerText=60;
		minsLeft.innerText--;		
	}
	secsLeft.innerText--;
	
	if(secsLeft.innerText<=0 && minsLeft.innerText<=0){
		window.clearInterval(begin);
	}
};