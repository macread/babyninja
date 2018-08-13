import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
  super()
    
    this.state = {
      name: '',
      clan: '',
      javascriptRank: '',
      overallRank: ''
    }
  }

  componentDidMount() {
    axios('/api/user/')
    .then(results => {
      let { name, clan, ranks } = results.data;

      this.setState({ 
        name,
        clan,
        javascriptRank: ranks.languages.javascript.name,
        overallRank: ranks.overall.name,
        data: results.data
      });
    })
  }


  render() {
    return (
      <div className="App">
        <p>{this.state.name}</p>
        <p>{this.state.clan}</p>
        <p>JavaScript: {this.state.javascriptRank}</p>
        <p>Overall: {this.state.overallRank}</p>
        
      </div>
    );
  }
}

export default App;
