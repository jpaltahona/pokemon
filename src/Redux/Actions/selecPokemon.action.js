import {SELECTPOKEMON } from '../types';

export const selecPokemonAction = (data) => async  (dispatch) => {

    await dispatch({
        type: SELECTPOKEMON,
        payload: data
    })
};