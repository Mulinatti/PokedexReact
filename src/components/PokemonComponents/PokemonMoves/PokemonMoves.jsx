import React, { useEffect, useState } from "react";
import getPokemonMoves from "../../../utils/getPokemonMoves";
import Move from "../Move/Move";
import Loading from "../../Loading/Loading";
import PokemonGen from "../PokemonGen/PokemonGen";

const PokemonMoves = ({ moves }) => {
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleMoves = async () => {
    try {
      setLoading(true);
      const getMoves = await getPokemonMoves(moves);
      setPokemonMoves(getMoves);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleMoves();
  }, [moves]);

  const [genMove, setGenMove] = useState("generation-i");

  const generations = [
    "generation-i",
    "generation-ii",
    "generation-iii",
    "generation-iv",
    "generation-v",
    "generation-vi",
    "generation-vii",
    "generation-viii",
  ]

  return (
    loading ? <Loading/> : <div className="max-w-full overflow-scroll overflow-y-hidden">
      <PokemonGen gens={generations} changeGen={(value) => setGenMove(value)}/>
      <table className="text-center w-full border-spacing-3 border-separate">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th>Type</th>
            <th>Power</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {pokemonMoves
          .filter(move => move.generation.name === genMove)
          .map(move => (
            <Move key={move.id + Math.random()} move={move} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonMoves;
