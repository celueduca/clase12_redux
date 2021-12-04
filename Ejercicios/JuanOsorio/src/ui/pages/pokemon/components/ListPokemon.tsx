import React from 'react'

// REDUX
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import { deletePokemon } from '../../../..//redux//reducers/pokemon'

const ListPokemon = () => {

    const dispatch = useAppDispatch();
    const { list } = useAppSelector(state => state.pokemon);
    const deletePkmon = (element: number) => {
        dispatch(deletePokemon(element, list));
    }
    

    return (
        <div className="list-pokemon">
            <h1>Lista Pokemon</h1>
            <div className="list">
                {list.map((item: any, key: number) => (
                    <div className="item" key={key}>
                        <div className="item-image">
                            <img src={item.sprites.other.dream_world.front_default} />
                        </div>
                        <div className="item-info">
                            <h1>{item.forms[0].name}</h1>
                            <p>{item.base_experience + " EXP"}</p>
                        </div>
                        <div className="item-btnDelete">
                            <button onClick={() => deletePkmon(key)}>
                                <p>Eliminar</p>
                                </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListPokemon
