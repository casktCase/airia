import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Status from "./Status";
import Views from "./Views";
import About from "./About";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>♨ Airia IoT Display</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/status">Status</NavLink></li>
                        <li><NavLink to="/views">Views</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/status" component={Status} />
                        <Route path="/views" component={Views} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
