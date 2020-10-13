import {TYPESPOKEMON} from '../types';
export const TypeActionPokemon = (data) => (dispatch) => {
    dispatch({
        type: TYPESPOKEMON,
        payload: data
    })
};