require('../node_modules/howler/src/howler.core');
var drum = require('../src/interval');


describe("Sequencer", function() {
  beforeEach(function(){
    jasmine.clock().install();
  });

  it("testing spies", function(){
    var testSeq = new drum.Sequencer();
    spyOn(testSeq, 'playStep');
    testSeq.playAll();
    expect(testSeq.playStep).toHaveBeenCalled();
  });


});
