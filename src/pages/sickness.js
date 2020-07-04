import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { changeSicknessStatus } from "../redux/actions/userActions";
import Button from "@material-ui/core/Button";
const styles = (theme) => ({
  ...theme.spreadThis,
});
class sickness extends Component {
  constructor() {
    super();
    this.state = {
      isSick: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      isSick: this.state.isSick,
    };
    this.props.changeSicknessStatus(userData);
  };
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
    return (
      <div>
        <p>Are you sick?</p>
        <Fragment>
          <Button variant="contained">Yes</Button>
          <Button variant="contained">No</Button>
        </Fragment>
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
