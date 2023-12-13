import React, { useEffect, useState } from "react";
import getAllPokemons from "../../utils/getAllPokemons";
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import Loading from "../Loading/Loading";

const Header = ({ getPokemons, filterValue, pokemonSearch }) => {

  const [loading, setLoading] = useState(true)

  const handlePokemonList = async () => {
    try {
      setLoading(true)
       
      const pokemonPageList = await getAllPokemons();
      getPokemons(pokemonPageList);

    } catch(erro) {
      console.error(erro)
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePokemonList();
  }, []);

  return (
    <header className="flex flex-col items-center justify-center p-2">
      <PokemonSearch
        value={pokemonSearch}
        insertValue={filterValue}
      />
      {loading ? <Loading/> : null}
    </header>
  );
};

export default Header;
