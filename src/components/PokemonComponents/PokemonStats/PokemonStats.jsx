import React from "react";

const PokemonStats = ({ stats }) => {

  const status = (name) => {
    switch(name) {
      case "hp":
        return "HP";
        break;
      case "special-attack":
        return "sp. atk";
        break;
      case "special-defense":
        return "sp. def"
      default:
        return name;
    }
  }

  const statusColor = (stats) => {
    if(stats <= 25)
      return "bg-red-500 border-red-600"
    else if(stats <= 60 && stats >= 25)
      return "bg-orange-500 border-orange-600"
    else if(stats <= 90 && stats >= 60)
      return "bg-yellow-500 border-yellow-600"
    else if(stats <= 120 && stats > 90)
      return "bg-green-500 border-green-600"
    else if(stats <= 180 && stats > 120)
      return "bg-emerald-600 border-emerald-700"
  }

  return (
    <div className="flex sm:justify-center text-black/70 font-medium">
      <div>
        {stats.map((stat) => (
          <span key={stat.stat.name} className="capitalize border border-transparent text-right block mr-3">{status(stat.stat.name)}</span>
        ))}
      </div>
      <div className="flex flex-col w-full justify-between">
        {stats.map(stat => (
          <div className="flex items-center w-full" key={stat.stat.name}>
            <div className={`${statusColor(stat.base_stat)} h-[16px] border rounded-md text-start text-[10px] text-white font-semibold my-1`} style={{width: stat.base_stat >= 213.41 ? "100%" : stat.base_stat}}><p className="ml-1 sm:hidden">{stat.base_stat}</p></div>
            <span className="hidden sm:inline ml-2 text-sm">{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
