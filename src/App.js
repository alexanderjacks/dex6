import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Items from './Items.js';
import People from './People.js';
import Recipes from './Recipes.js';

import logo from './logo.png';
import './App.css';

const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  { path: '/items',
    sidebar: () => <div>items!</div>,
    main: () => <h1>Items</h1>
  },
  { path: '/people',
    sidebar: () => <div>people!</div>,
    main: () => <h1>People</h1>
  },
  { path: '/recipes',
    sidebar: () => <div>recipes!</div>,
    main: () => <h1>Recipes</h1>
  }
]


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
      <div className="App">
        <Router><div>
          <header className="App-header">
            <img src={logo} className="App-logo pulse" alt="logo" />

            <h2>
              Your Guide to Pelican Town
            </h2>
            <h3>
              Launching June 2019
            </h3>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
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
             <div style={{ display: 'flex' }}>
              <div style={{
                padding: '10px',
                width: '40%',
                background: '#f0f0f0'
              }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/items">Items</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
              </ul>
            </div>
          </div>
          </section>
        </div></Router>
      </div>

    );
  }
}

export default App;
