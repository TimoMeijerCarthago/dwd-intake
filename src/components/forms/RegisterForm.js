import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { auth, database } from '../../firebase'

import DWDPaper from '../DWDPaper'
import DWDDivider from '../DWDDivider'

import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    button: {
        marginTop: theme.spacing.unit * 3
    }
})

class RegisterForm extends Component {

    static propTypes = {
        classes: PropTypes.any,
        history: PropTypes.any
    }

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            company: '',
            country: '',
            postalCode: '',
            number: '',
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

        let state = this.state
        state[name] = value
        this.setState(state)
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
            const { email, password, firstName, lastName, company, country, postalCode, number } = this.state
            const response = await auth.doCreateUserWithEmailAndPassword(email, password)
            const user = response.user
            await database.createAccountInfo(user.uid, email, firstName, lastName, company, country, postalCode, number)
            if (user.emailVerified) {
                this.props.history.push('/account')
            } else {
                this.props.history.push('/validate-email')
            }
        } catch (error) {
            console.log(error)
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage.email = 'Dit e-mailadres is al in gebruik'
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
                    Registreren
                </Typography>
                <DWDDivider />

                <Typography component='p' color='error'>
                    { errorMessage.general }
                </Typography>

                <form onSubmit={ this.onSubmit }>
                    <Typography component='h3' variant='h6'>
                        Login gegevens
                    </Typography>
                    <DWDDivider />

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
                            value={ this.state.email }
                            autoFocus />
                        <FormHelperText>{ errorMessage.email }</FormHelperText>
                    </FormControl>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>Wachtwoord</InputLabel>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            onChange={ this.onChange }
                            value={ this.state.password } />
                        <FormHelperText>Gebruik minimaal 8 tekens</FormHelperText>
                    </FormControl>

                    <Typography component='h3' variant='h6'>
                        Contactgegevens
                    </Typography>
                    <DWDDivider />

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='firstName'>Voornaam</InputLabel>
                        <Input
                            d='firstName'
                            name='firstName'
                            onChange={ this.onChange }
                            value={ this.state.firstName } />
                    </FormControl>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='lastName'>Achternaam</InputLabel>
                        <Input
                            id='lastName'
                            name='lastName'
                            onChange={ this.onChange }
                            value={ this.state.lastName } />
                    </FormControl>

                    <FormControl margin='normal' fullWidth>
                        <InputLabel htmlFor='company'>Bedrijf</InputLabel>
                        <Input
                            id='company'
                            name='company'
                            onChange={ this.onChange }
                            value={ this.state.company } />
                    </FormControl>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='country'>Land</InputLabel>
                        <Input
                            id='country'
                            name='country'
                            onChange={ this.onChange }
                            value={ this.state.country } />
                    </FormControl>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='postalCode'>Postcode</InputLabel>
                        <Input
                            id='postalCode'
                            name='postalCode'
                            onChange={ this.onChange }
                            value={ this.state.postalCode } />
                    </FormControl>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='number'>Huisnummer</InputLabel>
                        <Input
                            id='number'
                            name='number'
                            onChange={ this.onChange }
                            value={ this.state.number } />
                    </FormControl>

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={ classes.button }>
                        Registreer
                    </Button>
                    <Link to='/login'>
                        <Button
                            type='button'
                            fullWidth
                            color='primary'
                            className={ classes.button }>
                            Inloggen
                        </Button>
                    </Link>
                </form>
            </DWDPaper>
        )
    }

}

export default withStyles(styles)(RegisterForm)
