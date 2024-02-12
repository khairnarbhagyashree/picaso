import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../PhotoContext";
import axios from "axios";
import { apiKey } from "../api/config";
import Form from "../components/Form";
import Button from "../components/Button";

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
    <div className="mx-10 my-10 max-h-max ">
      <Form handleSubmit={handleSubmit} />
      <Button setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-4 gap-8 mt-8 mx-8">
        {image.map((picture) => (
          <div key={picture.id} className="mt-5 overflow-hidden">
            <img
              src={picture.urls.small}
              alt=""
              className="object-cover aspect-auto w-full h-full transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
