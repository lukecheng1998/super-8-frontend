import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.spreadThis,
});
export class events extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }
  render() {
    const {
      classes,
      user: {
        authenticated,
        credentials: { handle, createdAt, isSick },
      },
    } = this.props;
    const { errors } = this.state;
    return (
      <div>
        {authenticated ? (
          <div>
            <Typography variant="h2">Events Page</Typography>
            <TextField
              name="body"
              type="text"
              label="Event"
              placeholder="Event Name"
              error={errors.body ? true : false}
              helperText={errors.body}
              className={classes.textField}
              onChange={this.handleChange}
              fullWidth
            />
          </div>
        ) : (
          <Typography variant="body1">
            Please sign in to view this Page
          </Typography>
        )}
      </div>
    );
  }
}
events.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
export default connect(mapStateToProps)(withStyles(styles)(events));
