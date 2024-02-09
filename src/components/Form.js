import React, { useState } from "react";


const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");
  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  return (
    <form
      className="search-form flex justify-center items-center"
      onSubmit={(e) => handleSubmit(e, searchEntry)}
    >
      <div className="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
 <input onChange={updateSearchInput} value={searchEntry} placeholder="Just type in..." className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500" type="text" />
</div>
      
      <button 
      className="smky-btn3 relative  hover:text-[#060505d4] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#e2a3a3] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
       Submit
      </button>
    </form>
  );
};

export default Form;
