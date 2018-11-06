import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Search from './Components/Search'




export default(
    <Switch>
        <Route exact path= '/' component={Auth} />
        <Route exact path= '/Profile' component={Profile} />
        <Route exact path= '/Dashboard' component={Dashboard} />
        <Route exact path= '/Search' component={Search} />
        {/* <Route exact path= '/Search2' component={Search} /> */}
    </Switch>

)