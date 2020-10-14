import {FILTEROKEMON} from '../types';
const INITIAL_STATE = [];

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type){
        case FILTEROKEMON:
            return [
                ...action.payload,
            ]
        default: return state
    }
}