import React, { useState } from "react";
import useAxios from 'axios-hooks';

///Task Elements
//Tasks are enabled when a certain threshold is reached in status alerts
const Task = ({ task }) => <div className="task">{task.text}</div>;

function TaskForm({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function Home() {

//Task elements
// currently being prefilled 
    const [tasks, setTasks] = useState([
        { text: "motion sensor detection above normal" },
        { text: "reed sensor check" },
        { text: "water sensor" }
    ]);

    const addTask = text => {
        const newTasks = [...tasks, { text }];
        setTasks(newTasks);
    };

    //Loading data served from express is at http://url:port/(dir)
    //https://github.com/simoneb/axios-hooks
    //Refetch timer is set for every 10 seconds
    //removed loading, error from declaration const [{ data, loading, error }
    const [{data}] = useAxios(
        '/temp'
      )
      //use this timer if a set interval is needed  
      //var timer = setInterval(()=>  refetch('/temp'), 10000)

    return (
    <div className="app">
        <div className="brickLg">
            <div className="content">
                <pre>{ JSON.stringify(data, null, 2) }</pre>
            </div>
        </div>
        <div className="brickLg">
            <div className="content">
                <div className="task-list1">
                    {tasks.map((task, index) => (
                    <Task
                        key={index}
                        index={index}
                        task={task}
                    />
                    ))}
                    <TaskForm addTask={addTask} />
                </div>
            </div>
        </div>
        <div className="brickLg">
            <div className="content">
                <p><b>This is the IoT device status viewer. </b>
                Many devices will have their own proprietary interface. Instead of using multiple applications to view the status of them.
                    This interface will be able to consolidate some of those devices in one focal point. Currently the Views page is a place to look at camera data, tasks is to look at
                    thresholds of devices like water sensors, door sensors, and motion sensors.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Home;