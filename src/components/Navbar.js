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
            

              <Button
                color="inherit"
                className={classes.navbarDesign}
                component={Link}
                to="/privacy"
              >
                Privacy
              </Button>

              <Button
                color="inherit"
                className={classes.navbarDesign}
                component={Link}
                to="/about"
              >
                About
              </Button>

              <Button
                color="inherit"
                className={classes.navbarDesign}
                component={Link}
                to="/acknowledgments"
              >
                Acknowledgments
              </Button>

              <div align="center">
                <img src="logo-2.png" alt="logo" height="50" width="50" display="block" margin-left="auto" margin-right="auto"/>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                color="inherit"
                component={Link}
                to="/"
                className={classes.navbarDesign}
              >
                Home
              </Button>
              <div align="center">
                <img src="logo-2.png" alt="logo" height="50" width="50" display="block" margin-left="auto" margin-right="auto"/>
              </div>
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