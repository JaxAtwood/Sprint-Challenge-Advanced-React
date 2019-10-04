import React, { Component } from 'react';
import Data from "./components/Data";
import NavBar from "./hooks/NavBar";
import { Darker } from "./components/Styles";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      things: ""
  
    };
  }

  render() {
  return (
    <div className="App">
      <Darker className="toggleBox">
        <p>Too Bright? Click me.</p>
        <NavBar />
      </Darker>

      <div>
        <h1>Here's Some Useless Information!</h1>
        <Data 
            things={this.state.things}
            />
      </div>
    </div>
    );
  }
}

export default App;
