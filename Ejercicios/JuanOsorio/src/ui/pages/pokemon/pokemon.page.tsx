import React from 'react'
import CardPokemon from './components/CardPokemon'
import ListPokemon from './components/ListPokemon'

import './pokemon.style.css'

const PokemonPage = (): JSX.Element => {
    return (
        <div className="pokemon">
           
            <div className="content">
                <div className="pokemon-back"
                    style={{backgroundImage: 'url(background.jpeg)'}}
                >
                    <div className="back-color"></div>
                </div>
                <CardPokemon />
            </div>
            <div className="list">
                <ListPokemon />
            </div>
        </div>
    )
}

export default PokemonPage
