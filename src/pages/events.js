import React, { Component } from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { postEvents } from "../redux/actions/dataActions";
import "date-fns";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "react-router-dom/Link";


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
      venue: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var d = new Date(this.state.date);
    console.log(d);
    const postEvent = {
      event: this.state.event,
      date: d.toISOString(),
      venue: this.state.venue,
    };
    this.props.postEvents(postEvent, this.props.history);
    this.state.hasClick = true;
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
      },
    } = this.props;
    const { errors, hasClick, loading } = this.state;

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
                      id="event"
                      name="event"
                      type="event"
                      label="Event"
                      placeholder="Event Name"
                      error={errors.event ? true : false}
                      helperText={errors.event}
                      className={classes.textField}
                      onChange={this.handleChange}
                      value={this.state.event}
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
                      id="date"
                      name="date"
                      type="date"
                      label=""
                      error={errors.date ? true : false}
                      helperText={errors.date}
                      className={classes.textField}
                      onChange={this.handleChange}
                      value={this.state.date}
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
                      id="venue"
                      name="venue"
                      type="venue"
                      label="Venue Location"
                      placeholder="Please enter the location of the Venue"
                      error={errors.venue ? true : false}
                      helperText={errors.venue}
                      className={classes.textField}
                      onChange={this.handleChange}
                      value={this.state.venue}
                      fullWidth
                    />
                  </Box>
                  <div align="center">
                    <Box width="25%" height="5%">
                      <Button
                        id="submit"
                        type="submit"
                        variant="contained"
                        className={classes.buttons}
                        onChange={this.handleChange}
                        fullWidth
                        disabled={loading}
                      >
                        Submit
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
              </Grid>
              <Grid item sm />
            </Grid>
            {hasClick && !loading ? (
              <Typography variant="body1" className={classes.pageTitle}>
                Successfully add your event, feel free to add more or click home to navigate home
              </Typography>
            ) : (
              <div />
            )}
            {loading && (
              <CircularProgress size={30} className={classes.progressSpinner} />
            )}
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
  postEvents: PropTypes.func.isRequired,
};
const mapActionsToProps = { postEvents };
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(events));
