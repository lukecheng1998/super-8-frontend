import React, { Component, Fragment } from "react";
import Link from "react-router-dom/Link";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { logoutUser } from "../redux/actions/userActions";
import theme from "../util/theme";
const styles = (theme) => ({
  ...theme.spreadThis,
});
export class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      user: { handle, authenticated },
      classes,
    } = this.props;
    return (
      <AppBar position="fixed">
        <ToolBar className="nav-container">
          {authenticated ? (
            <Fragment>
              
              <Button
                color="inherit"
                className={classes.navbarDesign}
                onClick={this.handleLogout}
                component={Link}
                to="/"
              >
                Logout
              </Button>
              <Button
                color="inherit"
                className={classes.navbarDesign}
                component={Link}
                to="/home"
              >
                Home
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                className={classes.navbarDesign}
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/"
                className={classes.navbarDesign}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/signup"
                className={classes.navbarDesign}
              >
                Sign Up
              </Button>
            </Fragment>
          )}
        </ToolBar>
      </AppBar>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapActionsToProps = {
  logoutUser,
};
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Navbar));
