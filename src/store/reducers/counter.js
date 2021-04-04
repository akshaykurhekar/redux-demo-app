import * as actionType from "../action";

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) =>{

    switch (action.type) {
        case actionType.Increment :
            return{
                ...state,
                counter: state.counter + 1
            }; 
        case actionType.Decrement:
            return{
                ...state,
                counter: state.counter - 1
            };
        case actionType.Add:
            return{
                ...state,
                counter: state.counter + action.value
            }
        case actionType.Sub:
            return{
                ...state,
                counter: state.counter - action.value
            }        
        default: break       
        
    }    
    return state;
}

export default counterReducer;