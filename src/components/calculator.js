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
        <div>
            <div id="display">
                {display}
                {result}
            </div>
            <div id="calculator">
                <div className="row">
                    <div id="clear" className="col-6" onClick={btnClicked}>AC</div>
                    <div id="divide" className="col-3" onClick={btnClicked}>/</div>
                    <div id="multiply" className="col-3" onClick={btnClicked}>*</div>
                </div>
                <div className="row">
                    <div id="seven" className="col-3" onClick={btnClicked}>7</div>
                    <div id="eight" className="col-3" onClick={btnClicked}>8</div>
                    <div id="nine" className="col-3" onClick={btnClicked}>9</div>
                    <div id="substract" className="col-3" onClick={btnClicked}>-</div>
                </div>
                <div className="row">
                    <div id="four" className="col-3" onClick={btnClicked}>4</div>
                    <div id="five" className="col-3" onClick={btnClicked}>5</div>
                    <div id="six" className="col-3" onClick={btnClicked}>6</div>
                    <div id="add" className="col-3" onClick={btnClicked}>+</div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <div id="one" className="col-4" onClick={btnClicked}>1</div>
                            <div id="two" className="col-4" onClick={btnClicked}>2</div>
                            <div id="three" className="col-4" onClick={btnClicked}>3</div>
                        </div>
                        <div className="row">
                            <div id="zero" className="col-8" onClick={btnClicked}>0</div>
                            <div id="decimal" className="col-4" onClick={btnClicked}>.</div>
                        </div>
                    </div>
                    <div id="equals" className="col-3" onClick={btnClicked}>=</div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;