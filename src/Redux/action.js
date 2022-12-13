export const ADD = {type:'ADD'}
export const REMOVE = {type:'REMOVE'}


const handleAdd = (payload)=>{
    return {type:ADD , payload}
}

const handdleRemove = ()=>{
    return {type:REMOVE }
}

export {handleAdd , handdleRemove}