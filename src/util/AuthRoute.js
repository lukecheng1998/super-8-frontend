import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { Component } from 'react';
//Import 
const AuthRoute = ({component: Component, authenticated, ...rest }) => (
    <Route {...rest}
    render={(props) => authenticated === true ? <Redirect to="/home" /> : <Component {...props} /> } />
)
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})
AuthRoute.propTypes = {
    user: PropTypes.object
};
export default connect(mapStateToProps)(AuthRoute)