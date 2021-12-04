import { useEffect } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

import ActionPokemon from './ActionPokemon'

// REDUX
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { fetchPokemon } from '../../../../redux/reducers/pokemon'

const CardPokemon = () => {

    const dispatch = useAppDispatch();
    const { seleted, loanding } = useAppSelector(state => state.pokemon)


    useEffect(() => {
        dispatch(fetchPokemon());
    }, [])

    return (
        <div className="pokemon-card">
            { !loanding ? (
                <>
                    { seleted && (
                        <>
                            <ActionPokemon />
                            <div className="pokemon-image">
                                <img src={ seleted.sprites.other.dream_world.front_default } />
                            </div>
                            <div className="pokemon-title">
                                <h1>{ seleted.forms[0].name }</h1>
                                <p>{ "hp " + seleted.stats[0].base_stat  }</p>
                            </div>
                            <div className="pokemon-experience">
                                <p>{ seleted.base_experience + " EXP" }</p>
                            </div>
                            <div className="pokemon-footer">
                                <div>
                                    <p className="point">{ seleted.stats[1].base_stat + "K" }</p>
                                    <p className="desc">Ataque</p>
                                </div>
                                <div>
                                    <p className="point">{ seleted.stats[2].base_stat + "K" }</p>
                                    <p className="desc">Especial</p>
                                </div>
                                <div>
                                    <p className="point">{ seleted.stats[3].base_stat + "K" }</p>
                                    <p className="desc">Defensa</p>
                                </div>
                            </div>
                        </>
                    ) }
                    
                </>
            ) : (
                <div className="loading">
                    <img src={'logo.png'}/>
                    <BeatLoader size={15} color={"red"}/>
                </div>
            ) }
        </div>
        
    )
}

export default CardPokemon
