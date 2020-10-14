import {FILTEROKEMON} from '../types';

export const filterPokemonAction = (data) => async  (dispatch) => {

    await dispatch({
        type: FILTEROKEMON,
        payload: data
    })
};