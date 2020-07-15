import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles, Box, Button, Link } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const styles = (theme) => ({
  ...theme.spreadThis,
});

export class privacy extends Component {
  render() {
    const { classes, loading } = this.props;
    return (
      <div>
        <Typography variant="h1" className={classes.pageTitle}>
          Privacy
        </Typography>
        <Typography variant="h3" className={classes.pageTitle}>
          Status Confidentiality:
        </Typography>
        <Typography variant="body1" className={classes.pageTitle}>
          Super 8 will strictly enforce and follow HIPAA regulations while also
          communicating with local Indianapolis Health Officials to determine
          the best way to notify potentially infected people. Additionally,
          alerted users will not receive the positive patient’s name or any
          personal information.
        </Typography>
        <Typography variant="h3" className={classes.pageTitle}>
          Encryption:
        </Typography>
        <Typography variant="body1" className={classes.pageTitle}>
          We use Google Firebase’s built-in encryption service, Scrypt, to
          encrypt user passwords and protect user information. Scrypt will
          convert user passwords using a signer key of various symbols and
          letters. Then using hashing will compare this converted password to
          the converted original password to determine if the two values match;
          if the two passwords are the same, the algorithm will allow the user
          into the app. Once you sign in, the password scrambles itself to
          prevent hackers from accessing accounts.
        </Typography>
        <Typography variant="h3" className={classes.pageTitle}>
          Tracing:
        </Typography>
        <Typography variant="body1" className={classes.pageTitle}>
          Our application gives users the ability to manually activate our
          bluetooth technology, meaning our app will not automatically activate
          bluetooth without user consent. Additionally, we only need to activate
          a user’s device as a Bluetooth Beacon for the duration of our
          partnered events.
        </Typography>
        <Typography variant="h3" className={classes.pageTitle}>
          Government Request Limitations
        </Typography>
        <Typography variant="body1" className={classes.pageTitle}>
          Our government request policy will mirror that of high profile
          companies, like Google’s, stating that: “A variety of laws allow
          government agencies around the world to request the disclosure of user
          information for civil, administrative, criminal, and national security
          purposes. Our team will carefully review each request to make sure it
          satisfies applicable laws. If a request asks for too much information,
          we try to narrow it, and in some cases we object to producing any
          information at all.
        </Typography>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  UI: state.UI,
});
privacy.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(privacy));
