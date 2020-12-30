import React, {Component } from 'react';
import Editor from '../components/Editor/Editor';
import Previewer from '../components/Previewer/Previewer';
import Toolbar from '../components/Toolbar/Toolbar';
import './App.scss';

const initMardown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!  
Or _italic_.  
Or... wait for it... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.  

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------| -------------| -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: initMardown
    }

    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }

  render() {
    return (
      <div className="App">
        <h1 id="title">Markdown Previewer</h1>
        <div id="flex">
          <div className="container">
              <Toolbar title='Editor'/>
              <Editor 
                  onChange={this.handleChange}
                  value={this.state.value}
              />
            </div>

          <div className="container">
            <Toolbar title='Preview'/>
            <Previewer markdown={this.state.value}/>
          </div>     
        </div>
      </div>
    )
  }
}

export default App;
