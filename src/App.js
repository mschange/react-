import React, { Component } from 'react';
// import Tabar from './components/tabar';
import RourerMap from './router'
import './static/iconfont.css';
import './App.css';


console.log(RourerMap)
class App extends Component {
  render() {
    return (
      <div className="App">
        <RourerMap />
      </div>
    );
  }
}

export default App;
