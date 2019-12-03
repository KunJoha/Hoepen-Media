import React, { Fragment, useState } from "react";

import "./homeContent.css";

function Home() {
  const [view, changeView] = useState(true);

  const hideNotSelected = e => {
    e.preventDefault();
    changeView(!view);
    console.log(view);
  };

  return (
    <Fragment>
      <div className="home-container">
        <span className="music-topic hidden">Music</span>
        <span className="movie-topic hidden">Movie</span>
        <span className="design-topic hidden">Design</span>
        <span
          className={"music " + (!view ? "hidden" : "")}
          onClick={e => hideNotSelected(e)}
        >
          Music
        </span>
        <span
          className={"movie " + (!view ? "hidden" : "")}
          onClick={e => hideNotSelected(e)}
        >
          Movie
        </span>
        <span
          className={"design " + (!view ? "hidden" : "")}
          onClick={e => hideNotSelected(e)}
        >
          Design
        </span>
      </div>
    </Fragment>
  );
}

export default Home;
