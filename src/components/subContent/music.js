import React, { Fragment, useState } from "react";

import "./subContent.css";

function MusicContent() {
  const [selectedSub, changeSelectedSub] = useState("");

  const collapsItem = e => {
    changeSelectedSub(e.target.getAttribute("name"));
  };

  return (
    <Fragment>
      <div
        className={
          "first bubble " + (selectedSub === "first" ? "collapse open" : "")
        }
        name="first"
        onClick={e => collapsItem(e)}
      >
        <h3 className="bubble-title">musicContent</h3>
        <div className={selectedSub === "first" ? "" : "hidden"}>
          <hr className="bubble-seperator" />
          <article className="subContent-preview">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam
          </article>
        </div>
      </div>
      <div
        className={
          "second bubble " + (selectedSub === "second" ? "collapse open" : "")
        }
        name="second"
        onClick={e => collapsItem(e)}
      >
        <h3 className="bubble-title">musicContent</h3>
        <div className={selectedSub === "second" ? "" : "hidden"}>
          <hr className="bubble-seperator" />
          <article className="subContent-preview">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam
          </article>
        </div>
      </div>
      <div
        className={
          "third bubble " + (selectedSub === "third" ? "collapse open" : "")
        }
        name="third"
        onClick={e => collapsItem(e)}
      >
        <h3 className="bubble-title">musicContent</h3>
        <div className={selectedSub === "third" ? "" : "hidden"}>
          <hr className="bubble-seperator" />
          <article className="subContent-preview">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam
          </article>
        </div>
      </div>
    </Fragment>
  );
}

export default MusicContent;
