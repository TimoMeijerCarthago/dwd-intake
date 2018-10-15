import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { auth } from '../../firebase'

import DWDPaper from '../DWDPaper'
import DWDDivider from '../DWDDivider'

import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'

import withStyles from '@material-ui/core/styles/withStyles'


const styles = (theme) => ({
    button: {
        marginTop: theme.spacing.unit * 3
    }
})

class LoginForm extends Component {

    static propTypes = {
        classes: PropTypes.any,
        history: PropTypes.any
    }

    constructor(props) {
        super(props)

        this.state = {
            account: {
                email: '',
                password: ''
            },
            errorMessage: {
                general: '',
                email: ''
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

        // Reset the error message
        let errorMessage = {
            general: '',
            email: ''
        }
        try {
            const { email, password } = this.state.account
            const response = await auth.doSignInWithEmailAndPassword(email, password)
            const user = response.user
            if (user.emailVerified) {
                this.props.history.push('/account')
            } else {
                this.props.history.push('/validate-email')
            }
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage.email = 'Invalide e-mailadres/wachtwoord combinatie'
                    break
                default:
                    errorMessage.general = 'Onbekende fout opgetreden'
                    break
            }
        }
        this.setState( { errorMessage } )
    }

    render() {
        const { classes } = this.props
        const { errorMessage } = this.state

        return (
            <DWDPaper>
                <Typography component='h1' variant='h4'>
                    Login
                </Typography>
                <DWDDivider />

                <Typography component='' color='error'>
                    { errorMessage.general }
                </Typography>

                <form onSubmit={ this.onSubmit }>
                    <FormControl
                        margin='normal'
                        error={ errorMessage.email !== '' }
                        required
                        fullWidth>
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

                    <FormControl
                        margin='normal'
                        error={ errorMessage.email !== '' }
                        required
                        fullWidth>
                        <InputLabel htmlFor='password'>Wachtwoord</InputLabel>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            onChange={ this.onChange }
                            value={ this.state.account.password } />
                        <FormHelperText>{ errorMessage.email }</FormHelperText>
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
