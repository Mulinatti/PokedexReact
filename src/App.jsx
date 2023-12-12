import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import ButtonPage from "./components/ButtonPage/ButtonPage";
import getPokemonPage from "./utils/getPokemonPage";

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
      <header className="flex justify-center p-2">
        <div className="flex justify-between w-[100px]">
          <ButtonPage
            pagination={() => {
              setPage(page - 24);
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </ButtonPage>
          <ButtonPage
            pagination={() => {
              setPage(page + 24);
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </ButtonPage>
        </div>
      </header>
      <section className="main_style">
        {pokemons.map((poke) => (
          <PokeCard key={poke.data.name} data={poke.data} />
        ))}
      </section>
    </main>
  );
}

export default App;
