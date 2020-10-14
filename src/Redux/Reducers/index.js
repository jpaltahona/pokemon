import { combineReducers } from "redux";
import typePokemonReducer from './TypePokemon.reducer';
import listPokemon from './listPokemon.reducer';
import selectPokemon from './selectPokemon.reducer';
import filterPokemon from '../Reducers/filterPokemon.reducer';


export default combineReducers({
    typePokemonReducer,
    listPokemon,
    selectPokemon,
    filterPokemon
});