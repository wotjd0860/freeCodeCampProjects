import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function DrumMachine() {
    const [sound, setSound] = useState("");
    const [onOff, setOnOff] = useState(true);

    const drumMachine = useRef();
    const refs = useRef([]);
    const refNames = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

    const navigate = useNavigate();

    refNames.forEach( (name) => {
        if (!refs.current[name]) {
            refs.current[name] = React.createRef();
        }
    });

    useEffect(() => {
        drumMachine.current.focus();
    }, []);
    useEffect(() => {
        onOff ? setSound("Now On") : setSound("Now Off");
    }, [onOff]);

    function playAudio(event) {
        if (onOff) {
            const audio = event.target.querySelector("audio");
            audio.play();
    
            switch(event.target.id) {
                case "Q":
                    setSound("Heater 1");
                    break;
                case "W":
                    setSound("Heater 2");
                    break;
                case "E":
                    setSound("Heater 3");
                    break;
                case "A":
                    setSound("Heater 4");
                    break;
                case "S":
                    setSound("Clap");
                    break;
                case "D":
                    setSound("Open-HH");
                    break;
                case "Z":
                    setSound("Kick-n'-Hat");
                    break;
                case "X":
                    setSound("Kick");
                    break;
                case "C":
                    setSound("Closed-HH");
                    break;
                default:
                    setSound("");
                    break;
            }
        }
    }

    function keyCheck(event) {
        if (onOff) {
            const type = event.type;
            if ( event.keyCode === 81 || event.keyCode === 87 || event.keyCode === 69
                || event.keyCode === 65 || event.keyCode === 83 || event.keyCode === 68
                || event.keyCode === 90 || event.keyCode === 88 || event.keyCode === 67) {
                const audio = document.querySelector(`#${String.fromCharCode(event.keyCode)} audio`);
                audio.play();
    
                switch(event.keyCode) {
                    case 81:
                        setSound("Heater 1");
                        (type === 'keydown') ? refs.current['Q'].current.classList.add('shadow-none') : refs.current['Q'].current.classList.remove('shadow-none');
                        break;
                    case 87:
                        setSound("Heater 2");
                        (type === 'keydown') ? refs.current['W'].current.classList.add('shadow-none') : refs.current['W'].current.classList.remove('shadow-none');
                        break;
                    case 69:
                        setSound("Heater 3");
                        (type === 'keydown') ? refs.current['E'].current.classList.add('shadow-none') : refs.current['E'].current.classList.remove('shadow-none');
                        break;
                    case 65:
                        setSound("Heater 4");
                        (type === 'keydown') ? refs.current['A'].current.classList.add('shadow-none') : refs.current['A'].current.classList.remove('shadow-none');
                        break;
                    case 83:
                        setSound("Clap");
                        (type === 'keydown') ? refs.current['S'].current.classList.add('shadow-none') : refs.current['S'].current.classList.remove('shadow-none');
                        break;
                    case 68:
                        setSound("Open-HH");
                        (type === 'keydown') ? refs.current['D'].current.classList.add('shadow-none') : refs.current['D'].current.classList.remove('shadow-none');
                        break;
                    case 90:
                        setSound("Kick-n'-Hat");
                        (type === 'keydown') ? refs.current['Z'].current.classList.add('shadow-none') : refs.current['Z'].current.classList.remove('shadow-none');
                        break;
                    case 88:
                        setSound("Kick");
                        (type === 'keydown') ? refs.current['X'].current.classList.add('shadow-none') : refs.current['X'].current.classList.remove('shadow-none');
                        break;
                    case 67:
                        setSound("Closed-HH");
                        (type === 'keydown') ? refs.current['C'].current.classList.add('shadow-none') : refs.current['C'].current.classList.remove('shadow-none');
                        break;
                    default:
                        setSound("");
                        break;
                }
            }
        }

    }

    function onOffToggle() {
        setOnOff( onOff => !onOff);
    }

    function homeBtn() {
        navigate(-1);
    }

    return (
        <div id="drum-machine" className="size-full content-center" onKeyDown={keyCheck} onKeyUp={keyCheck} tabIndex={0} ref={drumMachine}>
            <div className="">
                <button onClick={homeBtn} className="absolute top-4 left-4 align-middle text-center w-20 rounded-xl bg-black text-white">Home</button>
            </div>
            <div className="place-items-center size-fit m-auto flex">
                <div id="pad" className="border-2 rounded-2xl grid gap-2 grid-cols-3 place-items-center size-fit">
                    <div id="Q" ref={refs.current['Q']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none mt-2 ml-2 flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3"></source>
                        </audio>
                        Q
                    </div>
                    <div id="W" ref={refs.current['W']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none mt-2 flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3"></source>
                        </audio>
                        W
                    </div>
                    <div id="E" ref={refs.current['E']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none mt-2 mr-2 flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3"></source>
                        </audio>
                        E
                    </div>
                    <div id="A" ref={refs.current['A']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none ml-2 flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mp3"></source>
                        </audio>
                        A
                    </div>
                    <div id="S" ref={refs.current['S']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3"></source>
                        </audio>
                        S
                    </div>
                    <div id="D" ref={refs.current['D']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none mr-2 flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3"></source>
                        </audio>
                        D
                    </div>
                    <div id="Z" ref={refs.current['Z']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none ml-2 mb-2 flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3"></source>
                        </audio>
                        Z
                    </div>
                    <div id="X" ref={refs.current['X']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none mb-2 flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3"></source>
                        </audio>
                        X
                    </div>
                    <div id="C" ref={refs.current['C']} className="drum-pad text-4xl size-24 rounded-md border shadow-xl active:shadow-none mb-2 mr-2 flex items-center justify-center" onClick={playAudio}>
                        <audio>
                            <source src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mp3"></source>
                        </audio>
                        C
                    </div>
                </div>
                <div id="display" className="ml-4 border-2 rounded-2xl place-items-center size-fit">
                    <div id="onOffBtn" className="m-8 text-center">
                        <label className="relative inline-flex cursor-pointer items-center">
                            <input id="switch-3" type="checkbox" className="peer sr-only" onChange={onOffToggle} defaultChecked/>
                            <label htmlFor="switch-3" className="hidden"></label>
                            <div className="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
                        </label>
                    </div>
                    <div id="sound">
                        <input value={sound} className="text-center w-full h-10" readOnly/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;