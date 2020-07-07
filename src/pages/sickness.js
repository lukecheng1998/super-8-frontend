import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { changeSicknessStatus } from "../redux/actions/userActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
const styles = (theme) => ({
  ...theme.spreadThis,
});
export class sickness extends Component {
  constructor() {
    super();
    this.state = {
      isSick: false,
      errors: {},
    };
  }
  handleSubmit = (event) => {
    console.log("in handle submit");
    console.log(this.state.value);
    event.preventDefault();
    const userData = {
      isSick: true,
    };
    console.log(userData);
    this.props.changeSicknessStatus(userData, this.props.history);
  };
  handleNotSick = (event) => {
    console.log("in handle not sick");
    console.log(this.state.value);
    event.preventDefault();
    const userData = {
      isSick: false,
    };
    console.log(userData);
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
    const { errors } = this.state;
    const checkedSick = authenticated ? (
      <div>
        <Typography variant="h2" className={classes.pageTitle}>
          Are you sick?
        </Typography>
        <TextField
          name="body"
          type="text"
          label="Symptoms"
          rows="3"
          placeholder="Write your symptoms here otherwise click I'm not sick if you aren't sick"
          error={errors.body ? true : false}
          helperText={errors.body}
          className={classes.textField}
          onChange={this.handleChange}
          fullWidth
        />
        <form onSubmit={this.handleSubmit}>
          <Button
            id="isSick"
            type="isSick"
            variant="contained"
            color="primary"
            onChange={this.handleChange}
            disabled={loading}
          >
            Submit
            
          </Button>
        </form>
        <form onSubmit={this.handleNotSick}>
          <Button
            id="notSick"
            type="isSick"
            variant="contained"
            color="primary"
            onChange={this.handleChange}
            disabled={loading}
          >
            I'm not sick
           
          </Button>
        </form>
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
