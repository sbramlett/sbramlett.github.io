// GLOBAL OBJECT THINGIES
var clock30 = "clock30",
    clock60 = "clock60",
    clock90 = "clock90",
    clock120 = "clock120";

// setInterval returns a number that you can save here.
// When you're ready to stop the active timer you pass the saved number to clearInterval and the timer stops.
// This way you can track multiple timers running concurrently in a complex app.
var mainTimerHandle = null;

// these are simple javascript objects.
// this is an Array of three Objects, each of which has a startAt number and a current number.
var clocks =  [
    { name: "clock30", startAt: 30,  current: 30  },
    { name: "clock60", startAt: 60,  current: 60  },
    { name: "clock90", startAt: 90, current: 90 },
    { name: "clock120", startAt: 120, current: 120 },
  ];


// START AND STOP EVERYTHING

var startAllClocks = function() {
  // start a 1-second repeating timer that fires tickAllClocks each time it goes off.
  // store the numeric identifier that we'll later use to lets us kill this timer as mainTimerHandle.
  mainTimerHandle = window.setInterval(tickAllClocks, 1000);
};

var stopAllClocks = function() {
  // kill the timer identified by mainTimerHandle.
  // Destroys our one second timer.
  window.clearInterval(mainTimerHandle);
  console.log("Stopped all clocks");
};

var resetAllClocks =  function() {
  stopAllClocks();
  
  // for each clock in the clocks Array, take that clock and pass it to resetOneClock
  clocks.map(resetOneClock);
};

// TICK TOCK ALL CLOCKS

var tickAllClocks = function() {
  console.log("\n*** TICK ***");
  
  // for each clock in the clocks Array, take that clock and pass it to tickOneClock
  clocks.map(tickOneClock);
};

// PER-CLOCK METHODS, FEED ME MAPS

var tickOneClock =  function(clock) {
  // check the supplied clock object to find out its current time.
  // calculate "current minus one second"
  var calculatedTime = clock.current - 1;
  
  // set the clock's current value to "current minus one", or zero, whichever is greater.
  // this means we'll never hit negative numbers.
  clock.current = Math.max(calculatedTime, 0);

  logOneClock(clock);
};

var logOneClock = function(clock) {
  // build up a string of log info for the current clock by specifying the snippets of our log string
  // and then squishing them all together with a space in between each snippet via .join(' ')
  clockLogText = [
    "Clock with startAt of [",
    clock.startAt,
    "]\tis at [",
    clock.current,
    "]"
  ].join(' ');

  console.log(clockLogText);
};

var resetOneClock = function(clock) {
  // reset the supplied clock's 'current' number to its initial 'startAt' value
  clock.current = clock.startAt;
  console.log("Reset clock with startAt of [" + clock.startAt + "]");
};

// jQuery to display countdown inside elements
$('#clock60').text(clock.current);