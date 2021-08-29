import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Footer from "./Footer.js";
import Header from "./Header";
import About from "./About";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
