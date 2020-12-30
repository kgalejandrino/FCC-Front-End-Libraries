import './PowerControl.scss';

const powerControl = (props) => {
    const powerStyle = props.power ? {color: 'red'} : {color: 'green'};
    const volume = Math.floor(props.volume * 100);
    return (
        <div id="left-panel">
            <div id="start">
                <i 
                className="fa fa-power-off icon-power" 
                onClick={props.click} 
                aria-hidden="true"
                style={powerStyle}
                >
                </i>
            </div>
            <div id="volume">
            <input 
            type="range" 
            min="0" 
            max="1"
            step="0.01"
            value={props.volume}
            onChange={props.change}>
            </input>
            <p>Volume: {volume}</p>
            </div>
      </div> 
    ) 
}

export default powerControl;