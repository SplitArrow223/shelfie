import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard/Dashboard'
import Form from './Form/Form'

export default (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/add' component={Form} />
        <Route path='/edit/:id' component={Form} />
    </Switch>
)