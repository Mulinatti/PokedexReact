import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPokemon from "../../utils/getPokemon";

const PokemonPage = () => {
  const pokemonParam = useParams();

  const [pokemon, setPokemon] = useState({});

  const handlePokemon = async () => {
    const pokemonData = await getPokemon(pokemonParam.id)
    console.log(pokemonData);
    setPokemon(pokemonData)
  }

  useEffect(() => {
    handlePokemon();
  }, [])

  return (
    <main>
      <h1>{pokemon.name}</h1>
      <section>

      </section>
    </main>
  );
};

export default PokemonPage;
