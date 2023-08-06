import React, { useState } from "react";

import "./Search.scss";
import { useSearchProvider } from "./SearchContext";

function Search() {
  const [search, setSearch] = useState("");
  const { getImages } = useSearchProvider();

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getImages(search);
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          className="search-icon-button"
          tabIndex="-1"
          aria-label="Search"
        />
        <input
          className="search-field"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Search;
