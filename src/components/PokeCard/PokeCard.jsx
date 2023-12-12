import typeColor from './typeColor';

const PokeCard = ({data}) => {
		
	const pokemon = {
		name: data.name,
		id: data.id,
		types: data.types,
		sprite: data.sprites.front_default
	}


  return (
    <div className="cursor-pointer p-3 w-full hover:bg-black/10 shadow-card-shadow rounded-md hover:scale-[1.01] transition-all">
				<p className="capitalize text-black/80 text-center">{pokemon.name}</p>
        <div className="flex justify-center">
            <img className="w-[120px] h-[120px]" src={pokemon.sprite != null ? pokemon.sprite : "./images/noData.jpg"} alt="imagem_pokemon"/>
        </div>
        <hr className="border-black/20 my-2" />
        <div className="flex flex-col justify-between items-center h-[60px]">
					<div className="text-center">
						<p className="text-xs text">#{pokemon.id}</p>
					</div>
            <div className="flex justify-center min-w-[170px]">
                <div className="flex justify-center w-full">
					{pokemon.types.map(type => (
						<div key={type.type.name} className={`${typeColor[type.type.name]} card_pokemon_type capitalize mx-1`}>{type.type.name}</div>
					))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokeCard;
