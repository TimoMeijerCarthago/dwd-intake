import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { auth } from '../../firebase'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
    root: {
        flexGrow: 1
    },
    brand: {
        flexGrow: 1,
        textAlign: 'left'
    },
    login: {
        color: 'white'
    }
}

class Header extends Component {

    static propTypes = {
        classes: PropTypes.any,
        authUser: PropTypes.object
    }

    logout = () => {
        auth.doSignOut()
    }

    render() {
        const { classes, authUser } = this.props

        return (
            <div className={ classes.root }>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography component='h6' variant='h6' color='inherit' className={ classes.brand }>
                            Drukwerkdeal intake
                        </Typography>

                        { authUser !== null ?
                            <Button className={ classes.login } onClick={ this.logout }>Uitloggen</Button>
                            :
                            <Link to='/login'>
                                <Button className={ classes.login }>Inloggen / Registreren</Button>
                            </Link>}

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header)
