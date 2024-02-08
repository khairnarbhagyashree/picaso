import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "./api/config";

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${query}&per_page=25`
      )
      .then((response) => {
        setImage(response.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <PhotoContext.Provider value={{ image, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
