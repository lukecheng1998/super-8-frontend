import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import landing from "./pages/landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
