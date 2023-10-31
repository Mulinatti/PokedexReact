import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import ButtonPage from "./components/ButtonPage/ButtonPage";
import axios from "axios"


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  const getPokemonList = async (pagea) => {
    try {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${pagea}`)
      .then(response => {

        const pokemonPromises = response.data.results.map(res => {
          return axios.get(res.url);
        })

        Promise.all(pokemonPromises).then(data => setPokemons(data));
      })
    } catch (erro) {
      console.error(erro);
    }
  }

  useEffect(() => {
    getPokemonList(page);
  }, [])

  return (
    <main>
      <header className="flex justify-center p-2">
        <div className="flex justify-between w-[100px]">
          <ButtonPage pagination={() => {
            setPage(page - 24);
            getPokemonList(page - 24);
          }}><i className="fa-solid fa-chevron-left"></i></ButtonPage>
          <ButtonPage pagination={() => {
            setPage(page + 24);
            getPokemonList(page + 24);
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
