import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom/Link";
import { withStyles, Box } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const styles = (theme) => ({
  ...theme.spreadThis,
});
export class other extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div align="center">
          <Box width="25%" height="5%">
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
        </div>
        <div align="center">
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
        </div>
        <div align="center">
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
other.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  UI: state.UI,
});
export default connect(mapStateToProps)(withStyles(styles)(other));
