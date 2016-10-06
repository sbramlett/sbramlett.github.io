// Set timer information
var clock;

$(document).ready(function() {

  clock = $('.clock').FlipClock(90, {
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false,
    callbacks: {
      start: function() {
      }
    }
  });
  $('.start').click(function(s) {
    clock.start();
  });
    $('.reset').click(function(r) {
    clock.reset();
  });
});

