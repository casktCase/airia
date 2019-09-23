import React, { useState, useEffect } from "react";
import useAxios from 'axios-hooks';

function Status() {

    //Loading data served from express is at http://url:port/(dir)
    //https://github.com/simoneb/axios-hooks
    //Refetch timer is set for every 10 seconds
    //removed loading, error from declaration const [{ data, loading, error }
    const [{data}, refetch] = useAxios(
        '/temp'
      )

    //this stores a number in local session.  It indicates to the user 
    //how many times a reset button was clicked
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
            <div>
      <button id="btnRefetch" onClick={refetch}>refetch</button>
      { JSON.stringify(data, null, 2) }

      
    </div>
        </div>
    );
}

export default Status;