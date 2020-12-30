import './Timer.scss';

const timer = (props) => {
    const time = convertTime(props.time);
    const style = { color:  '#0c740c' }

    if(props.time < 60) {
        style.color = '#ff0000'
    }

    return(
        <div id="timer">
            <div id="timer-label">{props.currentLength}</div>
            <div id="time-left" style={style}>{time}</div>
            <button
            id="start_stop"
            onClick={props.start}>
            <i className={props.timeRunning ? "fas fa-pause" : "fas fa-play"}></i>
            </button>
            <button
            id="reset"
            onClick={props.reset}
            >
            <i className="fas fa-redo-alt"></i>  
            </button>
        </div>
    )
}

    /* Helper Function: Convert seconds time to mm:ss format */
    const convertTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? 0 + '' + minutes : minutes;
        seconds = seconds < 10 ? 0 + '' + seconds : seconds;
        return minutes + ':' + seconds;
    }

export default timer;