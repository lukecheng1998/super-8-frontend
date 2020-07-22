import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles, CssBaseline, Box } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom/Link";

const styles = (theme) => ({
  ...theme.spreadThis,
});
export class landing extends Component {
  render() {
    const { classes, loading } = this.props;
    return (
      <div>
        <CssBaseline />
        <Typography
          variant="h1"
          className={classes.navbarDesign}
          align="center"
        >
          Super 8 Tracking for COVID-19
        </Typography>
        <div align="center">
          <Box width="25%" height="5%">
            <Button
              variant="contained"
              className={classes.buttons}
              component={Link}
              to="/login"
              fullWidth
            >
              Login
            </Button>
          </Box>
          <div />
          <Box width="25%">
            <Button
              variant="contained"
              className={classes.buttons}
              component={Link}
              to="/signup"
              fullWidth
            >
              SignUp
            </Button>
          </Box>
          <div />
          <Box width="25%">
            <Button
              variant="contained"
              className={classes.buttons}
              component={Link}
              to="/privacy"
              fullWidth
            >
              Privacy
            </Button>
          </Box>
          <div />
          <Box width="25%" height="5%">
            <Button
              variant="contained"
              className={classes.buttons}
              component={Link}
              to="/about"
              fullWidth
            >
              About
            </Button>
          </Box>
          <div />
          <Box width="25%" height="5%">
            <Button
              variant="contained"
              className={classes.buttons}
              component={Link}
              to="/acknowledgments"
              fullWidth
            >
              Acknowledgments
            </Button>
          </Box>
        </div>
      </div>
    );
  }
}
//Do some propTypes here
landing.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
export default connect(mapStateToProps)(withStyles(styles)(landing));
