import {LISTPOKEMON} from '../types';
const INITIAL_STATE = [];

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type){
        case LISTPOKEMON:
            return [
                ...action.payload,
            ]
        default: return state
    }
}