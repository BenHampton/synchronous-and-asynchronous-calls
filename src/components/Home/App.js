import React, { Component } from 'react';
import FetchComponent from '../Fetch/FetchComponent';
import './css/App.css';
import AjaxComponent from "../Ajax/AjaxComponent";

class App extends Component {

  render() {
    return (
      <div className="App">

          <div className={'App-header'}>
              {/*<FetchComponent />*/}
              <AjaxComponent />
          </div>

      </div>
    );
  }
}

export default App;
