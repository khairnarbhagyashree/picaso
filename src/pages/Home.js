import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../PhotoContext";
import axios from "axios";
import { apiKey } from "../api/config";

import Form from "../components/Form";

function Home() {
  // const { images, loading, runSearch } = useContext(PhotoContext);
  const [searchTerm, setSearchTerm] = useState("mountain");

  useEffect(() => {
    console.log(searchTerm);
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
    console.log(searchEntry);
    setSearchTerm(searchEntry);
  };

  return (
    <div className="mx-10 my-10 scale-100 max-h-max">
      <Form handleSubmit={handleSubmit} />
      <div className="grid grid-cols-4 gap-4 aspect-w-16 aspect-h-9 mt-4">
        {image.map((picture) => (
          <div key={picture.id}>
            <img
              src={picture.urls.small}
              alt=""
              class="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
