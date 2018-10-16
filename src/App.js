import React, { Component } from 'react'

import './styles/app.scss'

import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { firebase } from './firebase'

import Grid from '@material-ui/core/Grid'

import Header from './components/headers/Header'
import Routes from './components/navigation/Routes'

const history = createBrowserHistory()

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            authUser: null
        }
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged((authUser) => {
            // eslint-disable-next-line no-unused-expressions
            authUser ? this.setState({ authUser }) : this.setState({ authUser: null })
        })
    }

    render() {
        const { authUser } = this.state

        return (
            <div className='app'>
                <header className='app-header'>

                    <Router history={ history }>
                        <div className='app-container'>
                            <Header authUser={ authUser }/>

                            <Grid container>
                                <Routes authUser={ authUser } />
                            </Grid>
                        </div>
                    </Router>

                </header>
            </div>
        )
    }

}

export default App
