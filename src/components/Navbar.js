import React, { Component, Fragment } from "react";
import Link from "react-router-dom/Link";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withStyles from '@material-ui/core/styles/withStyles';
//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { logoutUser } from "../redux/actions/userActions";
export class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {user: {authenticated, handle} } = this.props
    return (

      <AppBar position="fixed">
        <ToolBar className="nav-container">
          {authenticated ? (
            <Fragment>
              <Button color="inherit">
                {this.props.user.handle}
              </Button>
              <Button color="inherit" onClick={this.handleLogout} component={Link} to="/">
                Logout
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
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
    user: state.user
})
const mapActionsToProps = {
  logoutUser
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles()(Navbar));
