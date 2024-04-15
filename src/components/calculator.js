import { useState } from "react";

function Calculator() {
    const [display, setDisplay] = useState("0");
    const [result, setResult] = useState("");
    
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

    return (
        <div className="grid grid-rows-5 grid-cols-4 place-items-center size-fit border">
            <div id="display" className="col-span-4 flex items-center justify-center w-64 h-16 border">
                {display}
                {result}
            </div>
            <div id="calculator" className="col-span-4 row-span-4 grid grid-rows-5 grid-cols-4 size-fit border">
                <div id="clear" className="col-span-2 flex items-center justify-center w-32 h-16 border" onClick={btnClicked}>AC</div>
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
                <div id="equals" className="col-span-1 row-span-2 flex items-center justify-center w-16 h-32 border" onClick={btnClicked}>=</div>

                <div id="zero" className="col-span-2 flex items-center justify-center w-32 h-16 border" onClick={btnClicked}>0</div>
                <div id="decimal" className="col-span-1 flex items-center justify-center size-16 border" onClick={btnClicked}>.</div>
            </div>
        </div>
    );
}

export default Calculator;