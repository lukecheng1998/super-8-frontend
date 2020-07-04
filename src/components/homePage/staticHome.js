import React from "react";
import theme from "../../util/theme";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
//We'll use this as a place holder when logging in instead of having it display the you are not login text
const styles = (theme) => ({
  ...theme.spreadThis,
});
const staticHome = (props) => {
    const {
        classes
    } = props
    return (
      <div>
        <h2 className={classes.pageTitle}>Loading your profile...</h2>
      </div>
    );
}
staticHome.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(staticHome);
