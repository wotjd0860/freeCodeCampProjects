function Calculator() {
    return (
        <div>
            <div id="display">
                
            </div>
            <div id="calculator">
                <div className="row">
                    <div id="clear" className="col-6">AC</div>
                    <div id="divide" className="col-3">/</div>
                    <div id="multiply" className="col-3">X</div>
                </div>
                <div className="row">
                    <div id="seven" className="col-3">7</div>
                    <div id="eight" className="col-3">8</div>
                    <div id="nine" className="col-3">9</div>
                    <div id="substract" className="col-3">-</div>
                </div>
                <div className="row">
                    <div id="four" className="col-3">4</div>
                    <div id="five" className="col-3">5</div>
                    <div id="six" className="col-3">6</div>
                    <div id="add" className="col-3">+</div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <div id="one" className="col-4">1</div>
                            <div id="two" className="col-4">2</div>
                            <div id="three" className="col-4">3</div>
                        </div>
                        <div className="row">
                            <div id="zero" className="col-8">0</div>
                            <div id="decimal" className="col-4">.</div>
                        </div>
                    </div>
                    <div id="equals" className="col-3">=</div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;