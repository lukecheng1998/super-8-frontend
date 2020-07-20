import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { Typography, Box } from "@material-ui/core";
import StaticHome from "../components/homePage/staticHome";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  ...theme.spreadThis,
});

export class home extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      connected: false,
    };
  }
  render() {
    const {
      classes,
      user: {
        authenticated,
        loading,
        credentials: { createdAt, handle },
      },
      //UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return authenticated ? (
      <div>
        <Typography variant="h2" className={classes.pageTitle}>
          Hi {handle}! Welcome to the dashboard Let's take a look at your
          status.
        </Typography>
        <div align="center">
          <Box width="25%" height="5%">
            <Button
              variant="contained"
              component={Link}
              to="/events"
              className={classes.buttons}
              fullWidth
            >
              events
            </Button>
          </Box>
        </div>

        <div align="center">
          <Box width="25%" height="5%">
            <Button
              variant="contained"
              component={Link}
              to="/sickness"
              className={classes.buttons}
              fullWidth
            >
              Report Sickness
            </Button>
          </Box>
        </div>

        <div align="center">
          <Box width="25%" height="5%">
            <Button
              variant="contained"
              component={Link}
              to="/activation"
              className={classes.buttons}
              fullWidth
            >
              Activation
            </Button>
          </Box>
        </div>
      </div>
    ) : (
      <p className={classes.pageTitle}>Please sign in to view this page!</p>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
home.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(home));
