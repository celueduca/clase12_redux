import React from 'react'

// REDUX
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { deleteePokemon, deletePokemon } from '../../../../redux/reducers/pokemon'

const ListPokemon = () => {

    const { list , seleted } = useAppSelector(state => state.pokemon);
    const dispatch = useAppDispatch();

    const deletePokemonList = (key:number) =>{
        dispatch(deleteePokemon(list , key));

    }

    return (
        <div className="list-pokemon">
            <h1>Lista Pokemon</h1>
            <div className="list">
                { list.map((item: any, key: number) => (
                    <div className="item" key={key}>
                        <div className="item-image">
                            <img src={ item.sprites.other.dream_world.front_default} />
                        </div>
                        <div className="item-info">
                        <h1>{ item.forms[0].name }</h1>
                        <p>{ item.base_experience + " EXP"  }</p>
                        </div>
                        <button className="buttonDelete" onClick={()=> deletePokemonList(key)}>-</button>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ListPokemon
