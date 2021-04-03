const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
 
  if(action.type === 'INC_Counter'){
      return{
          ...state,
          counter: state.counter +1
      }
  }
  if(action.type === 'Add_Counter'){
    return{
        ...state,
        counter: state.counter + action.value1
    }
}

    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription 
store.subscribe(() =>{
    console.log("[Subscribe] ", store.getState());
})

// DispatchAction
store.dispatch({type:'INC_Counter'});
store.dispatch({type:'Add_Counter', value1: 10});

console.log(store.getState());


