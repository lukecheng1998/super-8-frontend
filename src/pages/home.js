import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import StaticHome from "../components/homePage/staticHome";

const styles = (theme) => ({
  ...theme.spreadThis,
});
export class home extends Component {
  render() {
    const {
      classes,
      user: { authenticated, createdAt, handle, loading },
      // UI: { loading },
    } = this.props;
    return !loading ? (
      authenticated ? (
        <Typography variant="h2" className={classes.pageTitle}>
          Hi {handle}! What would you like to do today
        </Typography>
      ) : (
        <p>Please sign in to view this page!</p>
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
export default connect(mapStateToProps)(withStyles()(home));
