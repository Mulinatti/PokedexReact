import React, { useEffect, useState } from "react";
import getAllPokemons from "../../utils/getAllPokemons";
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import Loading from "../Loading/Loading";

const Header = ({ getPokemons, filterValue }) => {

  const [search, setSearch] = useState("");
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

  const handleSearchChange = (value) => {
    setSearch(value);
    filterValue(value);
  };

  useEffect(() => {
    handlePokemonList();
  }, []);

  return (
    <header className="flex flex-col items-center justify-center p-2">
      <PokemonSearch
        value={search}
        insertValue={(value) => {handleSearchChange(value)}}
      />
      {loading ? <Loading/> : null}
    </header>
  );
};

export default Header;
