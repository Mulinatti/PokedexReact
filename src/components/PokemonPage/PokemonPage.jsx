import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import getPokemon from "../../utils/getPokemon";
import PokemonType from "../PokemonComponents/PokemonType/PokemonType";
import PokemonStats from "../PokemonComponents/PokemonStats/PokemonStats";
import PokemonInfo from "../PokemonComponents/PokemonInfo/PokemonInfo";
import PokemonMoves from "../PokemonComponents/PokemonMoves/PokemonMoves";
import Loading from "../Loading/Loading";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const PokemonPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({
    moves: [],
    abilities: [],
    stats: [],
    sprites: {},
    types: [],
  });

  const handlePokemon = async () => {
    try {
      const pokemonData = await getPokemon(id.toLowerCase());
      console.log(pokemonData);
      setPokemon(pokemonData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePokemon();
  }, [location.key]);

  return loading ? (
    <Loading />
  ) : (
    <main className="p-4">
      <div className="flex font-medium justify-between md:text-lg mb-4 md:mb-0 sm:justify-center">
        <button onClick={() => navigate(`/pokemon/${parseInt(isNaN(id) ? pokemon.id : id) - 1}`, {replace: true})} className="mr-2 flex items-center leading-3 hover:text-black/70 transition-colors"><FaCircleChevronLeft className="mr-2"/>Previous</button>
        <button onClick={() => navigate(`/pokemon/${parseInt(isNaN(id) ? pokemon.id : id) + 1}`, {replace: true})} className="ml-2 flex items-center leading-3 hover:text-black/70 transition-colors">Next<FaCircleChevronRight className="ml-2"/></button>
      </div>
      <div className="md:grid md:grid-cols-2 grid-cols-1 gap-y-12">
        <section className="flex flex-col items-center">
          <div>
            <h1 className="text-4xl headers mb-0 capitalize">{pokemon.name}</h1>
            <span className="text-center text-sm block">#{pokemon.id}</span>
          </div>
          <div className="w-[230px]">
            <img
              className="w-full"
              src={`${pokemon.sprites.front_default}`}
              alt=""
            />
          </div>
          <div>
            <PokemonType typeStyle="px-10 py-2" types={pokemon.types} />
          </div>
        </section>
        <hr />
        <section className="flex justify-center items-center">
          <div className="w-full">
            <h2 className="headers">Base Stats</h2>
            <PokemonStats stats={pokemon.stats} />
          </div>
        </section>
        <hr />
        <section className="col-span-2">
          <h2 className="headers">Pokémon Data</h2>
          <PokemonInfo info={pokemon} />
        </section>
        <hr />
        <section className="col-span-2">
          <h2 className="headers">Moves</h2>
          <PokemonMoves moves={pokemon.moves} />
        </section>
      </div>
    </main>
  );
};

export default PokemonPage;
