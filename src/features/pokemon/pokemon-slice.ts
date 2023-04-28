import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    name: string;
}

const initialState: PokemonState = {
    name: ''
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setNamePokemon: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    }
})

export const { setNamePokemon } = pokemonSlice.actions
export const pokemonReducer = pokemonSlice.reducer;
