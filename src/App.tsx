import { useDispatch } from 'react-redux';

import { increment, incrementAmount } from './features/counter/counter-slice.ts'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector } from './hooks/useAppSelector.ts';
import Pokemon from './Pokemon.tsx';

const pokemon = 'bulbasaur';

function App() {
    const count = useAppSelector(state => state.counter.value);
    const namePokemon = useAppSelector(state => state.pokemon.name);
    const dispatch = useDispatch()

    function handleOnClick() {
        // dispatch({ type: "counter/increment" })
        dispatch(increment())
    }

    function handleOnClickAmount() {
        // dispatch({ type: "counter/incrementAmount", payload: 5 })
        dispatch(incrementAmount(5))
    }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux</h1>
      <div className="card">
        <button onClick={handleOnClick}>
          count is {count}
        </button>
          <button onClick={handleOnClickAmount}>
          count amount
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
          <h1>{namePokemon}</h1>
      </div>
        <div>
            <Pokemon name={pokemon} />
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;

// redux connect antigo
// const mapStateToProps = (state) => {
//     return {
//         count: state.counter.value,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//       increment: () => dispatch({ type: "counter/increment" }),
//       incrementAmount: (amount: number) => dispatch({ type: "counter/incrementAmount", payload: amount }),
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)
