import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const SearchContext = createContext("");

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

function SearchProvider({ children }) {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getImages(keyword) {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`
      );

      setImages(response.data.photos.photo);
    } catch (error) {
      console.log({ error });
      setImages([]);
    } finally {
      setLoading(false);
    }

    /* axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      }); */
  }

  //Add Later
  useEffect(() => {
    getImages("cloud");
  }, []);

  useEffect(() => {
    if (searchText && searchText.length > 0) getImages(searchText);
  }, [searchText]);

  const value = { loading, images, getImages, setSearchText };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

function useSearchProvider() {
  const searchContext = useContext(SearchContext);

  return searchContext;
}

export { SearchProvider, useSearchProvider };
