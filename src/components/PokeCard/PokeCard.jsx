import React from 'react'

const PokeCard = (props) => {
  return (
    <div className="p-3 max-w-[200px] shadow-card-shadow rounded-md hover:scale-[1.01] transition-all">
        <div className="flex justify-center">
            <img className="w-[150px] h-[150px]" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/553.png" alt="imagem_pokemon"/>
        </div>
        <hr className="border-black/20 my-2" />
        <div className="flex flex-col justify-between items-center h-[70px]">
            <p>Krookodile</p>
            <div className="flex justify-center min-w-[170px]">
                <div className="flex justify-between w-full">
                    <div className="bg-stone-700 card_pokemon">Dark</div>
                    <div className="bg-orange-300 card_pokemon">Ground</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokeCard;
