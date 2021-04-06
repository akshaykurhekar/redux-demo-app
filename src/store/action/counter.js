import * as actionTypes from './actionTypes';

export const increment = () =>{
    return{
        type: actionTypes.Increment
    }
}

export const decrement = () =>{
    return{
        type:actionTypes.Decrement
    }
}

export const onAdd = (val) =>{
    return{
        type:actionTypes.Add,
        value: val
    }
}

export const onSub = (val) =>{
    return{
        type:actionTypes.Sub,
        value: val
    }
}