import './Display.scss';

const display = (props) => {
    return (
        <div id="display">
            <p>{props.textDisplay}</p>
        </div>
    )
}

export default display;