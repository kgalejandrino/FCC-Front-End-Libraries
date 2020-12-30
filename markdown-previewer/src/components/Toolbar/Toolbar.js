import './Toolbar.scss';

const toolbar = (props) => {
    return (
      <div className="toolbar">
          <i className="fas fa-paper-plane" id="icon"></i>
        <span>{props.title}</span>
      </div>
    )
}

export default toolbar;