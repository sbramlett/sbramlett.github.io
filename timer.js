// Set timer information
var clock30;
var clock60;
var clock90;
var clock120;

$(document).ready(function() {

  clock30 = $('.clock30').FlipClock(30, {
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false,
    callbacks: {
      start: function() {
      }
    }
  });
  
  clock60 = $('.clock60').FlipClock(60, {
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false,
    callbacks: {
      start: function() {
      }
    }
  });
  
  clock90 = $('.clock90').FlipClock(90, {
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false,
    callbacks: {
      start: function() {
      }
    }
  });


  clock120 = $('.clock120').FlipClock(120, {
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false,
    callbacks: {
      start: function() {
      }
    }
  });
  
  $('.start').click(function(st) {
    clock30.start();
    clock60.start();
    clock90.start();
    clock120.start();
  });
  
  $('.stop').click(function(sp) {
    clock30.stop();
    clock60.stop();
    clock90.stop();
    clock120.stop();
  });
  
  $('.reset').click(function(r) {
    clock30.reset();
    clock60.reset();
    clock90.reset();
    clock120.reset();
  });
  
});