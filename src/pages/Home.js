import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../PhotoContext";
import Form from "../components/Form";
import Button from "../components/Button";

function Home() {
  const { image, runSearch } = useContext(PhotoContext);
  const [searchTerm, setSearchTerm] = useState("vietnam");

  useEffect(() => {
    console.log(searchTerm);
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  const handleSubmit = (e, searchEntry) => {
    e.preventDefault();
    console.log(searchEntry);
    setSearchTerm(searchEntry);
  };

  return (
    <div className="mx-8 md:mx-20 my-10 max-h-max ">
      <Form handleSubmit={handleSubmit} />
      <Button setSearchTerm={setSearchTerm} />

      <div className="grid md:grid-cols-4 gap-8 mt-8">
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
