import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import Header from "./components/Header/Header";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState("");

  const handleFilterChange = (value) => {
    setPokemonSearch(value);
  };

  return (
    <main>
      <Header
        filterValue={handleFilterChange}
        getPokemons={(value) => setPokemons(value)}
      />
      <section className="main_style">
        {pokemons
          .filter((poke) =>
            poke.data.name.toLowerCase().includes(pokemonSearch.toLowerCase())
          )
          .map((poke) => (
            <PokeCard key={poke.data.name} data={poke.data} />
          ))}
      </section>
    </main>
  );
}

export default App;
