import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";


function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=240`);
        const data = await url.json();

        setPokemons(data.results);
      } catch (erro) {
        console.error(erro);
      }
    }
    getPokemonList();
  }, [])

  return (
    <main className="main_style">
      {pokemons.map(poke => <PokeCard key={poke.name} data={poke}/>)}
    </main>
  );
}

export default App;
