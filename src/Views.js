

import React, { Component } from "react";
import "./Views.css";

var data = [
    {
        "name": "cam1",
        "value": "67",
        "location": "Room 1"
    },
    {
        "name": "cam2",
        "value": "556",
        "location": "Room 2"
    },
    {
        "name": "cam3",
        "value": "False",
        "location": "Well"
    }

];

//data map function to show in table
var rows = data.map(function (row) {
    return <div className="brick">
        <div className="content">
            <div className="color">
                <div className="palette" />
                <h1>{row.value}</h1>
            </div>
            <div className="action">
                <p>{row.name}</p>
                <button className="buyButton" >
                    Detail
          </button>
            </div>
        </div>
    </div>
});


class Views extends Component {
    render() {
        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Views;