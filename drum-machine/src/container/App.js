import React from 'react';
import Drumpad from '../components/Drumpad/Drumpad';
import PowerControl from '../components/PowerControl/PowerControl';
import Display from '../components/Display/Display';
import './App.scss';

const data = [
  {
    triggerKey: 'Q',
    id: 'Heater-1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    triggerKey: 'W',
    id: 'Heater-2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    triggerKey: 'E',
    id: 'Heater-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    triggerKey: 'A',
    id: 'Heater-4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    triggerKey: 'S',
    id: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    triggerKey: 'D',
    id: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    triggerKey: 'Z',
    id: "Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    triggerKey: 'X',
    id: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    triggerKey: 'C',
    id: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      source: data,
      textDisplay: 'Power Off',
      volume: 0.5
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  handleVolume = (event) => {
    if(!this.state.power) {
      this.setState({
        volume: event.target.value
      });
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      power: !prevState.power, 
      textDisplay: this.state.power ? 'Power On': 'Power Off'
    })); 
  }

  handleDisplay = str => this.setState({textDisplay:str}) 

  render() {
    const {source, power, volume,textDisplay} = this.state;

    return(
      <div id="drum-machine">
        <div id="container">
          <h1>Drum Machine</h1>
          <div id="panel">
            <PowerControl 
            click={this.handleClick}
            power={power}
            volume={volume}
            change={this.handleVolume}
            />
            <div id="right-panel">
              <div id="pad-container">
                <Display textDisplay={textDisplay}/>
                {source.map(data => (
                  <Drumpad
                    disabled={this.state.power}
                    key={data.id} 
                    id={data.id}
                    triggerKey={data.triggerKey}
                    src={data.src}
                    volume={this.state.volume}
                    handleDisplay={this.handleDisplay}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
