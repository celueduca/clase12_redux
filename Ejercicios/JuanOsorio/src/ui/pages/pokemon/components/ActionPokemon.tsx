import React from 'react'

// REDUX
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { fetchPokemon, addPokemon } from '../../../../redux/reducers/pokemon'

const ActionPokemon = () => {

    const dispatch = useAppDispatch();

    const { seleted } = useAppSelector(state => state.pokemon)

    const handleNext = () => {
        dispatch(fetchPokemon());
    }

    const handleAddPokemon = () => {
        dispatch(addPokemon(seleted));
    }

    return (
        <div className="pokemon-action">
            <button onClick={ () => handleAddPokemon() }>
                +
            </button>
            <button onClick={ () => handleNext() }>
                { ">" }
            </button>
        </div>
    )
}

export default ActionPokemon
