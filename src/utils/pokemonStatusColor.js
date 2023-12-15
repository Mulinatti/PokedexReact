const pokemonStatusColor = (stats) => {
  let colorClass;
  
    switch (true) {
      case stats <= 25:
        colorClass = "bg-red-500 border-red-600";
        break;
      case stats < 60 && stats > 25:
        colorClass = "bg-orange-500 border-orange-600";
        break;
      case stats < 90 && stats >= 60:
        colorClass = "bg-yellow-500 border-yellow-600";
        break;
      case stats < 120 && stats >= 90:
        colorClass = "bg-lime-500 border-lime-600";
        break;
      case stats < 150 && stats >= 120:
        colorClass = "bg-green-600 border-green-700";
        break;
      default:
        colorClass = "bg-teal-500 border-teal-600";
    }
  
    return colorClass;
}

export default pokemonStatusColor;