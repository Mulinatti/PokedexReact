import React from "react";
import typeColor from "../../../utils/typeColor";
import { useLocation } from "react-router-dom";

const PokemonType = ({ types }) => {

  const location = useLocation();
  const path = location.pathname.includes("pokemon"); 

  return (
    <div className="flex justify-center w-full">
      {types.map((type) => (
        <div
          key={type.type.name}
          className={`
            ${typeColor[type.type.name]}
            card_pokemon_type capitalize mx-1
            ${path && "px-10 py-2"}`
          }
        >
          {type.type.name}
        </div>
      ))}
    </div>
  )
}

export default PokemonType;
