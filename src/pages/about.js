import React, { Component } from "react";
import { Typography, Box, Button, Link } from "@material-ui/core";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
const styles = (theme) => ({
  ...theme.spreadThis,
});
export class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h2" className={classes.pageTitle}>
          About
        </Typography>
        <Typography variant="h3" className={classes.pageTitle}>
          How the App Works
        </Typography>
        <Typography variant="body1" className={classes.pageTitle}>
          How the app works, information can be found here:
        </Typography>
        <div align="center">
          <Box width="25%" height="5%">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1rUIucez-_rYgw604fWHmwoIiN05sEfSJShcpceXqXzk/edit"
            >
              <Button
                variant="contained"
                className={classes.buttons}
                component={Link}
                fullWidth
              >
                Link
              </Button>
            </a>
          </Box>
        </div>
        <Typography variant="h3" className={classes.pageTitle}>
          Problem
        </Typography>
        <Typography variant="body1" className={classes.pageTitle}>
          A record-setting 30 million people from around the globe visited Indy
          in 2019, generating a record-setting $5.6 billion in economic impact,
          while supporting a record-setting 83,000 tourism jobs. More than 200
          conventions have canceled to date, with the horizon fuzzy on how
          meetings and events look/are held heading into the future. The Indiana
          Convention Center has been closed since March 17 and hotels are
          closed. Restaurants, museums, and bars are on the verge of closing
          permanently.
        </Typography>
        <Typography variant="h3" className={classes.pageTitle}>
          Our Solution
        </Typography>
        <Typography variant="body1" className={classes.pageTitle}>
          Our product provides a convenient and safe way for Indianapolis
          visitors to track their interactions during high-capacity events, like
          conventions, concerts, and sporting events, where other attendants may
          come within six feet of users, therefore violating social distancing
          recommendations for COVID-19. This application, which is activated
          during designated event times, will use Bluetooth technology to
          communicate with other devices in order to create an encrypted list of
          attendants that the user may have come in contact with. In the case of
          a Coronavirus diagnosis, users will have the ability to confidentially
          report their COVID status to our app, which will privately and
          securely notify the positive user’s encrypted list of attendants who
          may be at increased risk for contracting COVID-19 due to their close
          proximity at the event. This will help ease the panic surrounding
          high-capacity events by ensuring that only at-risk attendants are
          notified, decreasing overall event liability, easing tourism
          apprehension, therefore returning safety to Indianapolis events.
        </Typography>
        <Typography variant="h3" className={classes.pageTitle}>
          Why Bluetooth?
        </Typography>
        <Typography variant="body1" className={classes.pageTitle}>
          Our application and website rely on Bluetooth technology, which the
          majority of modern devices have the capability to support. We can
          track user interactions because Bluetooth’s short-range can transmit a
          “bubble” around each user which will work more effectively for a
          variety of event spaces, allowing for more accurate COVID-19 exposure
          data.
        </Typography>
      </div>
    );
  }
}
About.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  UI: state.UI,
});
export default connect(mapStateToProps)(withStyles(styles)(About));
