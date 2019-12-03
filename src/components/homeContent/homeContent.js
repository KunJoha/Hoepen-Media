import React, { Fragment } from "react";

import "./homeContent.css";

function Home() {

  const hideNotSelected = (e) => {
    e.preventDefault();
    console.log("hello");
    let selectedItem = e.current;
    console.log(selectedItem);
  };

  return (
    <Fragment>
      <div className="home-container">
        <span className="music-topic hidden">Music</span>
        <span className="movie-topic hidden">Movie</span>
        <span className="design-topic hidden">Design</span>
        <span className="music" onClick={(e) => hideNotSelected(e)}>Music</span>
        <span className="movie" onClick={(e) => hideNotSelected(e)}>Movie</span>
        <span className="design" onClick={(e) => hideNotSelected(e)}>Design</span>
      </div>
    </Fragment>
  );
}

export default Home;