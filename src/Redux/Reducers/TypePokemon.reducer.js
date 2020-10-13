import {TYPESPOKEMON} from '../types';
const INITIAL_STATE = {};

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type){
        case TYPESPOKEMON:
            return {
                ...state,
                ...action.payload,
            }
        default: return state
    }
}