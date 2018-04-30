import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    items:[]
  }

  componentWillMount(){
    const temp = []
    for(let i=1;i<10;i++){
      temp.push(i)
    }
    this.setState({
      items:temp
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.items.map((item)=>{
          return (
            <div className="item">{item}</div>
          )
        })}
      </div>
    );
  }
}

export default App;
