import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPokemon from "../../utils/getPokemon";
import PokemonType from "../PokemonComponents/PokemonType/PokemonType";
import PokemonStats from "../PokemonComponents/PokemonStats/PokemonStats";
import PokemonInfo from "../PokemonComponents/PokemonInfo/PokemonInfo";

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
      <h1 className="text-4xl headers mb-0 capitalize">{pokemon.name}</h1>
      <span className="text-center text-sm block">#{pokemon.id}</span>
      <div>
        <section className="flex flex-col items-center">
          <div className="w-[230px]">
            <img className="w-full" src={`${pokemon.sprites.front_default}`} alt="" />
          </div>
          <div>
            <PokemonType typeStyle="px-10 py-2" types={pokemon.types}/>
          </div>
        </section>
        <hr />
        <section>
          <h2 className="headers">Base Stats</h2>
          <PokemonStats stats={pokemon.stats}/>
        </section>
        <hr />
        <section>
          <h2 className="headers">Pokémon Info</h2>
          <PokemonInfo info={pokemon}/>
        </section>
      </div>
    </main>
  );
};

export default PokemonPage;
