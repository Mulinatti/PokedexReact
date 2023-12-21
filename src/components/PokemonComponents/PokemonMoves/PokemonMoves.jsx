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

  return (
    loading ? <Loading/> :
    <div className="flex flex-col items-center">
      <div className="w-full md:w-4/5 overflow-scroll overflow-y-hidden">
        <table className="moves_table text-center md:text-lg w-full">
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
            .map(move => (
              <Move key={move.id} move={move} />
            ))}
          </tbody>
        </table>
      </div>
    </div> 
  );
};

export default PokemonMoves;
