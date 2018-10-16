import React, { Component } from 'react'

import PropTypes from 'prop-types'

import AuthenticatedRoutes from './AuthenticatedRoutes'
import NotAuthenticatedRoutes from './NotAuthenticatedRoutes'

class Routes extends Component {

    static propTypes = {
        authUser: PropTypes.object,
        account: PropTypes.any
    }

    render() {
        const { authUser } = this.props

        if (authUser && authUser.emailVerified) {
            return <AuthenticatedRoutes />
        } else {
            return <NotAuthenticatedRoutes />
        }
    }

}

export default Routes
