const pokemonStatusName = (name) => {
  
  let statName;

  switch(name) {
    case "hp":
      statName =  "HP";
      break;
    case "special-attack":
      statName = "sp. atk";
      break;
    case "special-defense":
      statName = "sp. def"
      break;
    default:
      statName = name;
  }
  return statName;
}

export default pokemonStatusName;