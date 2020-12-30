import './TimeControl.scss';

const timerControl = (props) => {
    return(
        <div id="timer-control">
            <div id={props.idLabel}>
                {props.title}
            </div>
            <button
            value="-"
            onClick={props.click}
            id={props.decId}
            >
            <i className="fas fa-sort-down icon-length"></i>         
            </button>
            <span id={props.idLength}>{props.length}</span>
            <button
            value="+"
            onClick={props.click}
            id={props.incId}
            >
            <i className="fas fa-sort-up icon-length"></i>       
            </button>
        </div>
    )
}

export default timerControl;