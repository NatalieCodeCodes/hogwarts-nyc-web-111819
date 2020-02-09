import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTile from './HogTile'

class App extends Component {

  state = {
    hogs,
    showGreased: false,
    sort: ""
  }

  switchBetwGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  handleChange = (event) => {
    this.setState({
      sort: event.target.value
    })
  }
  
  render() {
    
    let displayedHogs = this.state.hogs
    
    if (this.state.showGreased) {
      displayedHogs = displayedHogs.filter(hog => hog.greased)
    } else {
      displayedHogs = displayedHogs.filter(hog => hog.greased === false)
    }
    
    if (this.state.sort === "name") {
      displayedHogs.sort((a, b) => {
        let nameA = a.name.toUpperCase(); 
        let nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    }

    if (this.state.sort === "weight") {
      displayedHogs.sort((a, b) => a.weight - b.weight)
    }


    return (
      <div className="App">
          < Nav switchBetwGreased={this.switchBetwGreased} showGreased={this.state.showGreased} handleChange={this.handleChange}/>
          {displayedHogs.map(hog => 
            <HogTile 
            {...hog}
            key={hog.name}
            />)}
      </div>
    )
  }
}

export default App;
