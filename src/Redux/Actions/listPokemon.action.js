import {LISTPOKEMON} from '../types';
export const listPokemonAction = (data) => async  (dispatch) => {
    console.log(data);
    await dispatch({
        type: LISTPOKEMON,
        payload: data
    })
};