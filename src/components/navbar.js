import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li><Link to="/Kamera">Kamera</Link></li>
      <li><Link to="/Musik">Musik</Link></li>
      <li><Link to="/Design">Design</Link></li>
    </ul>
  );
}

export default Navbar;