import React from "react";
import { useParams } from "react-router-dom";

const PokemonPage = () => {
  const pokemonParams = useParams();

  return <main>{JSON.stringify(pokemonParams.id)}</main>;
};

export default PokemonPage;
