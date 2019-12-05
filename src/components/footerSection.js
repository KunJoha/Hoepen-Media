import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <Fragment>
      <p>
        <Link to="/Kontakt">Kontakt</Link>
      </p>
      <p>
        <Link to="/Impressum">Impressum</Link>
      </p>
      <p>
        <Link to="/UeberUns">Über uns</Link>
      </p>
      <p>
        <Link to="/Datenschutz">Datenschutz</Link>
      </p>
    </Fragment>
  );
}

export default FooterSection;
