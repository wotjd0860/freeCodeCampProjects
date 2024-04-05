import { useState } from "react";

function DrumMachine() {
    const [sound, setSound] = useState("");

    function playAudio(event) {
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
    return (
        <div id="drum-machine">
            <div id="pad">
                <div id="Q" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3"></source>
                    </audio>
                    Q
                </div>
                <div id="W" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3"></source>
                    </audio>
                    W
                </div>
                <div id="E" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3"></source>
                    </audio>
                    E
                </div>
                <div id="A" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mp3"></source>
                    </audio>
                    A
                </div>
                <div id="S" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3"></source>
                    </audio>
                    S
                </div>
                <div id="D" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3"></source>
                    </audio>
                    D
                </div>
                <div id="Z" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3"></source>
                    </audio>
                    Z
                </div>
                <div id="X" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3"></source>
                    </audio>
                    X
                </div>
                <div id="C" className="drum-pad" onClick={playAudio}>
                    <audio>
                        <source src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mp3"></source>
                    </audio>
                    C
                </div>
            </div>
            <div id="display">
                {sound}
            </div>
        </div>
    );
}

export default DrumMachine;