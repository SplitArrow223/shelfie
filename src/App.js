import React, { Component } from 'react';
import {HashRouter as Router, Link} from 'react-router-dom'
import './App.css';

import routes from './components/routes'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <Router>
      <div className='app'>
      <Header>  
      <nav className="nav">
         <div>SHELFIE</div>
         <Link to='/' className='links'>Dashboard</Link>
         <Link to='/add' className='links'>Add Inventory</Link> 
         <Link to='/edit/:id' className='links'>Edit Product</Link> 
      </nav>
       {routes}
      </Header>
      </div>
      </Router>
    );
  }
}

export default App;
