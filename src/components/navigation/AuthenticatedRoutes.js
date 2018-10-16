import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Account from '../accounts/Account'
import Welcome from '../dashboards/Welcome'

class AuthenticatedRoutes extends Component {

    render() {
        return (
            <Switch>
                <Route path='/account' exact component={ Account } />
                <Route path='*' component={ Welcome }/>
            </Switch>
        )
    }

}

export default AuthenticatedRoutes
