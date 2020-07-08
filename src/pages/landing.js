import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom/Link";

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
        <div>
          <Button
            variant="contained"
            className={classes.buttons}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.buttons}
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.buttons}
            component={Link}
            to="/privacy"
          >
            Privacy
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.buttons}
            component={Link}
            to="/about"
          >
            About
          </Button>
        </div>
      </div>
    );
  }
}
//Do some propTypes here
landing.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
export default connect(mapStateToProps)(withStyles(styles)(landing));
