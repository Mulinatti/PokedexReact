import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import ButtonPage from "./components/ButtonPage/ButtonPage";
import axios from "axios"


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  const getPokemonList = async (pageIndex) => {
    try {

      const endpoint = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${pageIndex}`);

      const pokemonPromises = endpoint.data.results.map(res => {
        return axios.get(res.url);
      })

      const allPokemons = await axios.all(pokemonPromises)

      setPokemons(allPokemons);

    } catch (erro) {
      console.error(erro);
    }
  }

  useEffect(() => {
    getPokemonList(page);
  }, [page])

  return (
    <main>
      <header className="flex justify-center p-2">
        <div className="flex justify-between w-[100px]">
          <ButtonPage pagination={() => {
            setPage(page - 24);
            getPokemonList(page);
          }}><i className="fa-solid fa-chevron-left"></i></ButtonPage>
          <ButtonPage pagination={() => {
            setPage(page + 24);
            getPokemonList(page);
          }}><i className="fa-solid fa-chevron-right"></i></ButtonPage>
        </div>
      </header>
      <section className="main_style">
        {pokemons.map(poke => <PokeCard key={poke.data.name} data={poke.data}/>)}
      </section>
    </main>
  );
}

export default App;
