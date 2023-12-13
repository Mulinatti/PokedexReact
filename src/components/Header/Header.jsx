import React, { useEffect, useState } from "react";
import getAllPokemons from "../../utils/getAllPokemons";
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import Loading from "../Loading/Loading";

const Header = ({ getPokemons, filterValue, search }) => {
  const [loading, setLoading] = useState(true);

  const handlePokemonList = async () => {
    try {
      setLoading(true);

      const pokemonList = await getAllPokemons();
      getPokemons(pokemonList);
    } catch (erro) {
      console.error(erro);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePokemonList();
  }, []);

  return (
    <header className="flex flex-col items-center justify-center p-2">
      <PokemonSearch value={search} insertValue={filterValue} />
      {loading ? <Loading /> : null}
    </header>
  );
};

export default Header;
