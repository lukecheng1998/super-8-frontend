import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

const styles = (theme) => ({
    ...theme.spreadThis,
  });
export class landing extends Component {
    
    render() {
        const { classes, loading } = this.props;
        return (
            <div>
                <Typography variant="h1" className={classes.navbarDesign}>
                    Super 8 Tracking for COVID-19
                </Typography>
                <Typography variant="h2" className={classes.pageTitle}>
                   The Problem - insert problem here
                </Typography>
                <Typography variant="h2" className={classes.pageTitle}>
                Our Solution - insert solution here
                </Typography>
            </div>
        )   
    }
}
//Do some propTypes here
landing.propTypes = {
    classes: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})
export default connect(mapStateToProps)(withStyles(styles)(landing));
