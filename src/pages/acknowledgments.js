import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
const styles = (theme) => ({
  ...theme.spreadThis,
});
export class acknowledgments extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography
          variant="h2"
          className={classes.navbarDesign}
          align="center"
        >
          Acknowledgments
        </Typography>
        <Typography
          variant="body1"
          className={classes.pageTitle}
          align="center"
        >
          Super 8 would like to express our gratitude to TechPoint and their
          staff for hosting the SOS Challenge and for giving our team the
          opportunity to network together, learn about the Indianapolis
          technology scene, and create a technology solution we are proud of.
          Next, we would like to thank Chris Gahl and Elise Shrock, our Tourism
          Subject Matter Experts, for volunteering their time and knowledge
          which was extremely valuable to the creation of our overall final
          product. Lastly, Super 8 is sincerely grateful for the help of Nicki
          Rough and Sushil Kumar, our Coaches from NextGear Capital, who were
          critical to our team’s success during this program. Nicki and Sushil
          provided encouragement, real-world perspectives and schedule reminders
          which helped us improve the quality of our product and keep our team
          on track throughout the program.
        </Typography>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  UI: state.UI,
});
acknowledgments.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(acknowledgments));
