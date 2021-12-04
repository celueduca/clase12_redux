import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

interface PokemonState {
    list: any,
    seleted: any,
    error: any,
    loanding: boolean
}

const initialState: PokemonState = {
    list: [],
    seleted: null,
    error: null,
    loanding: false
}


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addItemPokemon: (state, action: PayloadAction<any>) => {
            state.list = [...state.list, action.payload];
        },
        selectedPokemon: (state, action: PayloadAction<any>) => {
            state.seleted = action.payload;
        },
        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload;
        },
        setLoanding: (state, action: PayloadAction<any>) => {
            state.loanding = action.payload;
        },
        deletePkmon: (state, action: PayloadAction<any>) => {
            state.list = action.payload;
        }
    }
})

export const { addItemPokemon, selectedPokemon, setError, setLoanding, deletePkmon } = pokemonSlice.actions

export default pokemonSlice.reducer


export const fetchPokemon = () => async (dispatch: any) => {
    try {
        dispatch(setLoanding(true));
        const number = Math.floor(Math.random() * 200) + 1;

        const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/" + number);
        const data = resp.data;

        dispatch(selectedPokemon(data));

        setTimeout(() => {
            dispatch(setLoanding(false));
        }, 1000)

    } catch (error) {
        dispatch(setLoanding(false));
        dispatch(setError(error));
    }
}

export const addPokemon = (data: any) => async (dispatch: any) => {
    dispatch(addItemPokemon(data));
}

export const deletePokemon = (index: number, data: any) => async (dispatch: any) => {
    const doc = data.filter((element: any, i: number) => i !== index)
    dispatch(
        deletePkmon(doc)
    );
};