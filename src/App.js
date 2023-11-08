import GalitComponent from './components/galit-component';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
}

componentDidUpdate(){
  console.log('now')
  if(this.state.count === 5)
  {
    this.setState.count = 0;
  }
}

  render() {
    const {count} = this.state

    return (
      <div>
        
        <GalitComponent />
      
      </div>
    );
  }
}
export default App;
