import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
    paper: {
        width: '600px',
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    }
})

class DWDPaper extends Component {

    static propTypes = {
        classes: PropTypes.any,
        children: PropTypes.node
    }

    render() {
        const { classes, children } = this.props
        return (
            <Paper className={ classes.paper }>
                { children }
            </Paper>
        )
    }

}

export default withStyles(styles)(DWDPaper)
