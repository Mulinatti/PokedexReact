import React from "react";
import typeColor from "../../../utils/typeColor";
import { useLocation } from "react-router-dom";

const PokemonType = ({ types, typeStyle, left }) => {

  const location = useLocation();
  const path = location.pathname.includes("pokemon"); 

  return (
    <div className={`flex ${left ? "justify-start" : "justify-center"} w-full`}>
      {types.map((type) => (
        <div
          key={type.type.name}
          className={`
            ${typeColor[type.type.name]}
            card_pokemon_type capitalize mx-1 first:ml-0 last:mr-0
            ${typeStyle}`
          }
        >
          {type.type.name}
        </div>
      ))}
    </div>
  )
}

export default PokemonType;
