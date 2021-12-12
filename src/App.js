import React, { Component } from 'react'
import './App.css';
import './styles.css';

//function App() {
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="quote">Random Quote</h1>
      {/*<h1 quote={this.getQuote}>{quote}</h1>*/}
      </div>
    );
  }
}

export default App;
