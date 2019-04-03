import React, { Component, useState, useEffect } from "react";
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

function Tasks() {

    const initialCount = () => Number(window.localStorage.getItem('count') || 0);


    const [count, setCount] = useState(initialCount);
    useEffect(
        () => {
            window.localStorage.setItem('count', count)
        },
        [count],

    )

    const [tasks, setTasks] = useState([
        { text: "preset task for motion sensor" },
        { text: "reed sensor check" },
        { text: "water sensor" }
    ]);

    const addTask = text => {
        const newTasks = [...tasks, { text }];
        setTasks(newTasks);
    };

    return (
        <div className="app">
            <p>The alert was reset {count} times&nbsp;
                <button onClick={() => setCount(count + 1)}>
                    Reset alarm
                </button>
            </p>
            <div className="task-list">
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
    );
}

export default Tasks;