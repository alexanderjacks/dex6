import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SimpleMenu from './SimpleMenu.js';
import logo from './logo.png';
import './App.css';

class People extends Component {

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
      <div className="App">
        

        <header className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo" />
          <SimpleMenu />
          <h2>
            PEOPLE
          </h2>
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
    );
  }
}

export default People;
