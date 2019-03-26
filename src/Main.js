import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";
import Views from "./Views";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Airia IoT Display</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/tasks">Tasks</NavLink></li>
                        <li><NavLink to="/views">Views</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/tasks" component={Tasks} />
                        <Route path="/views" component={Views} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
