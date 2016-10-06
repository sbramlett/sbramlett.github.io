// Create timer = countdowntimer.js by robbmj
function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
}

CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    diff = that.duration - (((Date.now() - start) / 1000) | 0);
    
    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};


// Call the timers
window.onload = function () {
    var display1 = document.querySelector('#time1'),
        display2 = document.querySelector('#time2'),
        display3 = document.querySelector('#time3'),
        display4 = document.querySelector('#time4'),
        timer1 = new CountDownTimer(30),
        timer2 = new CountDownTimer(60),
        timer3 = new CountDownTimer(90),
        timer4 = new CountDownTimer(120);

    timer1.onTick(format(display1)).onTick(restart).start();
    timer2.onTick(format(display2)).onTick(restart).start();
    timer3.onTick(format(display3)).onTick(restart).start();
    timer4.onTick(format(display4)).onTick(restart).start();

    function restart() {
        if (this.expired()) {
            setTimeout(function () { timer1.start(); }, 1000);
        }
    }

    function format(display) {
        return function (minutes, seconds) {
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ':' + seconds;
        };
    }
};