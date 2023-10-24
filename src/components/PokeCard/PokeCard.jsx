import React, { useEffect, useState } from 'react'
import typeColor from './typeColor';

const PokeCard = ({data}) => {

	const [pokemon, setPokemon] = useState({
		"types": [
			{
				"slot": 1,
				"type": {}
			},
			{
				"slot": 2,
				"type": {}
			}
		]
	});
	
	const getPokemon = async () => {
		const url = await fetch(data.url);
		const pokemonData = await url.json();

		
		const pokemonInfo = {
			name: pokemonData.name,
			id: pokemonData.id,
			types: pokemonData.types,
			sprite: pokemonData.sprites.front_default
		}
		
		
		setPokemon(pokemonInfo)
	}

	useEffect(() => {
		getPokemon();
	}, [])

  return (
    <div className="cursor-pointer p-3 w-full hover:bg-black/10 shadow-card-shadow rounded-md hover:scale-[1.01] transition-all">
				<p className="capitalize text-black/80 text-center">{pokemon.name}</p>
        <div className="flex justify-center">
            <img className="w-[120px] h-[120px]" src={pokemon.sprite} alt="imagem_pokemon"/>
        </div>
        <hr className="border-black/20 my-2" />
        <div className="flex flex-col justify-between items-center h-[60px]">
					<div className="text-center">
						<p className="text-xs text">#{pokemon.id}</p>
					</div>
            <div className="flex justify-center min-w-[170px]">
                <div className="flex justify-center w-full">
									{pokemon.types.map(type => (
										<div className={`${typeColor[type.type.name]} card_pokemon_type capitalize mx-1`}>{type.type.name}</div>
									))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokeCard;
