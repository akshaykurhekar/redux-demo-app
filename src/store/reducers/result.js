import * as actionType from "../action";

const initialState = {
    result: []
}

const resultReducer = (state = initialState, action) =>{

    switch (action.type) {
       
        case actionType.Store_Result:
            return{
                ...state,
                result: state.result.concat({id: new Date() ,value:action.result})
            }
        case actionType.Delete_Result:
            // const updatedArr = [...state.result];
            // updatedArr.splice(action.resultId, 1);
            const updatedArr = state.result.filter(result => result.id !== action.resultId)
            return{
                ...state,
                result: updatedArr
            }               
        default: break       
        
    }    
    return state;
}

export default resultReducer;