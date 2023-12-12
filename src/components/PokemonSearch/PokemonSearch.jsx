import React from "react";
import { FaSearch } from "react-icons/fa";

const PokemonSearch = ({ value, insertValue }) => {
  return (
    <form className="flex items-center mt-5">
      <div className="text-xl text-neutral-400 border-y border-l border-black/50 max-h-[42px] p-3 rounded-l-lg flex items-center">
        <FaSearch />
      </div>
      <input
        value={value}
        onChange={(e) => {
          e.target.value !== " " && insertValue(e.target.value);
        }}
        className="outline-none rounded-r-lg border-y border-r border-black/50 p-2"
        type="text"
      />
    </form>
  );
};

export default PokemonSearch;
