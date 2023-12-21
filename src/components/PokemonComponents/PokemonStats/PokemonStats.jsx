import React from "react";
import pokemonStatusName from "../../../utils/pokemonStatusName"
import pokemonStatusColor from "../../../utils/pokemonStatusColor"

const PokemonStats = ({ stats }) => {

  return (
    <div>
      <table className="w-full">
        <tbody>
          {stats.map(stat => (
            <tr className="text-sm md:text-base text-black/70 font-medium" key={stat.stat.name}>
              <th className="capitalize text-end pr-2">{pokemonStatusName(stat.stat.name)}</th>
              <td className="w-full">
                <div 
                  style={{width: `${(stat.base_stat * 100) / 255}%`}} 
                  className={`border rounded-[5px] h-[13px]
                  ${pokemonStatusColor(stat.base_stat)}`}
                ></div>
              </td>
              <td className="text-start pl-2">{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonStats;
