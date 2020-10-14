import {LISTPOKEMON} from '../types';

export const listPokemonAction = (data) => async  (dispatch) => {

    await dispatch({
        type: LISTPOKEMON,
        payload: data
    })
};