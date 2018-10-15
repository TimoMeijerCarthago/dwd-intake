import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import DWDPaper from '../DWDPaper'

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
        classes: PropTypes.any
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
            number: ''
        }
    }

    onChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        let state = this.state
        state[name] = value
        this.setState(state)
    }

    render() {
        const { classes } = this.props

        return (
            <DWDPaper>
                <Typography component='h1' variant='h4'>
                    Registreren
                </Typography>
                <form>
                    <Typography component='h3' variant='h6'>
                        Login gegevens
                    </Typography>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>E-mailadres</InputLabel>
                        <Input
                            id='email'
                            name='email'
                            onChange={ this.onChange }
                            value={ this.state.email }
                            autoFocus />
                    </FormControl>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>Wachtwoord</InputLabel>
                        <Input
                            id='password'
                            name='password'
                            onChange={ this.onChange }
                            value={ this.state.password } />
                        <FormHelperText>Gebruik minimaal 8 tekens</FormHelperText>
                    </FormControl>

                    <Typography component='h3' variant='h6'>
                        Contactgegevens
                    </Typography>

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
