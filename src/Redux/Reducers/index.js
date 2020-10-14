import { combineReducers } from "redux";
import typePokemonReducer from './TypePokemon.reducer';
import listPokemon from './listPokemon.reducer';
import selectPokemon from './selectPokemon.reducer';

export default combineReducers({
    typePokemonReducer,
    listPokemon,
    selectPokemon
});