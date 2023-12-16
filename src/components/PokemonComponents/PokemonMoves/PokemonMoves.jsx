import React, { useEffect, useState } from "react";
import getPokemonMoves from "../../../utils/getPokemonMoves";
import Move from "../Move/Move";

const PokemonMoves = ({ moves }) => {
  const [pokemonMoves, setPokemonMoves] = useState([]);

  const handleMoves = async () => {
    const getMoves = await getPokemonMoves(moves);
    setPokemonMoves(getMoves);
  };

  useEffect(() => {
    handleMoves();
  }, [moves]);

  return (
    <div className="max-w-full overflow-scroll overflow-y-hidden">
      <table className="text-center w-full border-spacing-3 border-separate">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th>Accuracy</th>
            <th>Type</th>
            <th>Power</th>
          </tr>
        </thead>
        <tbody>
          {pokemonMoves.map((move) => (
            <Move key={move.id + Math.random()} move={move} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonMoves;
