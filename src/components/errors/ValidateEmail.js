import React, { Component } from 'react'

import DWDPaper from '../DWDPaper'

import Typography from '@material-ui/core/Typography'

class ValidateEmail extends Component {

    render() {
        return (
            <DWDPaper>
                <Typography component='p'>U moet uw e-mail eerst valideren, controleer uw mailbox.</Typography>
            </DWDPaper>
        )
    }
}

export default ValidateEmail
