import React from "react";
var arrTimes = [];
var i = 0; // start
var timesToTest = 5;
var tThreshold = 150; //ms
var testImage = "http://www.google.com/images/phd/px.gif"; // small image in your server
//working on formelements from https://medium.com/@rossbulat/an-introduction-to-using-form-elements-in-react-3778042ff334
var dummyImage = new Image();
var isConnectedFast = false;

function Network () {
    

        return (
          <form onSubmit={this.submitFormHandler}>
            <div>
                <h2>Network Bandwidth Tester</h2>
                <p>URL: <br /><input type="text" name="testURL" ref="testURL" /></p>
                <p>Type: <br /><input type="text" name="testType" ref="testType" /></p>
                <p>Frequency (hh:mm:ss): <br /><input type="text" name="testFrequency" ref="testFrequency" /></p>
                <p>Timeout (hh:mm:ss): <br /><input type="text" name="testTimeout" ref="testTimeout" /></p>
                <p>Test Options: <br />
                  <input type="checkbox" name="category" value="throttleChk" ref="throttleChk" /> Throttle the test
                  <input type="checkbox" name="category" value="quickChk" ref="quickChk" /> Quick Test (less accurate)
                  <input type="checkbox" name="category" value="multipleChk" ref="multipleChk" /> Multiple source test (Ignores the which Url text field)
</p>
<input type="submit" value="Submit Form" onClick={manualTest()} />
                </div>
                </form>
        ); 
}

testLatency(function(avg){
  isConnectedFast = (avg <= tThreshold);
    //var element = ("internet speed " + (avg.toFixed(2)) + "ms - speed test pass - " + isConnectedFast);
    document.body.appendChild(
      document.createTextNode("internet speed: " + (avg.toFixed(2)) + "ms - speed test pass - " + isConnectedFast )
  );
});


/** test and average time took to download image from server, called recursively timesToTest times */
function testLatency(cb) {
  var tStart = new Date().getTime();
  if (i<timesToTest-1) {
    dummyImage.src = testImage + '?t=' + tStart;
    dummyImage.onload = function() {
      var tEnd = new Date().getTime();
      var tTimeTook = tEnd-tStart;
      arrTimes[i] = tTimeTook;
      testLatency(cb);
      i++;
    };
  } else {
    /** calculate average of array items then callback */
    var sum = arrTimes.reduce(function(a, b) { return a + b; });
    var avg = sum / arrTimes.length;
    cb(avg);
  }
}

function manualTest(){
//test latency
//inputs: url from list, loop times 1-
//
var testURL = document.getElementById('testURL')
var testType = document.getElementById('testType')
var testFrequency = document.getElementById('testFrequency')
var testTimeout = document.getElementById('testTimeout')
var throttleChk = document.getElementById('throttleChk')
var quickChk = document.getElementById('quickChk')
var multipleChk = document.getElementById('multipleChk')

console.log("element" + testURL + testType + testFrequency + testTimeout + throttleChk + quickChk + multipleChk)

};

export default Network;