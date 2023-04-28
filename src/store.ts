import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { pokemonApi } from './api/pokemonApi.ts';

import { counterReducer } from './features/counter/counter-slice.ts';
import { pokemonReducer } from './features/pokemon/pokemon-slice.ts';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemon: pokemonReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
