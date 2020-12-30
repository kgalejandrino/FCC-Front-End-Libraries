import './Previewer.scss';

let marked = require('marked');

const previewer = (props) => {
    return (
      <div 
      id='preview'
      className="notepad"
      dangerouslySetInnerHTML = {{
        __html: marked(props.markdown)
      }}
      />
    )
}

export default previewer;