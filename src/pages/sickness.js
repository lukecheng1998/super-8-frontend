import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { changeSicknessStatus } from "../redux/actions/userActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Link from "react-router-dom/Link";
const styles = (theme) => ({
  ...theme.spreadThis,
  updateMessage: {
    color: "#3B566E",
    fontWeight: "bold",
  },
});
export class sickness extends Component {
  constructor() {
    super();
    this.state = {
      isSick: false,
      sicknessTime: "",
      errors: {},
      message: "",
      hasClicked: false,
      symptoms: "",
    };
  }
  handleSubmit = (event) => {
    console.log("in handle submit");
    console.log(this.state.value);
    event.preventDefault();
    const userData = {
      isSick: true,
      sicknessTime: new Date().toISOString(),
      symptoms: this.state.symptoms,
    };
    this.state.hasClicked = true;
    console.log(userData);
    this.props.changeSicknessStatus(userData, this.props.history);
  };
  handleNotSick = (event) => {
    console.log("in handle not sick");
    console.log(this.state.value);
    event.preventDefault();
    const userData = {
      isSick: false,
      sicknessTime: "",
      symptoms: this.state.symptoms
    };
    console.log(userData);
    this.state.hasClicked = true;
    this.props.changeSicknessStatus(userData, this.props.history);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        body: "",
        errors: {},
        message: "",
      });
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      classes,
      UI: { loading },
      user: {
        authenticated,
        credentials: { handle, createdAt, isSick },
      },
    } = this.props;
    const { errors, message, hasClicked } = this.state;
    const checkedSick = authenticated ? (
      <div>
        <Typography variant="h2" className={classes.pageTitle}>
          Are you sick?
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="symptoms"
            name="symptoms"
            type="symptoms"
            label="Symptoms"
            rows="3"
            placeholder="Write your symptoms"
            error={errors.symptoms ? true : false}
            helperText={errors.symptoms}
            className={classes.textField}
            value={this.state.symptoms}
            onChange={this.handleChange}
            fullWidth
          />

          <div align="center">
            <Box width="25%" height="5%">
              <Button
                id="isSick"
                type="isSick"
                variant="contained"
                className={classes.buttons}
                onChange={this.handleChange}
                disabled={loading}
                fullWidth
              >
                I am sick
              </Button>
            </Box>
          </div>
        </form>
        <form onSubmit={this.handleNotSick}>
          <div align="center">
            <Box width="25%" height="5%">
              <Button
                id="notSick"
                type="isSick"
                variant="contained"
                className={classes.buttons}
                onChange={this.handleChange}
                disabled={loading}
                fullWidth
              >
                I am not sick
              </Button>
            </Box>
          </div>
        </form>
        <div align="center">
          <Box width="25%" height="5%">
            <Button
              id="Cancel"
              type="Cancel"
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
        {hasClicked && !loading ? (
          <Typography variant="body1" className={classes.updateMessage}>
            Successfully updated your sickness status
          </Typography>
        ) : (
          <Typography
            variant="body1"
            className={classes.updateMessage}
          ></Typography>
        )}
        {loading && (
          <CircularProgress size={30} className={classes.progressSpinner} />
        )}
      </div>
    ) : (
      <Typography variant="h2" className={classes.pageTitle}>
        Please Sign In to view this page
      </Typography>
    );
    return checkedSick;
  }
}
sickness.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  changeSicknessStatus: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
const mapActionToProps = {
  changeSicknessStatus,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(sickness));
