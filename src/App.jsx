import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";


function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async (id) => {
      try {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
        const data = await url.json();

        setPokemons(data.results);
        console.log(pokemons);
      } catch (erro) {
        console.error(erro);
      }
    }
    getPokemon();
  }, [])

  return (
    <main className="p-5 grid grid-cols-6">
      {pokemons.map(poke => <PokeCard key={poke.name} name={poke.name}/>)}
    </main>
  );
}

export default App;
