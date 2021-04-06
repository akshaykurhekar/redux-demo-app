import * as actionTypes from './actionTypes';

export const saveResult = (res) =>{
    return {
        type:actionTypes.Store_Result,
        result: res
    }
}

export const onStoreResult = (result) =>{
    return (dispatch) => {
        // can change data old state 
      setTimeout( () => {
            // const oldState = getState().res.result;
            // console.log(oldState);          
            dispatch(saveResult(result));
      }, 2000)        
    }
}

export const onDeleteResult = (id) =>{
    return{
        type:actionTypes.Delete_Result,
        resultId: id
    }
}
