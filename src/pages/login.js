import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Redux for contacting back end
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

//MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles, Box } from "@material-ui/core";

//import a theme later on
const styles = (theme) => ({
  ...theme.spreadThis,
  textfield_text: {
    color: "#3B566E",
    fontWeight: "bold",
  },
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      //Create the form needed to be submitted
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2" className={classes.pageTitle}>
            LogIn
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <Box bgcolor="primary" color="primary.contrastText" border={5}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="email"
                className={classes.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
                bgcolor="primary"
                color="primary.contrastText"
              />
            </Box>
            <br />
            <Box bgcolor="primary" color="primary.contrastText" border={5}>
              <TextField
                id="password"
                name="password"
                type="password"
                label="password"
                className={classes.textField}
                helperText={errors.password}
                error={errors.password ? true : false}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
                bgcolor="primary"
                color="primary.contrastText"
              />
            </Box>

            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <div align="center">
              <Box width="25%" height="5%">
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.buttons}
                  disabled={loading}
                  fullWidth
                >
                  login
                  {loading && (
                    <CircularProgress
                      size={30}
                      className={classes.CircularProgress}
                    />
                  )}
                </Button>
              </Box>
            </div>
            <br />
            <small font="Mohave">
              No account? Sign up <Link to="/signup">here!</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}
login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  //UI will be added later
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
  //UI later
});
const mapActionToProps = {
  loginUser,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(login));
