import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { MdNotStarted } from "react-icons/md";
import { RxReset } from "react-icons/rx";

import sound from '../sounds/alarm.mp3'

function Clock() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [startStop, setStartStop] = useState(false);
    const [intervalID, setIntervalID] = useState();

    const navigate = useNavigate();

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
        } else if (minutes === 0 && seconds === 0) {
            const audio = new Audio(sound)
            audio.play();

            setMinutes(breakLength);
        }
    }, [seconds]);

    function clickedBrkInc() {
        if(!startStop && breakLength < 60) {
            setBreakLength( (breakLength) => breakLength + 1);
        }
    }
    function clickedBrkDec() {
        if(!startStop && breakLength > 1) {
            setBreakLength( (breakLength) => breakLength - 1);
        }
    }
    function clickedSesInc() {
        if(!startStop && sessionLength < 60) {
            setSessionLength( (sessionLength) => sessionLength + 1);
            setMinutes( (minutes) => minutes + 1);
        }
    }
    function clickedSesDec() {
        if(!startStop && sessionLength > 1) {
            setSessionLength( (sessionLength) => sessionLength - 1);
            setMinutes( (minutes) => minutes - 1);
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
        if( !(minutes === 0 && seconds === 0) ) {
            setStartStop( (startStop) => !startStop);
        }
    }

    function homeBtn() {
        navigate(-1);
    }

    return (
        <div className="size-full flex items-center justify-center place-items-center">
            <button onClick={homeBtn} className="absolute top-4 left-4 align-middle text-center w-20 rounded-xl bg-black text-white">Home</button>

            <div className="grid-rows-3 items-center justify-center place-items-center size-fit border rounded-xl">
                <div id="title" className="text-center text-5xl align-middle m-4">
                    25 + 5 Clock
                </div>
                <div id="labels" className="flex flex-wrap items-center justify-center m-4">
                    <div id="break-label" className="grid-rows-2 m-4">
                        <div className="text-center text-2xl m-3">
                            Break Length
                        </div>
                        <div className="flex flex-wrap items-center justify-center text-xl m-3">
                            <button id="break-decrement" onClick={clickedBrkDec}>
                                <FaArrowCircleDown size="20"/>
                            </button>
                            <div id="break-length" className="mx-4">{breakLength}</div>
                            <button id="break-increment" onClick={clickedBrkInc}>
                                <FaArrowCircleUp size="20"/>
                            </button>
                        </div>
                    </div>
                    <div id="session-label" className="grid-rows-2 m-4">
                        <div className="text-center text-2xl m-3">
                            Session Length
                        </div>
                        <div className="flex flex-wrap items-center justify-center text-xl m-3">
                            <button id="session-decrement" onClick={clickedSesDec}>
                                <FaArrowCircleDown size="20"/>
                            </button>
                            <div id="session-length" className="mx-4">{sessionLength}</div>
                            <button id="session-increment" onClick={clickedSesInc}>
                                <FaArrowCircleUp size="20"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="time-label" className="grid-rows-3 m-4">
                    <div className="text-center text-2xl m-3">
                        Session
                    </div>
                    <div className="flex flex-wrap items-center justify-center text-xl m-3">
                        <div id="time-left">
                            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center text-xl m-3">
                        <button id="start_stop" onClick={clickedStartStop} className="mx-4">
                            <MdNotStarted size="30"/>
                        </button>
                        <button id="reset" onClick={clickedReset} className="mx-4">
                            <RxReset />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;