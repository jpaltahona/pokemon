import {SELECTPOKEMON} from '../types';
const INITIAL_STATE = {};

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type){
        case SELECTPOKEMON:
            return {
                ...INITIAL_STATE,
                ...action.payload,
        }
        default: return state
    }
}