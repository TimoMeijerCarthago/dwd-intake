import React, { Component } from 'react'

import PropTypes from 'prop-types'

import DWDPaper from '../DWDPaper'

import Typography from '@material-ui/core/Typography'

class Welcome extends Component {

    static propTypes = {
        classes: PropTypes.any
    }

    render() {
        return (
            <DWDPaper>
                <Typography variant='h6'>
                    Welkom bij het intake project van Timo Meijer welke gemaakt is voor Drukwerkdeal.nl
                </Typography>
            </DWDPaper>
        )
    }

}

export default (Welcome)
