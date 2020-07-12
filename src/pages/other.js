import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom/Link"
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const styles = (theme) => ({
    ...theme.spreadThis,
  });
export class other extends Component {
  render() {
    const {
        classes,
      } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          className={classes.buttons}
          component={Link}
          to="/privacy"
        >
          Privacy
        </Button>

        <Button
          variant="contained"
          className={classes.buttons}
          component={Link}
          to="/about"
        >
          About
        </Button>
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
