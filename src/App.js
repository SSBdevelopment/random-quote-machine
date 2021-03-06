import React, { Component } from 'react'
import './App.css';
import quotes from './quotes.js';

//function App() {
class App extends Component {
  constructor(props) {
    super(props);
    //set initial random quote using random function
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
    //update the quote
    this.setState({
      quote: currentQuote.quote,
      author: currentQuote.author
    })
  }

  render() {
    return (
      <div className="App">
        <h1 id="title" className="title">Random Quote Machine</h1>
        <div id="quote-box" className="quote-box">
          <p id="text" className="text">"{this.state.quote}"</p>
          <p id="author" className="author"> - {this.state.author} &emsp;</p>
          <header>
            <a id="tweet-quote" href={encodeURI(`http://www.twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`)}><button className="tweet-button">Tweet Quote</button></a>
            &emsp;
            <button id="new-quote" className="new-quote-button" onClick={this.handleClick}>New Quote</button>
          </header>
          <h1> </h1>
        </div>
        <h1 className="tag-line">An App by <a href="https://github.com/SSBdevelopment/random-quote-machine">Stephen</a> </h1>
      </div>
    );
  }
}

export default App;