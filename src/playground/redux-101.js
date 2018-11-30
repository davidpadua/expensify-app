import { createStore } from 'redux';

//:::: INCREMENT
const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
    });
 //:::: DECREMENT
const decrementCount = ({ decrementBy = 1 } = {}) => ({
        type: 'DECREMENT',
        decrementBy
    });
//:::: SET
const setCount = ({ count }) => ({
    type: 'SET',
    count
});
//:::: RESET
const resetCount = () => ({
        type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0}, action) => {
   
    switch (action.type) {

        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            };
        
        case 'DECREMENT' : 
            return {
                count: state.count - action.decrementBy
            };
        
        case 'SET' : 
            return {
                count: action.count
            };

        case 'RESET' : 
            return {
                count: 0
            };

        default: 
            return state;
    }
    
}


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


//I'd like to INCREMENT the count

/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
}); */
store.dispatch(incrementCount({ incrementBy: 5}))
store.dispatch(incrementCount())
// I'd like to RESET the count to zero
store.dispatch(resetCount());

//I'd like to DECREMENT the count

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101}))



