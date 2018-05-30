function Sequencer() {
  this.sound = new Howl({
    src: ['testSound.mp3']
  });

  this.playStep = function() {
    this.sound.play();
  };

  this.playAll = function() {
    this.playStep();
    playInterval = setInterval(this.playStep.bind(this), 1000);
  };

  this.stopCounter = function() {
    clearInterval(playInterval);
  };

  this.isPlaying = true;

}

var drum;

drum = new Sequencer();
