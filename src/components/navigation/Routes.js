import React, { Component } from 'react'

import PropTypes from 'prop-types'

import AuthenticatedRoutes from './AuthenticatedRoutes'
import NotAuthenticatedRoutes from './NotAuthenticatedRoutes'


class Routes extends Component {

    static propTypes = {
        authUser: PropTypes.object
    }

    render() {
        const { authUser } = this.props

        if (authUser && authUser.emailVerified) {
            return <AuthenticatedRoutes authUser={ authUser } />
        } else {
            return <NotAuthenticatedRoutes />
        }
    }

}

export default Routes
