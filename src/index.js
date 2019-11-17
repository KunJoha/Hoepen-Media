import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function App() {
  return (
    <div className="main-container">
      <header className="header-section">Hoepen</header>
      <aside className="nav-section" />
      <section className="content-section" />
      <footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
