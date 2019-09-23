import React from "react";
/*
This network bandwidth tester checks endpoints around 
your network and the internet

*/
var testImage = "http://www.google.com/images/phd/px.gif";

const NetworkForm = (props) => {

        return (
          
            <div className="formContainer">
                <h2>Internet Bandwidth Tester</h2>
                <p>URL: <br /><input type="text" className="form" name="testURL" value={this.state.testURL}  /></p>
                <p>Frequency (hh:mm:ss): <br /><input type="text" name="testFrequency" value={this.state.testURL}  /></p>
                </div> 
        ); 
}

function manualTest(){
//test latency to a url
//inputs: url , Frequency in ms
//
var testURL = document.getElementById('testURL')
var testFrequency = document.getElementById('testFrequency')

console.log("received: " + testURL + testFrequency)

};

export default NetworkForm;