import { useState } from "react";
import PokeCard from "../PokeCard/PokeCard";
import Header from "../Header/Header";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState("");

  // const handleFilterChange = (value) => {
  //   setPokemonSearch(value);
  // };

  return (
    <main>
      <Header
        filterValue={value => setPokemonSearch(value)}
        getPokemons={(value) => setPokemons(value)}
        searchValue={pokemonSearch}
      />
      <section className="main_style">
        {pokemons
          .filter((poke) =>
            poke.data.name.includes(pokemonSearch.toLowerCase())
          )
          .map((poke) => (
            <PokeCard key={poke.data.name} data={poke.data} />
          ))}
      </section>
    </main>
  );
}

export default Home;
