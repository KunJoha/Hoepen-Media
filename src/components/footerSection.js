import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <Fragment>
      <p className="text-right">
        <Link to="/Kontakt">Kontakt</Link>
      </p>
      <p className="text-center">
        <Link to="/Impressum">Impressum</Link>
      </p>
      <p className="text-center">
        <Link to="/UeberUns">Über uns</Link>
      </p>
      <p className="text-left">
        <Link to="/Datenschutz">Datenschutz</Link>
      </p>
    </Fragment>
  );
}

export default FooterSection;
