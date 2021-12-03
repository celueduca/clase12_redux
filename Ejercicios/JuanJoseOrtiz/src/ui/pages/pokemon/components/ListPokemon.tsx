import React from 'react'
import { ReactComponent as TrashSVG } from '../../../../assets/svg/trash.svg';

// REDUX
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import  {deletePokemon } from '../../../..//redux//reducers/pokemon'

const ListPokemon = () => {

    const dispatch = useAppDispatch();

    const { list } = useAppSelector(state => state.pokemon);
    const deleteItemPokemon =  (index:number) => {
        console.log(list)
        dispatch(deletePokemon(index, list));
    }
    return (

        <div className="list-pokemon">
            <h1>Lista Pokemon</h1>
            <div className="list">
                { list.map((item: any, key: number) => (
                    <div className="item" key={key}>
                        <div className="item-image">
                            <img src={ item.sprites.other.dream_world.front_default} alt="imagen" />
                        </div>
                        <div className="item-info">
                        <h1>{ item.forms[0].name }</h1>
                        <p>{ item.base_experience + " EXP"  }</p>
                        </div>
                        <div className="item-button">
                            <button onClick={() => deleteItemPokemon(key)}>
                                <TrashSVG/>
                            </button>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ListPokemon
