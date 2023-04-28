import { useGetPokemonByNameQuery } from './api/pokemonApi.ts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNamePokemon } from './features/pokemon/pokemon-slice.ts';

export default function Pokemon({name}: {name: string}) {
    const dispatch = useDispatch();
    const { data, error, isLoading, isFetching} = useGetPokemonByNameQuery(
        name,
    )

    useEffect(() => {
        if (!data) return;

        dispatch(setNamePokemon(data.species.name))
    }, [dispatch, data])

  return (
      <>
          {error ? (
              <>Oh no, there was an error</>
          ) : isLoading ? (
              <>Loading...</>
          ) : data ? (
              <>
                  <h3>
                      {data.species.name} {isFetching ? '...' : ''}
                  </h3>
                  <img src={data.sprites.front_shiny} alt={data.species.name} />
              </>
          ) : null}
      </>
  );
}
