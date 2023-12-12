import axios from "axios"

const getPokemon = async (id) => {
  try {
    const endpoint = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = endpoint.data

    return data;
  }
  catch(erro) {
    console.error(erro)
  }
}

export default getPokemon;