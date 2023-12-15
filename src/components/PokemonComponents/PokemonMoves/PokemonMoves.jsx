import React, { useEffect, useState } from 'react'
import getPokemonMoves from '../../../utils/getPokemonMoves';
import Move from '../Move/Move';

const PokemonMoves = ({ moves }) => {
  const [pokemonMoves, setPokemonMoves] = useState([]);

  const handleMoves = async () => {
    const getMoves = await getPokemonMoves(moves);
    setPokemonMoves(getMoves);
  }

  useEffect(() => {
    handleMoves();
  }, [moves]);

  return (
    <table>
      <tbody>
        {pokemonMoves.map(move => <Move key={move.name} move={move}/>)}
      </tbody>
    </table>
  )
}

export default PokemonMoves