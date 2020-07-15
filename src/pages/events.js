import React, { Component } from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import "date-fns";

const styles = (theme) => ({
  ...theme.spreadThis,
});
export class events extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      hasClick: false,
      event: "",
      date: "",
      venue: ""

    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
 
  render() {
    const {
      classes,
      user: {
        authenticated,
        credentials: { handle, createdAt, isSick, loading },
      },
    } = this.props;
    const { errors } = this.state;

    return (
      <div>
        {authenticated ? (
          <div>
            <Typography variant="h2" className={classes.pageTitle}>
              Events Page
            </Typography>
            <Grid container className={classes.form}>
              <Grid item sm />
              <Grid item sm>
                <form noValidate onSubmit={this.handleSubmit}>
                  <Box
                    bgcolor="primary"
                    color="primary.contrastText"
                    border={3}
                  >
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
                  </Box>
                  <br />
                  <Box
                    bgcolor="primary"
                    color="primary.contrastText"
                    border={3}
                  >
                    <TextField
                      name="body"
                      type="text"
                      label="Date First Attended"
                      placeholder="Please enter the date in MM/DD/YYYY"
                      error={errors.body ? true : false}
                      helperText={errors.body}
                      className={classes.textField}
                      onChange={this.handleChange}
                      fullWidth
                    />
                  </Box>
                  <br />
                  <Box
                    bgcolor="primary"
                    color="primary.contrastText"
                    border={3}
                  >
                    <TextField
                      name="body"
                      type="text"
                      label="Venue Location"
                      placeholder="Please enter the location of the Venue"
                      error={errors.body ? true : false}
                      helperText={errors.body}
                      className={classes.textField}
                      onChange={this.handleChange}
                      fullWidth
                    />
                  </Box>
                  <div align="center">
                    <Box width="25%" height="5%">
                      <Button
                        type="submit"
                        variant="contained"
                        className={classes.buttons}
                        tip="Activate"
                        fullWidth
                        disabled={loading}
                      >
                        Submit
                      </Button>
                    </Box>
                  </div>
                </form>
              </Grid>
              <Grid item sm />
            </Grid>
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
