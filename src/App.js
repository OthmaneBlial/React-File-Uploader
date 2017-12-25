import React, { Component } from 'react';
import FileUploader from './FileUploader';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      files: [],
    }
  }

  setFiles = (files) => {
    this.setState({files: files});
  }

  render() {
    return (
      <div>
        <FileUploader getFiles={this.setFiles} />
      </div>
    );
  }
}

export default App;
