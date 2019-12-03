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
              className="music"
              name="music"
              onClick={e => handleSubTopicView(e)}
            >
              Music
            </span>
            <span
              className="movie"
              name="movie"
              onClick={e => handleSubTopicView(e)}
            >
              Movie
            </span>
            <span
              className="design"
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
            <h3 className="music-topic" onClick={() => backToMenu()}>
              music
            </h3>
            <MusicContent />
          </Fragment>
        )}
        {subTopicView === "movie" && (
          <Fragment>
            <h3 className="movie-topic" onClick={() => backToMenu()}>
              movie
            </h3>
            <MovieContent />
          </Fragment>
        )}
        {subTopicView === "design" && (
          <Fragment>
            <h3 className="design-topic" onClick={() => backToMenu()}>
              design
            </h3>
            <DesignContent />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Home;
