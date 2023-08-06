import React from "react";
import Header from "../header/Header";
import Gallery from "../gallery/Gallery";
import RealtedSearchs from "../related-searches/RealtedSearchs";

import "./AppContainer.scss";

function AppContainer() {
  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        <Gallery />
        <RealtedSearchs />
      </div>
    </div>
  );
}

export default AppContainer;
