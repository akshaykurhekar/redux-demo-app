import * as actionType from "../action/actionTypes";
import {updateObject } from '../utility';

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) =>{

    switch (action.type) {
        case actionType.Increment :
            return updateObject(state, {counter: state.counter + 1});
        case actionType.Decrement:
            return updateObject(state, {counter: state.counter - 1});
        case actionType.Add:
            return updateObject(state, {counter: state.counter + action.value});
        case actionType.Sub:
            return updateObject(state, {counter: state.counter - action.value})
        default: break
    }    
    return state;
}

export default counterReducer;