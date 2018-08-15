import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Appbar from './components/appbar';
import Sidebar from './components/sidebar';

const Body = Styled.body`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class App extends Component {
  constructor() {
  super()
    
    this.state = {
      name: '',
      clan: '',
      javascriptRank: '',
      overallRank: '', 
      honor: ''
    }
  }

  componentDidMount() {
    axios('/api/user/')
    .then(results => {
      let { name, clan, ranks, honor } = results.data;

      this.setState({ 
        name,
        clan,
        javascriptRank: ranks.languages.javascript.name,
        overallRank: ranks.overall.name,
        honor,
        data: results.data
      });
    })
  }


  render() {
    return (
      <Body>
        <Sidebar />
        <Appbar 
          honor={this.state.honor}
        />
        <p>{this.state.name}</p>
        <p>{this.state.clan}</p>
        <p>JavaScript: {this.state.javascriptRank}</p>
        <p>Overall: {this.state.overallRank}</p>
        
      </Body>
    );
  }
}

export default App;
