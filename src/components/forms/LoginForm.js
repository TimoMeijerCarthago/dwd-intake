import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import DWDPaper from '../DWDPaper'

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

    render() {
        const { classes } = this.props

        return (
            <DWDPaper>
                <Typography component='h1' variant='h4'>
                    Login
                </Typography>
                <form>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>E-mailadres</InputLabel>
                        <Input id='email' name='email' autoComplete='email' autoFocus />
                    </FormControl>

                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>Wachtwoord</InputLabel>
                        <Input id='password' name='password' />
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
