import React, { useEffect, useState } from 'react'

const PokeCard = ({data}) => {

	const [pokemon, setPokemon] = useState([]);
	
	const getPokemon = async () => {
		const url = await fetch(data.url);
		const pokemonData = await url.json();

		setPokemon(pokemonData)
	}

	useEffect(() => {
		getPokemon();
	}, [])

	const pokemonInfo = {
		name: pokemon.name,
		id: pokemon.id,
		sprite: pokemon.sprites.front_default
	}

	console.log(pokemon)

  return (
    <div className="p-3 mb-5 max-w-[200px] shadow-card-shadow rounded-md hover:scale-[1.01] transition-all">
        <div className="flex justify-center">
            <img className="w-[120px] h-[120px]" src={pokemonInfo.sprite} alt="imagem_pokemon"/>
        </div>
        <hr className="border-black/20 my-2" />
        <div className="flex flex-col justify-between items-center h-[70px]">
					<div className="text-center">
            <p className="capitalize text-black/80">{pokemonInfo.name}</p>
						<p className="text-xs text">#{pokemonInfo.id}</p>
					</div>
            <div className="flex justify-center min-w-[170px]">
                <div className="flex justify-between w-full">
                    <div className={`card_pokemon`}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokeCard;
