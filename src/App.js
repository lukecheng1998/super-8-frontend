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
import privacy from "./pages/privacy";
import about from "./pages/about";
import activation from "./pages/activation";
import other from "./pages/other";
//Components
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";
//Redux elements
import store from "./redux/store";
import axios from "axios";
import { SET_AUTHENTICATED } from "./redux/types";
import { getUserData, logoutUser } from "./redux/actions/userActions";
import { CssBaseline } from "@material-ui/core";
import acknowledgments from "./pages/acknowledgments";
const theme = createMuiTheme(themeFile);
axios.defaults.baseURL =
  "https://us-central1-super-8-1beb0.cloudfunctions.net/api";
const token = localStorage.FBIdToken;
console.log(token);
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}
function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <div className="container">
              <Navbar />
              <Switch>
                <AuthRoute exact path="/" component={landing} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
                <Route exact path="/home" component={home} />
                <Route exact path ="/sickness" component={sickness} />
                <Route exact path="/events" component={events} />
                <Route exact path="/privacy" component={privacy} />
                <Route exact path="/about" component={about} />
                <Route exact path="/activation" component={activation} />
                <Route exact path="/other" component={other} />
                <Route exact path="/acknowledgments" component={acknowledgments} />
              </Switch>
            </div>
          </Router>
        </Provider>
       
      </MuiThemeProvider>
    </div>
  );
}

export default App;
