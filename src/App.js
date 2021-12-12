import React, { Component } from 'react'
import './App.css';
import './styles.css';
import quotes from './quotes.js';

//function App() {
class App extends Component {
  constructor(props) {
    super(props);
    let initial_index = Math.floor(Math.random() * quotes.length);
    let currentQuote = quotes[initial_index];
    this.state = {
      quote: currentQuote.quote,
      author: currentQuote.author
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //change the quote
    //ensure quote is not repeated twice in a row
    let index = Math.floor(Math.random() * quotes.length);
    while(index === this.initial_index) {
      index = Math.floor(Math.random() * quotes.length);
    }
    this.initial_index = index;
    let currentQuote = quotes[index];

    this.setState({
      quote: currentQuote.quote,
      author: currentQuote.author
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="quote">Random Quote</h1>
        <p>{this.state.quote}</p>
        <p> - {this.state.author}</p>
      <header>
        <button className="new-quote" onClick={this.handleClick}>New Quote</button>
      </header>
      </div>
    );
  }
}

export default App;
