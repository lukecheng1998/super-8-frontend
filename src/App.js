//WHAT THE HECK IS THIS
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
//Web pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import landing from "./pages/landing";
//Components
import Navbar from "./components/Navbar";
import AuthRoute from './util/AuthRoute';
//Redux elements
import store from './redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={landing} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/home" component={home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
