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
            <div
              className="first bubble"
              name="music"
              onClick={e => handleSubTopicView(e)}
            >
              <h3 name="music" className="bubble-title">
                Music
              </h3>
            </div>
            <div
              className="second bubble"
              name="movie"
              onClick={e => handleSubTopicView(e)}
            >
              <h3 name="movie" className="bubble-title">
                Movie
              </h3>
            </div>
            <div
              className="third bubble"
              name="design"
              onClick={e => handleSubTopicView(e)}
            >
              <h3 name="design" className="bubble-title">
                Design
              </h3>
            </div>
          </Fragment>
        ) : (
          ""
        )}
        {subTopicView === "music" && (
          <Fragment>
            <div className="music-topic">
              <h1 className="sub-topic-header" onClick={() => backToMenu()}>
                Music
              </h1>
            </div>
            <MusicContent />
          </Fragment>
        )}
        {subTopicView === "movie" && (
          <Fragment>
            <div className="movie-topic">
              <h1 className="sub-topic-header" onClick={() => backToMenu()}>
                Movie
              </h1>
            </div>
            <MovieContent />
          </Fragment>
        )}
        {subTopicView === "design" && (
          <Fragment>
            <div className="design-topic">
              <h1 className="sub-topic-header" onClick={() => backToMenu()}>
                Design
              </h1>
            </div>
            <DesignContent />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Home;
