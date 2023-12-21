import React from "react";

const PokemonGen = ({ gens, changeGen }) => {
  return (
    <div className="w-full flex flex-col mb-5 items-center justify-center">
      <p className="mb-2">See moves by generation</p>
      <div>
        {gens.map((gen, index) => (
          <button onClick={() => changeGen(gen)} key={gen} className="mx-2 text-lg text-blue-500 hover:text-blue-900 font-bold">{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default PokemonGen;
