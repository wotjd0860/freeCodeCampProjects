import { useEffect } from "react";
import { useState } from "react";

function Clock() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [startStop, setStartStop] = useState(false);
    const [intervalID, setIntervalID] = useState();

    function clickedIncDect(event) {
        if(!startStop) {
            const key = event.target.id.split("-");

            if (key[0] === "break") {
                if (key[1] === "increment") {
                    if (breakLength < 60) {
                        setBreakLength( (breakLength) => breakLength + 1);
                    }
                } else {
                    if (breakLength > 1) {
                        setBreakLength( (breakLength) => breakLength - 1);
                    }
                }
            } else {
                if (key[1] === "increment") {
                    if (sessionLength < 60) {
                        setSessionLength( (sessionLength) => sessionLength + 1);
                        setMinutes( (minutes) => minutes + 1);
                    }
                } else {
                    if (sessionLength > 1) {
                        setSessionLength( (sessionLength) => sessionLength - 1);
                        setMinutes( (minutes) => minutes - 1);
                    }
                }
            }
        }
    }
    
    function clickedReset() {
        setBreakLength(5);
        setSessionLength(25);
        setStartStop(false);
        setMinutes(25);
        setSeconds(0);
    }

    function clickedStartStop() {
        setStartStop( (startStop) => !startStop);
    }
    useEffect( () => {
        if(startStop) {
            const id = setInterval( () => {
                setSeconds( (seconds) => seconds - 1);
            }, 1000 );
            setIntervalID(id);
        } else {
            clearInterval(intervalID);
        }
    }, [startStop]);
    useEffect( () => {
        if (seconds < 0) {
            setMinutes( (minutes) => minutes - 1);
            setSeconds(59);
        }
    }, [seconds]);

    return (
        <div>
            <h1>25 + 5 Clock</h1>
            <div id="break-label">
                <h3>Break Length</h3>
                <button id="break-decrement" onClick={clickedIncDect}>down</button>
                <div id="break-length">{breakLength}</div>
                <button id="break-increment" onClick={clickedIncDect}>up</button>
            </div>
            <div id="session-label">
                <h3>Session Length</h3>
                <button id="session-decrement" onClick={clickedIncDect}>down</button>
                <div id="session-length">{sessionLength}</div>
                <button id="session-increment" onClick={clickedIncDect}>up</button>
            </div>
            <div id="time-label">
                <h2>Session</h2>
                <div id="time-left">
                    {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                </div>
                <button id="start_stop" onClick={clickedStartStop}>start/stop</button>
                <button id="reset" onClick={clickedReset}>reset</button>
            </div>
        </div>
    );
}

export default Clock;