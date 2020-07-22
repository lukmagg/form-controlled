import React, { Component } from 'react';
import './App.css';


class App extends Component{
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  }
  
  constructor (props){
    super(props);
    this.state = {name: 'Default name'};
  }

  
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            {this.state.name}
          </h1>
          <p className="App-intro">
            <div><lavel>Sample text</lavel></div>
            <div>
              <input type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </p>
        </header>
      </div>

    );
  }
}


export default App;
