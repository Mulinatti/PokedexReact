import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPokemon from "../../utils/getPokemon";
import PokemonType from "../PokemonType/PokemonType";
import PokemonStats from "../PokemonComponents/PokemonStats/PokemonStats";

const PokemonPage = () => {
  const pokemonParam = useParams();

  const [pokemon, setPokemon] = useState({stats: [], sprites: {}, types: []});

  const handlePokemon = async () => {
    const pokemonData = await getPokemon(pokemonParam.id)
    console.log(pokemonData);
    setPokemon(pokemonData)
  }

  useEffect(() => {
    handlePokemon();
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-center text-4xl text-black/80 capitalize font-bold">{pokemon.name}</h1>
      <span className="text-center text-sm block">#{pokemon.id}</span>
      <div>
        <section className="flex flex-col items-center">
          <div className="w-[230px]">
            <img className="w-full" src={`${pokemon.sprites.front_default}`} alt="" />
          </div>
          <div>
            <PokemonType types={pokemon.types}/>
          </div>
        </section>
        <hr />
        <section>
          <h2 className="text-center font-bold text-lg">Stats</h2>
          <PokemonStats stats={pokemon.stats}/>
        </section>
      </div>
    </main>
  );
};

export default PokemonPage;
