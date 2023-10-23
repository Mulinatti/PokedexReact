import React from 'react'

const PokeCard = (props) => {
  return (
    <div className="p-3 mb-5 max-w-[200px] shadow-card-shadow rounded-md hover:scale-[1.01] transition-all">
        <div className="flex justify-center">
            <img className="w-[150px] h-[150px]" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/553.png" alt="imagem_pokemon"/>
        </div>
        <hr className="border-black/20 my-2" />
        <div className="flex flex-col justify-between items-center h-[70px]">
            <p className="capitalize">{props.name}</p>
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
