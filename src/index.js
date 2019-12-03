import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/homeContent/homeContent";
import latestMusic from "./components/latestContent/latestMusic";
import latestMovie from "./components/latestContent/latestMovie";
import latestDesign from "./components/latestContent/latestDesign";

import "./index.css";

function App() {
  return (
    <div className="main-container">
      <Router>
        <header className="header-section">
          <Link to="/">
            Hoepen
          </Link>
        </header>
        <aside className="nav-section">
          <Navbar />
        </aside>
        <section className="content-section">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Musik" component={latestMusic} />
            <Route exact path="/Kamera" component={latestMovie} />
            <Route exact path="/Design" component={latestDesign} />
          </Switch>
        </section>
        <footer />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
