import React, { Component } from 'react'

import PropTypes from 'prop-types'

import DWDPaper from '../DWDPaper'

import TextField from '@material-ui/core/TextField'

class Account extends Component {

    static propTypes = {
        email: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        company: PropTypes.string,
        country: PropTypes.string.isRequired,
        postalCode: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }

    static defaultProps = {
        company: ''
    }

    render() {
        const { email, firstName, lastName, company, country, postalCode, number } = this.props

        return (
            <DWDPaper>
                <TextField
                    label='E-mailadres'
                    value={ email }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Voornaam'
                    value={ firstName }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Achternaam'
                    value={ lastName }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Bedrijf'
                    value={ company }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Land'
                    value={ country }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Postcode'
                    value={ postalCode }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Huisnummer'
                    value={ number }
                    margin='normal'
                    fullWidth
                    disabled
                />

            </DWDPaper>
        )
    }

}

export default Account
