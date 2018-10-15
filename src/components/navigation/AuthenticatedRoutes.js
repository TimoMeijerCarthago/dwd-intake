import React, { Component } from 'react'

import PropTypes from 'prop-types'

import {Redirect, Route, Switch} from 'react-router'

import Account from '../accounts/Account'


class AuthenticatedRoutes extends Component {

    static propTypes = {
        authUser: PropTypes.object.isRequired
    }

    render() {
        const { authUser } = this.props

        return (
            <Switch>
                <Route
                    path='/account'
                    exact
                    component={
                        <Account
                            email={ authUser.email }
                            firstName={ authUser.firstName }
                            lastName={ authUser.lastName }
                            company={ authUser.company }
                            country={ authUser.country }
                            postalCode={ authUser.postalCode }
                            number={ authUser.number }
                        />
                    } />
                <Route path='*' render={ () => (
                    <Redirect to='/account' />
                ) }/>
            </Switch>
        )
    }

}

export default AuthenticatedRoutes
