// var sound = new Howl({
//   src: ['testSound.mp3']
// });
//
// var intervalId;
//
// counter = function() {
//   whatever();
//   intervalId = setInterval(whatever, 1000);
// };
//
// function whatever() {
//   sound.play();
// }
//
// function stopCounter() {
//   clearInterval(intervalId);
// }

function Sequencer() {
  this.sound = new Howl({
    src: ['testSound.mp3']
  });

  this.playStep = function() {
    this.sound.play();
  };
  // 
  // this.playAll = function() {
  //   var hit = this.sound;
  //   this.playStep();
  //   intervalId = setInterval(hit.play, 1000);
  // };

  this.stopCounter = function() {
    clearInterval(intervalId);
  };

}

Sequencer.prototype.playAll = function() {
  var hit = this.sound;
  this.playStep();
  intervalId = setInterval(hit.play, 1000);
};

var drum;

drum = new Sequencer();
