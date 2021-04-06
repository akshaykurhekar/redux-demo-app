import * as actionType from "../action/actionTypes";
import  { updateObject } from '../utility';

const initialState = {
    result: []
}

const deleteResult = (state, action) =>{
    const updatedArr = state.result.filter(result => result.id !== action.resultId);
    return updateObject(state, {result: updatedArr});
}

const resultReducer = (state = initialState, action) =>{

    switch (action.type) {
       
        case actionType.Store_Result: return updateObject(state, {result: state.result.concat({id: new Date(), value:action.result})});
        case actionType.Delete_Result: return deleteResult(state, action);
        default: break       
    }    
    return state;
}

export default resultReducer;