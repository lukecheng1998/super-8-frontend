import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  discoverDevicesOrDisconnect,
  clearErrors,
} from "../redux/actions/dataActions";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { Button, Dialog, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "react-router-dom/Link";
const styles = (theme) => ({
  ...theme.spreadThis,
});
export class activation extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      errors: {},
      connected: false,
      hasClicked: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        open: false,
        errors: {},
      });
    }
  }
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.props.clearErrors();
    this.setState({
      open: false,
      errors: {},
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    console.log("in handle submit");

    event.preventDefault();
    if (this.state.connected === false) {
      this.state.connected = true;
    } else {
      this.state.connected = false;
    }
    const data = {
      connected: this.state.connected,
    };
    this.props.discoverDevicesOrDisconnect(data, this.props.history);
    this.state.hasClicked = true;
  };

  render() {
    const { errors } = this.state;
    const {
      classes,
      user: {
        authenticated,
        credentials: { deviceID },
      },
    } = this.props;
    return authenticated ? (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div align="center">
            <Typography variant="h3" className={classes.pageTitle}>
              Activate Bluetooth
            </Typography>
            <Box width="25%" height="5%">
              <Button
                type="submit"
                variant="contained"
                className={classes.buttons}
                tip="Activate"
                fullWidth
              >
                Activate
              </Button>
            </Box>
          </div>
        </form>
        <div align="center">
          <Box width="25%" height="5%">
            <Button
              type="submit"
              variant="contained"
              className={classes.buttons}
              component={Link}
              to="/home"
              fullWidth
            >
              Cancel
            </Button>
          </Box>
        </div>
        {this.state.hasClicked && this.state.connected ? (
          <Typography variant="body1" className={classes.pageTitle}>
            Sucessfully activated device
          </Typography>
        ) : (
          <Typography variant="body1" className={classes.pageTitle}>
            Please make sure you have a bluetooth enabled device
          </Typography>
        )}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        ></Dialog>
      </Fragment>
    ) : (
      <Typography variant="h2">Please sign in to view this page.</Typography>
    );
  }
}
activation.propTypes = {
  discoverDevicesOrDisconnect: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  UI: state.UI,
  user: state.user,
});
export default connect(mapStateToProps, {
  discoverDevicesOrDisconnect,
  clearErrors,
})(withStyles(styles)(activation));
