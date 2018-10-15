import React, { Component } from 'react'

import './styles/app.scss'

import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Grid from '@material-ui/core/Grid'

import Header from './components/headers/Header'
import Welcome from './components/dashboards/Welcome'
import LoginForm from './components/forms/LoginForm'
import RegisterForm from './components/forms/RegisterForm'

const history = createBrowserHistory()

class App extends Component {

    render() {
        return (
            <div className='app'>
                <header className='app-header'>

                    <Router history={ history }>
                        <div className='app-container'>
                            <Header />

                            <Grid container>
                                <Switch>
                                    <Route path='/login' exact component={ LoginForm }/>
                                    <Route path='/register' exact component={ RegisterForm } />
                                    <Route path='/' component={ Welcome } />
                                    <Route path='*' component={ Welcome }/>
                                </Switch>
                            </Grid>
                        </div>
                    </Router>

                </header>
            </div>
        )
    }

}

export default App
