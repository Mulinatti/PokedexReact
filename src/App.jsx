import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import getPokemonPage from "./utils/getPokemonPage";
import Header from "./components/Header/Header";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);


  const handlePokemonList =  async (page) => {
    const pokemonPageList = await getPokemonPage(page);
    setPokemons(pokemonPageList);
  }

  useEffect(() => {
    handlePokemonList(page)
  }, [page]);

  return (
    <main>
      <Header page={page} getPage={(pageValue => setPage(pageValue))}/>
      <section className="main_style">
        {pokemons.map((poke) => (
          <PokeCard key={poke.data.name} data={poke.data} />
        ))}
      </section>
    </main>
  );
}

export default App;
