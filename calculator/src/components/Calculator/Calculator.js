import React, { Component }from 'react';
import Numpad from '../NumPad/Numpad';
import './Calculator.scss';

class Calculator extends Component {
    constructor(props) {
        super(props);

    this.state = {
        current: '0',
        prev: '',
        output: '',
        expression: false
    }
        this.handleInput = this.handleInput.bind(this);
        this.handleOperation = this.handleOperation.bind(this);
    }

    handleInput = (evt) => {
        const {value} = evt.target;
        const {current, prev ,output} = this.state;
        const endsWithOperator = /[+\-*/]$/ig;

        switch(value) {
            case 'AC':
                this.setState({
                    current: '0',
                    prev: '',
                    output: ''
                })
            break;

            case '.':
                if(!current.includes('.')) {
                    this.setState({
                        prev: prev + value,
                        current: current + value
                    })
                }
            break;

            default: 
                if(current === '0' || endsWithOperator.test(current)) {
                    this.setState({
                        current: value,
                        prev: prev + value,
                    })
                } else if(output) {
                    this.setState({
                        output: '',
                        current: value,
                        prev: value,
                    })
                } else {
                    this.setState({
                        current: current + value,
                        prev: prev + value,
                    })
                }
                 
            break;
        }
    }

    handleOperation = (evt) => {
        const {value} = evt.target;
        const {prev} = this.state;
        const endsWithOperator = /[+\-*/]$/ig;
        const endsWithNegative = /[+|*|\/|-]-$/ig;

        switch(value) {
            case '=':
                let expression = prev;
                expression = expression.replace('--', '- -');

                if(endsWithOperator.test(prev)) {
                    this.setState({
                        expression: false,
                        output: prev.slice(0, -1) + value + prev.slice(0, -1), 
                        current: prev.slice(0, -1)
                    }) 
                } else {
                    this.setState({
                        expression: false,
                        output: prev + value + eval(expression),
                        prev: eval(expression),
                        current: eval(expression)
                    })
                }
            break;

            default:
                if(!endsWithOperator.test(prev)) {
                    this.setState({
                        prev: prev + value,
                        current: value,
                        expression: true
                    }) 
                } else {
                    if(value === '-' && !endsWithNegative.test(prev)) {
                        this.setState({
                            prev: prev + value,
                            current: value
                        }) 
                    } else if(value !== '-' && endsWithNegative.test(prev)) {
                        this.setState({
                            prev: prev.slice(0, -2) + value,
                            current: value
                        }) 
                    } else {
                        this.setState({
                            current: value,
                            prev: prev.slice(0, -1) + value
                        }) 
                    }
                }
            break;

        }
    }

    render() {
        const {current, prev, expression, output} = this.state;

        return(
        <div className="Calculator">
            <Numpad
                current={current}
                prev={prev}
                expression={expression}
                output={output}
                handleInput={this.handleInput}
                handleOperation={this.handleOperation}
            />
        </div>
        )
    }
}

export default Calculator;