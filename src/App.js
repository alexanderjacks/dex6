import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import SimpleMenu from './SimpleMenu.js';
import logo from './logo.png';
import './App.css';

function Home () {
  return (
    <h1>
      HOME
    </h1>
  )
}

function Topics () {
  return (
    <h1>
      TOPICS
    </h1>
  )
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stuff: [
        {id: 1, name:'Pumpkin', type:'Crop', subtype:'Vegetable', sellprice: 320},
        {id: 2, name:'Pumpkin Seeds', type:'Item', subtype:'Seed', sellprice: 50},
        {id: 3, name:'Crystal Path', type:'Item', subtype:'Decor', sellprice: 1},
      ]
    }
  }
  
  componentDidMount() {      
    console.log("@ p p   m 0 u n t   $ u c c e $ $");
  }

  render(){

    const items = this.state.stuff.map((item, key) =>
        <li key={item.id}>{item.name}</li>
    );

    return (
    <Router>

      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo" />
          <SimpleMenu />
          <h2>
            Your Guide to Pelican Town
          </h2>
          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
          <Link to='/'>Home</Link>
          <Link to='/topics'>Topics</Link>
          <h3>
            Launching June 2019
          </h3>
          <a
            className="App-link"
            href="https://www.alexanderjacks.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built By AlexJacksApps
          </a>
        </header>
        <section>
         <ul>
          {items}
         </ul>
        </section>

      </div>
    </Router>
    );
  }
}

export default App;
