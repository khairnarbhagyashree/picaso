import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../PhotoContext";
import axios from "axios";
import { apiKey } from "../api/config";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";

function Home() {
  // const { images, loading, runSearch } = useContext(PhotoContext);
  const [searchTerm, setSearchTerm] = useState("mountain");

  useEffect(() => {
    console.log("useeeffct", searchTerm);
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${query}&per_page=25`
      )
      .then((response) => {
        setImage(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };

  const handleSubmit = (e, searchEntry) => {
    e.preventDefault();
    console.log("i handlesubmit", searchEntry);
    setSearchTerm(searchEntry);
  };

  return (
    <div className="mx-10 my-10">
      <Form handleSubmit={handleSubmit} />
      <div className="grid grid-cols-4 gap-4">
        {image.map((picture) => (
          <div className="bg-pink-300" key={picture.id}>
            <img src={picture.urls.small} alt="" />

            <nav className="main-nav">
              <ul>
                <li>
                  <NavLink to="/mountain">Mountain</NavLink>
                </li>
                <li>
                  <NavLink to="/beach">Beaches</NavLink>
                </li>
                <li>
                  <NavLink to="/bird">Birds</NavLink>
                </li>
                <li>
                  <NavLink to="/food">Food</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
