//WHAT THE HECK IS THIS
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import themeFile from "./util/theme";
//Web pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import landing from "./pages/landing";
import sickness from "./pages/sickness";
import events from "./pages/events";
//Components
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";
//Redux elements
import store from "./redux/store";
import axios from "axios";
import { SET_AUTHENTICATED } from "./redux/types";
import { getUserData, logoutUser } from "./redux/actions/userActions";
const theme = createMuiTheme(themeFile);
axios.defaults.baseURL =
  "https://us-central1-super-8-1beb0.cloudfunctions.net/api";
// const token = localStorage.FBIdToken;
// console.log(token);
// if (token) {
//   const decodedToken = jwtDecode(token);
//   console.log(decodedToken);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     store.dispatch(logoutUser());
//     window.location.href = "/login";
//   } else {
//     store.dispatch({ type: SET_AUTHENTICATED });
//     store.defaults.headers.common["Authorization"] = token;
//     store.dispatch(getUserData());
//   }
// }
function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <div className="container">
              <Navbar />
              <Switch>
                <Route exact path="/" component={landing} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
                <Route exact path="/home" component={home} />
                <Route exact path ="/sickness" component={sickness} />
                <Route exact path="/events" component={events} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
