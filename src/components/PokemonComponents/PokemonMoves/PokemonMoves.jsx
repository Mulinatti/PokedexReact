import React from 'react'

const PokemonMoves = ({ moves }) => {
  return (
    <div>{moves.map(move => (<div className='capitalize text-center' key={move.move.name}>{move.move.name}</div>))}</div>
  )
}

export default PokemonMoves