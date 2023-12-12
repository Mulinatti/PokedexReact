import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPokemon from "../../utils/getPokemon";

const PokemonPage = () => {
  const pokemonParam = useParams();

  const [pokemon, setPokemon] = useState({});

  const handlePokemon = async () => {
    const pokemonData = await getPokemon(pokemonParam.id)
    setPokemon(pokemonData)
  }

  useEffect(() => {
    handlePokemon();
  }, [])

  return (
    <main>
      
    </main>
  );
};

export default PokemonPage;
