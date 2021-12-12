import React, { Component } from 'react'
import './App.css';
import './styles.css';

//function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*quote:
      author:*/
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //change the quote

  }

  render() {
    return (
      <div className="App">
        <h1 className="quote">Random Quote</h1>
      {/*<p quote={this.state.quote}>{quote}</p>*/}
      {/*<p author={this.state.author}>{author}</p>*/}
      <header>
        <button className="new-quote" onClick={this.handleClick}>New Quote</button>
      </header>
      </div>
    );
  }
}

export default App;
