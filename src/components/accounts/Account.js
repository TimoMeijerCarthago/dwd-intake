import React, { Component } from 'react'

import DWDPaper from '../DWDPaper'

import TextField from '@material-ui/core/TextField'
import * as firebase from '../../firebase/firebase'
import * as database from '../../firebase/database'

class Account extends Component {

    constructor(props) {
        super(props)

        this.state = {
            account: {

            }
        }
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(async(authUser) => {
            try {
                const account = await database.readAccountInfo(authUser.uid)
                this.setState({ account: account.val() })
            } catch (error) {
                this.setState({ account: null })
            }
        })
    }

    render() {
        const { email, firstName, lastName, company, country, postalCode, number } = this.state.account

        return (
            <DWDPaper>
                <TextField
                    label='E-mailadres'
                    value={ email ? email : '' }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Voornaam'
                    value={ firstName ? firstName : '' }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Achternaam'
                    value={ lastName ? lastName : '' }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Bedrijf'
                    value={ company ? company : '' }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Land'
                    value={ country ? country : '' }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Postcode'
                    value={ postalCode ? postalCode : '' }
                    margin='normal'
                    fullWidth
                    disabled
                />

                <TextField
                    label='Huisnummer'
                    value={ number ? number : '' }
                    margin='normal'
                    fullWidth
                    disabled
                />

            </DWDPaper>
        )
    }

}

export default Account
