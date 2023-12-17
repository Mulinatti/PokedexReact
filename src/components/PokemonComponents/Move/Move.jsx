import React from "react";
import PokemonType from "../PokemonType/PokemonType";
import typeColor from "../../../utils/typeColor";
import { GoDash } from "react-icons/go";

const Move = ({ move }) => {

  console.log(move);

  return (
    <tr className="capitalize">
      <td className="sm:w-[20%] md:w-[10%]">
        <div className="text-start w-[160px]">{move.name}</div>
      </td>
      <td>
        <PokemonType
          typeStyle="w-full font-medium max-w-[90px]"
          types={[move.type]}
        />
      </td>
      <td>
        {move.power ? move.power : <GoDash style={{ margin: "0 auto" }} />}
      </td>
      <td>
        {move.accuracy ? (
          move.accuracy
        ) : (
          <GoDash style={{ margin: "0 auto" }} />
        )}
      </td>
    </tr>
  );
};

export default Move;
