import React, { useEffect, useState } from "react";
import getPokemonPage from "../../utils/getPokemonPage";
import PokemonSearch from "../PokemonSearch/PokemonSearch";

const Header = ({ getPokemons, filterValue }) => {

  const [search, setSearch] = useState("");

  const handlePokemonList = async () => {
    const pokemonPageList = await getPokemonPage();
    getPokemons(pokemonPageList);
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
    </header>
  );
};

export default Header;
