import React from 'react';
import './Drumpad.scss';

class Drumpad extends React.Component {
    constructor(props) {
      super(props);
      this.audio = React.createRef();
  
      this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }
  
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
    }
    
    handleKeyUp = () => { 
        this.audio.current.parentNode.classList.remove('active');
    }

    handleKeyDown = (event) => {
        const sound = this.audio.current;
        if(event.keyCode === this.props.triggerKey.charCodeAt() && !this.props.disabled) {
            sound.play();
            sound.currentTime = 0;
            sound.volume = this.props.volume;
            this.props.handleDisplay(this.props.id);
            sound.parentNode.classList.add('active');
        }
    }
  
    handleClick = () => {
        const sound = this.audio.current;
        sound.play();
        sound.currentTime = 0;
        sound.volume = this.props.volume;
        this.props.handleDisplay(this.props.id);
    }
  
    render() {
      return (
        <div 
        disabled= {this.props.disabled}
        className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
        >
          <p>{this.props.triggerKey}</p>
          <audio 
            ref={this.audio}
            src={this.props.src}
            volume={this.props.volume}
            className="clip"
            id={this.props.triggerKey}>
          </audio>
        </div>
      )
    }
  }

  export default Drumpad;