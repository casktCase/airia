import React, { Component, useState, useEffect } from "react";



function Status() {

    const initialCount = () => Number(window.localStorage.getItem('count') || 0);


    const [count, setCount] = useState(initialCount);
    useEffect(
        () => {
            window.localStorage.setItem('count', count)
        },
        [count],

    )



    return (
        <div className="app">
            <p>The alert was reset {count} times&nbsp;
                <button onClick={() => setCount(count + 1)}>
                    Reset alarm
                </button>
            </p>

        </div>
    );
}

export default Status;