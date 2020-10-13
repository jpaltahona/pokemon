import { combineReducers } from "redux";
import typePokemonReducer from './TypePokemon.reducer';
import listPokemon from './listPokemon.reducer';

export default combineReducers({
    typePokemonReducer,
    listPokemon
});