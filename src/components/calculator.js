import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
    const [display, setDisplay] = useState("0");
    const [result, setResult] = useState("");

    const navigate = useNavigate();
    
    function btnClicked(event) {
        switch(event.target.innerText) {
            case "AC" :
                setDisplay("0");
                setResult("");
                break;
            case "0" :
                if (display !== "0") {
                    setDisplay(`${display}${event.target.innerText}`);
                }
                break;
            case "=" :
                // string to array with symbols 
                let tokens = [];
                let number = '';

                for (const char of display) {
                    if (char === '+' || char === '-' || char === '*' || char === '/') {
                        if (number) {
                        tokens.push(number);
                        number = '';
                        }
                        tokens.push(char);
                    } else {
                        number += char;
                    }
                }

                if (number) {
                    tokens.push(number);
                }
                
                // calculation
                const operatorStack = [];
                const valueStack = [];

                for (const token of tokens) {
                    if(!isNaN(token)) {
                        valueStack.push(Number(token));
                        
                        let recentOperator = "";

                        if (operatorStack.length !== 0) {
                            recentOperator = operatorStack.pop();
                            if (recentOperator === "*" || recentOperator === "/") {
                                let rightValue = valueStack.pop();
                                let leftValue = valueStack.pop();
                                let value;
                                switch(recentOperator) {
                                    case "*" :
                                        value = leftValue * rightValue;
                                        break;
                                    case "/" :
                                        value = leftValue / rightValue;
                                        break;
                                }
                                valueStack.push(value);
                            } else {
                                operatorStack.push(recentOperator);
                            }
                        }
                    } else {
                        operatorStack.push(token);
                    }
                }
                
                while (operatorStack.length !== 0) {
                    let rightValue = valueStack.pop();
                    let leftValue = valueStack.pop();
                    let value;
                    switch(operatorStack.pop()) {
                        case "+" :
                            value = leftValue + rightValue;
                            break;
                        case "-" :
                            value = leftValue - rightValue;
                            break;
                    }
                    valueStack.push(value);
                }
                setResult(valueStack.pop().toString());
                setDisplay(`${display}=${result}`);
                break;
            default :
                if (display !== "0") {
                    setDisplay(`${display}${event.target.innerText}`);
                } else {
                    setDisplay(event.target.innerText);
                }
                break;
        }
    }

    function homeBtn() {
        navigate(-1);
    }

    return (
        <div className="size-full flex items-center justify-center place-items-center">
            <button onClick={homeBtn} className="absolute top-4 left-4 align-middle text-center w-20 rounded-xl bg-black text-white">Home</button>

            <div className="flex flex-col items-center justify-center place-items-center size-fit border">
                <div id="display" className="flex flex-col items-center justify-center w-64 h-16 border mb-3">
                    <input value={display} className="text-right w-11/12"/>
                    <input value={result} className="text-right w-11/12"/>
                </div>
                <div id="calculator" className="col-span-4 row-span-4 grid grid-rows-5 grid-cols-4 size-fit border">
                    <div id="clear" className="col-span-2 flex items-center justify-center w-32 h-16 border bg-red-400" onClick={btnClicked}>AC</div>
                    <div id="divide" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>/</div>
                    <div id="multiply" className="col-apsn-1 flex items-center justify-center size-16 border" onClick={btnClicked}>*</div>

                    <div id="seven" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>7</div>
                    <div id="eight" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>8</div>
                    <div id="nine" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>9</div>
                    <div id="substract" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>-</div>

                    <div id="four" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>4</div>
                    <div id="five" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>5</div>
                    <div id="six" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>6</div>
                    <div id="add" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>+</div>

                    <div id="one" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>1</div>
                    <div id="two" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>2</div>
                    <div id="three" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>3</div>
                    <div id="equals" className="col-span-1 row-span-2 flex items-center justify-center w-16 h-32 border bg-blue-400" onClick={btnClicked}>=</div>

                    <div id="zero" className="col-span-2 flex items-center justify-center w-32 h-16 border" onClick={btnClicked}>0</div>
                    <div id="decimal" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>.</div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;