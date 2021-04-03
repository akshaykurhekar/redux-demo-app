import * as actionType from "./action";

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) =>{

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
        case actionType.Store_Result:
            return{
                ...state,
                result: state.result.concat({id: new Date() ,value:state.counter})
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

export default reducer;