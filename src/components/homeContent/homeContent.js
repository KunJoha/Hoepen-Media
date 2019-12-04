import React, { Fragment, useState } from "react";

import MusicContent from "../subContent/music";
import MovieContent from "../subContent/movie";
import DesignContent from "../subContent/design";

import "./homeContent.css";

function Home() {
  const [MainView, toggleMainView] = useState(true);
  const [subTopicView, changeSubTopicView] = useState("");

  const handleSubTopicView = e => {
    e.preventDefault();
    toggleMainView(!MainView);
    changeSubTopicView(e.target.getAttribute("name"));
  };

  const backToMenu = () => {
    toggleMainView(!MainView);
    changeSubTopicView("");
  };

  return (
    <Fragment>
      <div className="home-container">
        {MainView ? (
          <Fragment>
            <span
              className="first"
              name="music"
              onClick={e => handleSubTopicView(e)}
            >
              Music
            </span>
            <span
              className="second"
              name="movie"
              onClick={e => handleSubTopicView(e)}
            >
              Movie
            </span>
            <span
              className="third"
              name="design"
              onClick={e => handleSubTopicView(e)}
            >
              Design
            </span>
          </Fragment>
        ) : (
          ""
        )}
        {subTopicView === "music" && (
          <Fragment>
            <h2 className="music-topic" onClick={() => backToMenu()}>
              music
            </h2>
            <MusicContent />
          </Fragment>
        )}
        {subTopicView === "movie" && (
          <Fragment>
            <h2 className="movie-topic" onClick={() => backToMenu()}>
              movie
            </h2>
            <MovieContent />
          </Fragment>
        )}
        {subTopicView === "design" && (
          <Fragment>
            <h2 className="design-topic" onClick={() => backToMenu()}>
              design
            </h2>
            <DesignContent />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Home;
