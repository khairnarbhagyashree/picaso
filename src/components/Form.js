import React, { useState } from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");
  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  return (
    <form
      className="search-form"
      onSubmit={(e) => handleSubmit(e, searchEntry)}
    >
      {/* <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchEntry}

      /> */}

      {/* <div className="mb-6 w-60 flex">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Default input
        </label>
        <input
          onChange={updateSearchInput}
          value={searchEntry}
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div> */}
      <input
        onChange={updateSearchInput}
        value={searchEntry}
        type="text"
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <button
        type="submit"
        className={`search-button ${
          searchEntry.trim() ? "active" : null
        } bg-gray-500 px-8 py-3`}
        disabled={!searchEntry.trim()}
      >
        Search
      </button>
    </form>
  );
};

export default Form;
