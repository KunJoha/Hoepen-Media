import React, { Fragment, useState } from "react";

import "./subContent.css";

function designContent() {
  const [selectedSub, changeSelectedSub] = useState("");

  return (
    <Fragment>
      <span className="first bubble">designContent</span>
      <span className="second bubble">designContent</span>
      <span className="third bubble">designContent</span>
    </Fragment>
  );
}

export default designContent;
