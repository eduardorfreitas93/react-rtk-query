import { createStore } from 'redux'

// Store
const initialState = {
    counter: {
        value: 0
    }
}

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case "counter/increment": {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            }
        }
        case "counter/incrementAmount": {
            return {
                ...state,
                counter: {
                    value: state.counter.value + action.payload
                }
            }
        }
        default:
            return state
    }
}

export const store = createStore(reducer)
