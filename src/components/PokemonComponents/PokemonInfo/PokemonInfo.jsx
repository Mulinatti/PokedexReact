import React from "react";
import PokemonType from "../PokemonType/PokemonType";

const PokemonInfo = ({ info }) => {
  return (
    <table className="w-full">
      <tbody className="info_table capitalize text-black/70">
        <tr>
          <th>Name</th>
          <td>{info.name}</td>
        </tr>
        <tr>
          <th>Abilities</th>
          <td className="ability justify-start items-center">
            {info.abilities.map((ability, index) => (
              <div
                className="flex text-sm p-1"
                key={ability.ability.url + Math.random()}
              >
                {index + 1} - {ability.ability.name}
              </div>
            ))}
          </td>
        </tr>
        <tr>
          <th>Type</th>
          <td>
            <PokemonType
              left={true}
              typeStyle="p-0 w-full font-medium max-w-[92px]"
              types={info.types}
            />
          </td>
        </tr>
        <tr>
          <th>ID</th>
          <td>{info.id}</td>
        </tr>
        <tr>
          <th>Base Exp.</th>
          <td>{info.base_experience}</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>{(info.weight / 10).toFixed(1)}kg</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>{(info.height / 10).toFixed(1)}m</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PokemonInfo;
