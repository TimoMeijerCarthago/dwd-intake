import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router'

import ValidateEmail from '../errors/ValidateEmail'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'
import Welcome from '../dashboards/Welcome'


class NotAuthenticatedRoutes extends Component {

    render() {
        return (
            <Switch>
                <Route path='/validate-email' exact component={ ValidateEmail } />
                <Route path='/login' exact component={ LoginForm }/>
                <Route path='/register' exact component={ RegisterForm }/>
                <Route path='/' component={ Welcome }/>
                <Route path='*' render={ () => (
                    <Redirect to='/' />
                ) }/>
            </Switch>
        )
    }

}

export default NotAuthenticatedRoutes
