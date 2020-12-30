import './Editor.scss';

const editor = (props) => {
    return (
      <textarea
      type="text" 
      id="editor"
      className="notepad"
      value={props.value}
      onChange={props.onChange}
      />
    )
}

export default editor;