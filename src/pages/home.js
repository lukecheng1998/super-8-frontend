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
var connected = false;
var selected_device;
var connected_server;
export class home extends Component {
  constructor (){
    super();
    this.state = {
      errors: {},
      connected: false
    }
  }
  discoverDevicesOrDisconnect = (event) => {
    console.log("discoverDevicesOrDisconnect");
    
    if (!connected) {
      this.discoverDevices();
    } else {
      selected_device.gatt.disconnect();
      this.resetUI();
    }
  };
  discoverDevices = () => {
    console.log("Discover Devices");
    this.setConnectedStatus(false);
    let options = {
      acceptAllDevices: true,
    };
    navigator.bluetooth
      .requestDevice(options)
      .then((device) => {
        console.log("> Name:             " + device.name);
        console.log("> Id:               " + device.id);
        console.log("> Connected:        " + device.gatt.connected);
        selected_device = device;
        console.log(selected_device);
        this.connect();
      })
      .catch((error) => {
        alert("ERROR: " + error);
        console.log("ERROR: " + error);
      });
  };
  connect = () => {
    if (connected === false) {
      console.log("connecting");
      selected_device.gatt.connect().then(
        function (server) {
          console.log("Connected to " + server.device.id);
          console.log("connected=" + server.connected);
          this.setConnectedStatus(true);
          connected_server = server;
          selected_device.addEventListener(
            "gattserverdisconnected",
            this.onDisconnected()
          );
        },
        function (error) {
          console.log("ERROR: could not connect - " + error);
          //Probably return a json
          alert("Error: could not connect - " + error);
          this.setConnectedStatus(false);
        }
      );
    }
  };
  onDisconnected = () => {
    console.log("onDisconnected");
    this.resetUI();
  };
  setConnectedStatus = (status) => {
    // We might not need this
    this.state.connected = status;
    return this.state.connected;
  };
  resetUI = () => {
    this.setConnectedStatus(false);
  };
  render() {
    const {
      classes,
      user: {
        authenticated,
        credentials: { createdAt, handle },
      },
      UI: { loading },
    } = this.props;
    const {errors} = this.state
    return !loading ? (
      authenticated ? (
        <html>
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

            <Typography variant="h3" className={classes.pageTitle}>
              Web bluetooth
            </Typography>
            <Typography variant="h3" className={classes.pageTitle}>
              status
            </Typography>
            {!this.state.connected ? (
              <Button
                variant="contained"
                className={classes.button}
                onClick={this.discoverDevicesOrDisconnect()}
                id="btn-scan"
              >
                Discover Devices
              </Button>
            ) : (
              <Button
                variant="contained"
                className={classes.button}
                onClick={this.discoverDevicesOrDisconnect()}
                id="btn-scan"
              >
                Disconnect
              </Button>
            )}
          </div>
        </html>
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
  UI: state.UI
});
home.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(withStyles(styles)(home));
