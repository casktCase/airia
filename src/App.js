import React, { Component } from 'react';
import './App.css';

///JSON data rpresenting readings from IoT
var data = [
  {
    "name": "Temperature",
    "value": "67",
    "location": "Room 1"
  },
  {
    "name": "Humidity",
    "value": "45",
    "location": "Room 1"
  },
  {
    "name": "Water",
    "value": "False",
    "location": "Well"
  }

];

//data map function to show in table
var rows = data.map(function (row) {
  return <tr>
    <td>{row.name}</td>
    <td>{row.value}</td>
    <td>{row.location}</td>
  </tr>
});



class App extends Component {
  render() {
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Value</th>
          <th>Location</th>
        </thead>
        {rows}
      </table>
    );
  }
}

export default App;
