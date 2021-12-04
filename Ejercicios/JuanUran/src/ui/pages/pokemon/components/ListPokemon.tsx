import React from 'react'
import { AiFillDelete } from "react-icons/ai";
// REDUX
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import { deletePokemon } from '../../../../redux/reducers/pokemon'

const ListPokemon = () => {
    const { list } = useAppSelector(state => state.pokemon);

    const dispatch = useAppDispatch();
    
    const PokemonDelete= (key:number) =>{
        dispatch(deletePokemon(list, key))
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
                        <AiFillDelete className="icon-delete" onClick={()=>PokemonDelete(key)}/>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ListPokemon
