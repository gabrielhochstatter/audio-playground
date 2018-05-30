describe('Sequencer', function(){
  var testSeq;

  beforeEach(function(){
    testSeq = new Sequencer();
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('playAll calls playStep', function(){
    spyOn(testSeq, 'playStep');
    testSeq.playAll();
    expect(testSeq.playStep).toHaveBeenCalled();
  });

  it('playAll checks if isPlaying is true', function(){
    spyOn(testSeq, 'isPlaying');
    testSeq.playAll();
    expect(testSeq.isPlaying).toHaveBeenCalled();
  });

  it('playAll calls playStep once each interval', function(){
    spyOn(testSeq, 'playStep');
    testSeq.playAll();
    jasmine.clock().tick(1001);
    expect(testSeq.playStep).toHaveBeenCalledTimes(2);
  });

  it('only plays while isPlaying is true', function() {

  });
});
