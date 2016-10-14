window.onload = function () {
    var display = document.querySelector('#clock90'),
        timer = new CountDownTimer(90),
        timeObj = CountDownTimer.parse(90);

    format(timeObj.minutes, timeObj.seconds);
    
    timer.onTick(display);
    
    document.querySelector('#start').addEventListener('click', function () {
        timer.start();
    });
    
        function restart() {
        if (this.expired()) {
            setTimeout(function () { timer.start(); }, 1000);
        }
    }
    
    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }
};