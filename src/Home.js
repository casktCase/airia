import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>View your IoT device status here</h2>
                <p>Many IoT devices will have their own interface and you will need to look in multiple applications to view the status of them.
                    The Airia IoT viewer you will be able to concolidate some of those devices in one point.
                </p>

                <p>Currently the Views page is a place to look at camera data, tasks is to look at
                    thresholds of devices like water sensors, door sensors, and motion sensors.
                </p>
            </div>
        );
    }
}

export default Home;
