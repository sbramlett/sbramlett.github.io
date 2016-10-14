var startButton = $("#start"),
    resetButton = $("#reset"),
    minsLeft = $("#mins-left"),
    secsLeft = $("#secs-left"),
    //begin = setInterval(countdown, 1000); // Call countdown function every 1000 milliseconds

// This is what makes the clock tick downwards
function countdown(){
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

function startTimer(){
	console.log("Start");
	startButton.disabled=true;
};

function resetTimer(){
	console.log("Reset");
	window.clearInterval(begin); // clear the timer and stop the clock
	secsLeft.innerText=00;
	minsLeft.innerText=document.getElementById("mins").innerText;
	startButton.disabled=false;
};
