import React from "react";

import "./RealtedSearchs.scss";
import { useSearchProvider } from "../search/SearchContext";
const keywords = [
  "clouds",
  "hills",
  "falls",
  "deserts",
  "forests",
  "sky",
  "sunset",
  "water",
  "landscape",
];

function RealtedSearchs() {
  const { setSearchText } = useSearchProvider();

  function handleClick(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="related-search-container">
      <h2>Realted Searchs</h2>
      {keywords.map((key) => (
        <button key={key} value={key} onClick={handleClick}>
          {key}
        </button>
      ))}
    </div>
  );
}

export default RealtedSearchs;
