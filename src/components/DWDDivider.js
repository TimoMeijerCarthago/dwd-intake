import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Divider from '@material-ui/core/Divider'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    divider: {
        width: '100%',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3
    }
})

class DWDDivider extends Component {

    static propTypes = {
        classes: PropTypes.any
    }

    render() {
        const { classes } = this.props

        return (
            <Divider className={ classes.divider } />
        )
    }
}

export default withStyles(styles)(DWDDivider)
