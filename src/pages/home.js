import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import StaticHome from "../components/homePage/staticHome";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  ...theme.spreadThis,
});
export class home extends Component {
  render() {
    const {
      classes,
      user: {
        authenticated,
        credentials: { createdAt, handle, loading },
      },
      // UI: { loading },
    } = this.props;
    return !loading ? (
      authenticated ? (
        <div>
          <Typography variant="h2" className={classes.pageTitle}>
            Hi {handle}! Welcome to the dashboard Let's take a look at your
            status.
          </Typography>
          <Button variant="contained" component={Link} to="/events">
            events
          </Button>
          <Button
                color="inherit"
                variant="contained"
                component={Link}
                to="/sickness"
              >
                Report Sickness
              </Button>
        </div>
      ) : (
        <p className={classes.pageTitle}>Please sign in to view this page!</p>
      )
    ) : (
      <StaticHome />
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
home.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(home));
