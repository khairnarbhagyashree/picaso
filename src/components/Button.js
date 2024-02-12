import React from "react";

const Button = ({ setSearchTerm }) => {
  const buttons = ["Forest", "Paris", "Pizza", "Dogs", "Ice-cream"];

  return (
    <div className="mt-8 space-x-10">
      {buttons.map((value) => {
        return (
          <button
            onClick={() => setSearchTerm(value)}
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
