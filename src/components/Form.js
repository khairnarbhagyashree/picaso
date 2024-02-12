import React, { useState } from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");
  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <form
        className="search-form  w-1/2"
        onSubmit={(e) => handleSubmit(e, searchEntry)}
      >
        {/* <div className="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
 <input onChange={updateSearchInput} value={searchEntry} placeholder="Just type in..." className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500" type="text" />
</div> */}

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={updateSearchInput}
            type="search"
            id="default-search"
            className="block items-center w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search pictures..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
