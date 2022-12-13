import {ADD , REMOVE} from './action'
const initial = {}
const reducer = (state = initial , {type , payload})=>{
    switch(type){
        case ADD:
            return {payload}
        case REMOVE:
            return {}
        default:
            return state
    }
}

export default reducer;