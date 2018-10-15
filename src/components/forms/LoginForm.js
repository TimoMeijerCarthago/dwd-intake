import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import api from '../../api/account'

import DWDPaper from '../DWDPaper'
import DWDDivider from '../DWDDivider'

import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    button: {
        marginTop: theme.spacing.unit * 3
    }
})

class LoginForm extends Component {

    static propTypes = {
        classes: PropTypes.any
    }

    constructor(props) {
        super(props)

        this.state = {
            account: {
                email: '',
                password: ''
            }
        }
    }

    /**
     * Handle the change event for the input fields
     *
     * @param {Event} event the input event
     * @return {void}
     */
    onChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        let { account } = this.state
        account[name] = value
        this.setState({ account })
    }

    /**
     * Handle the submit of the form
     *
     * @param {Event} event the submit event
     * @return {Promise<void>} -
     */
    onSubmit = async(event) => {
        event.preventDefault()
        try {
            const response = await api.login(this.state.account)
            if (response.status === 'success') {
                // Show successful login message
            }
        } catch (error) {
            // Handle some error
        }
    }

    render() {
        const { classes } = this.props

        return (
            <DWDPaper>
                <Typography component='h1' variant='h4'>
                    Login
                </Typography>
                <DWDDivider />

                <form onSubmit={ this.onSubmit }>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>E-mailadres</InputLabel>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            onChange={ this.onChange }
                            value={ this.state.account.email }
                            autoComplete='email'
                            autoFocus />
                    </FormControl>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>Wachtwoord</InputLabel>
                        <Input
                            id='password'
                            name='password'
                            onChange={ this.onChange }
                            value={ this.state.account.password } />
                    </FormControl>

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={ classes.button }>
                        Inloggen
                    </Button>
                    <Link to='/register'>
                        <Button
                            type='button'
                            fullWidth
                            color='primary'
                            className={ classes.button }>
                            Registreren
                        </Button>
                    </Link>
                </form>

            </DWDPaper>
        )
    }

}
export default withStyles(styles)(LoginForm)
