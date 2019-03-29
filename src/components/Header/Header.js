import React, { Component } from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form'

class Header extends Component {
   render() {
       return(
          <div className='header'> 
            <div>
             <Link to='/'>
               <button>Dashboard</button>
             </Link>
             <Link to='/add'>
               <button>Add Inventory</button>
             </Link>
            </div> 
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/add' component={Form} />
            </Switch>
          </div>
       )
   }
}
export default Header