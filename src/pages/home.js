import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class home extends Component {
 
  render() {
    return <h1>Home Page</h1>;
  }
}
const mapStateToProps = (state) => ({
  user: state.user
})
export default home;
