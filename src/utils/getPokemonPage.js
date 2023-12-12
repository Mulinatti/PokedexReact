import axios from "axios";

const getPokemonPage = async (pageIndex) => {
  try {
    const endpoint = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=24&offset=${pageIndex}`
    );

    const pokemonPromises = endpoint.data.results.map((res) => {
      return axios.get(res.url);
    });

    const allPokemons = await axios.all(pokemonPromises);

    return allPokemons;
  } catch (erro) {
    console.error(erro);
  }
};

export default getPokemonPage;
