import './Numpad.scss';

const numpad = (props) => {
    return (
        <div className="grid-container">
                <div id="input" className="grid-item">
                    <p id="formula">{props.expression ? props.prev : props.output}</p>
                    <p id="display">{props.current}</p>
                </div>
                <button
                    className="grid-item operations" 
                    id="clear"
                    value="AC"
                    onClick={props.handleInput}  
                    >AC
                </button>
                <button 
                    className="grid-item operations"
                    id="divide"
                    value="/"
                    onClick={props.handleOperation} 
                    >/   
                </button>
                <button 
                    className="grid-item operations"
                    id="multiply"
                    value="*"
                    onClick={props.handleOperation} 
                    >x   
                </button>
                <button 
                    className="grid-item numbers"
                    id="seven"
                    value="7"
                    onClick={props.handleInput} 
                    >7   
                </button>
                <button 
                    className="grid-item numbers"
                    id="eight"
                    value="8"
                    onClick={props.handleInput} 
                    >8   
                </button>
                <button 
                    className="grid-item numbers"
                    id="nine"
                    value="9"
                    onClick={props.handleInput} 
                    >9   
                </button>
                <button 
                    className="grid-item operations"
                    id="subtract"
                    value="-"
                    onClick={props.handleOperation} 
                    >-   
                </button>
                <button 
                    className="grid-item numbers"
                    id="four"
                    value="4"
                    onClick={props.handleInput} 
                    >4   
                </button>
                <button 
                    className="grid-item numbers"
                    id="five"
                    value="5"
                    onClick={props.handleInput} 
                    >5   
                </button>
                <button 
                    className="grid-item numbers"
                    id="six"
                    value="6"
                    onClick={props.handleInput} 
                    >6   
                </button>
                <button 
                    className="grid-item operations"
                    id="add"
                    value="+"
                    onClick={props.handleOperation} 
                    >+   
                </button>
                <button 
                    className="grid-item numbers"
                    id="one"
                    value="1"
                    onClick={props.handleInput} 
                    >1   
                </button>
                <button 
                    className="grid-item numbers"
                    id="two"
                    value="2"
                    onClick={props.handleInput} 
                    >2   
                </button>
                <button 
                    className="grid-item numbers"
                    id="three"
                    value="3"
                    onClick={props.handleInput} 
                    >3   
                </button>
                <button 
                    className="grid-item"
                    id="equals"
                    value="=" 
                    onClick={props.handleOperation} 
                    >=   
                </button>
                <button 
                    className="grid-item numbers"
                    id="zero"
                    value="0"
                    onClick={props.handleInput} 
                    >0   
                </button>
                <button 
                    className="grid-item numbers"
                    id="decimal"
                    value="."
                    onClick={props.handleInput} 
                    >.   
                </button>
            </div>
    )
}

export default numpad;