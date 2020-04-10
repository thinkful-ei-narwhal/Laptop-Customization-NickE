import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Main features={this.props.features} />
      </div>
    );
  }
}

export default App;
