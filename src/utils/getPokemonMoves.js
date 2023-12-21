import axios from "axios";

const getPokemonMoves = async (moves) => {
  try {
    const movesUrl = moves.map(move => {
      return axios.get(move.move.url)
    })

    const allPokemonMoves = await axios.all(movesUrl);

    return allPokemonMoves.map(res => res.data)

  }
  catch(erro) {
    console.error(erro);
  }
}

export default getPokemonMoves;