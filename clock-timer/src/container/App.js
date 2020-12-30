import React, { Component } from 'react';
import TimerControl from '../components/TimerControl/TimerControl';
import Timer from '../components/Timer/Timer';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      time: 1500,
      timeRunning: false, 
      currentLength: 'Session', 
      timeID: ''
    }

    this.breakLengthControl = this.breakLengthControl.bind(this);
    this.sessionLengthControl = this.sessionLengthControl.bind(this);
    this.lengthControlHandler = this.lengthControlHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
  }

  lengthControlHandler = (lengthType, value, length, status) => {    
    if(lengthType === 'sessionLength' && !status) {
      if(value === '-' && length !== 1) {
        this.setState({
           [lengthType]: length - 1,
           time:  (length - 1) * 60
          })
      } else if(value === '+' && length !== 60) {
        this.setState({ 
          [lengthType]: length + 1,
          time:  (length + 1) * 60
        })
      }
    } else if(lengthType === 'breakLength' && !status){
      if(value === '-' && length !== 1) {
        this.setState({ [lengthType]: length - 1 } )
      } else if(value === '+' && length !== 60) {
        this.setState({ [lengthType]: length + 1 } )
      }
    }
  }
  
  breakLengthControl = (evt) => {
    this.lengthControlHandler('breakLength', evt.currentTarget.value, this.state.breakLength, this.state.timeRunning);
  }

  sessionLengthControl = (evt) => {
    this.lengthControlHandler('sessionLength', evt.currentTarget.value, this.state.sessionLength, this.state.timeRunning);
  }

  resetHandler = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      time: 1500,
      timeRunning: false, 
      currentLength: 'Session', 
      timeID: undefined
    })
    this.audio.pause();
    this.audio.currentTime = 0;
    clearInterval(this.state.timeID);
  }

  timeHandler = () => {
    this.setState({ timeRunning: !this.state.timeRunning });
    
    if(!this.state.timeRunning) {
      this.startTime();
    } else {
      clearInterval(this.state.timeID);
    }
  }

  startTime = () => {
    this.setState({
      timeID: setInterval(this.timeCountDown, 1000)
    })
  }

  timeCountDown = () => {
    const {time, timeID, currentLength, breakLength, sessionLength } = this.state;
    this.setState({time: time - 1});

    if(time === 0) {
      this.audio.play();
      clearInterval(timeID);

      if(currentLength === 'Session') {
        this.setState({
          currentLength: 'Break',
          time: breakLength * 60
        })
        this.startTime();
      } else if(currentLength === 'Break') {
        this.setState({
          currentLength: 'Session',
          time: sessionLength * 60
        })
        this.startTime();
      }
    }
  }

  render() {
    const { breakLength, sessionLength, timeRunning, currentLength, time } = this.state;

    return(
      <div className="App">
        <div id="container">
          <div id="app-title">25 + 5 Clock</div>
          <Timer 
            reset={this.resetHandler}
            time={time}
            timeRunning={timeRunning}
            start={this.timeHandler}
            currentLength={currentLength}
          />
          <div id="control-container">
            <TimerControl 
              idLabel="break-label"
              title="Break Length"
              decId="break-decrement"
              idLength="break-length"
              length={breakLength}
              incId="break-increment"
              click={this.breakLengthControl}
            />
            <TimerControl 
              idLabel="session-label"
              title="Session Length"
              decId="session-decrement"
              idLength="session-length"
              length={sessionLength}
              incId="session-increment"
              click={this.sessionLengthControl}
            />
          </div>
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          ref={(audio) => { this.audio = audio; }}
        />
        </div>
      </div>
    )
  }
}

export default App;