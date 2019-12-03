import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/navbar";
import Home from "./components/homeContent/homeContent";

import "./index.css";

function App() {
  return (
    <div className="main-container">
      <header className="header-section">Hoepen</header>
      <aside className="nav-section">
        <Navbar />
      </aside>
      <section className="content-section">
        <Home />
      </section>
      <footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
