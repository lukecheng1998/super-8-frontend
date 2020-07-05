import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { changeSicknessStatus } from "../redux/actions/userActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  ...theme.spreadThis,
});
class sickness extends Component {
  constructor() {
    super();
    this.state = {
      isSick: false,
      errors: {},
    };
  }
  handleTrue = (event) => {
    event.preventDefault();
    const userData = {
      isSick: true,
    };
    this.props.changeSicknessStatus(userData);
  };
  handleFalse = (event) => {
    event.preventDefault();
    const userData = {
      isSick: false,
    };
    this.props.changeSicknessStatus(userData);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
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
    return (
      <div>
        <Typography variant="h2" className={classes.pageTitle}>
          Are you sick?
        </Typography>
        <Button
          variant="contained"
          onChange={this.handleTrue}
          onSubmit={this.handleChange}
          value={this.state.isSick}
          helperText={errors.isSick}
          error={errors.isSick ? true : false}
          className={classes.pageTitle}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          onChange={this.handleFalse}
          onSubmit={this.handleChange}
          value={this.state.isSick}
          helperText={errors.isSick}
          error={errors.isSick ? true : false}
          className={classes.pageTitle}
        >
          No
        </Button>
        
      </div>
    );
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
