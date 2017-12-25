# React-File-Uploader

### Installation

```bash
npm install react-file-uploader-preview --save
```



### [Demo](http://othmaneblial.github.io/react-file-uploader/)


### Example

```js
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

```


### Development
Want to run demos locally

```bash
git clone https://github.com/othmaneblial/reselect-for-react
npm install
npm run start
open http://localhost:3000
```
