import React from 'react';
import Calculator from '../components/Calculator/Calculator';
import './App.scss';

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Calculator />
            </div>
        )
    }
}

export default App;