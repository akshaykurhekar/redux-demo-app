export const updateObject = (oldState, updateObject) =>{
    return {
        ...oldState,
        ...updateObject
    };
};