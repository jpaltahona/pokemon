import React, { useEffect, useState } from 'react';
import {typePokemonsApi, selecTypesPokemon} from '../../Api/typePokemon';
import { fetchPokemonData } from '../../Api/getPokemons';
import { connect } from 'react-redux';
import { TypeActionPokemon } from '../../Redux/Actions/typePokemon.action';
import { filterPokemonAction } from '../../Redux/Actions/filterPokemon.actions';

function TypesPokemon(props) {

    const [ selection, SetSelection ] = useState([]);

    useEffect( () => {
        typePokemonsApi()
        .then( info => {
            props.TypeActionPokemon(info)
        })
    }, []);

   
    function hanbleChange(e){
        let arraySelection = selection;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        
        if(value == true){
            arraySelection.push(e.target.value);
        }else{
           const arrayFiltra = arraySelection.filter( i => i != e.target.value ) ;
           arraySelection = arrayFiltra;
        }


            arraySelection.map( i=> {
                typePokemonsApi(i)
                .then(data => {
                    let listPoke = [];
                    data.pokemon.map( poke  => {
                        
                        fetchPokemonData(poke.pokemon)
                        .then(dataPoke => {
                            listPoke.push(dataPoke);
                            props.filterPokemonAction(listPoke);
                        })
                    })
                })
                .catch(err => {
                    console.log('errores --> ', err)
                })
            })
        
        //SetSelection(arraySelection);
        //selecTypesPokemon(arraySelection);
    }

    return (
        <div>
            { Object.keys(props.typePokemonReducer).length >= 1 ?
            <ul className="list-types">
                {
                     props.typePokemonReducer.results.map( i => {
                        return(
                             <li  key={i.url}>
                                 <label>
                                    <input type="checkbox" id="cbox1" value={i.url} 
                                        onChange={hanbleChange}
                                    /> 
                                    { i.name }
                                </label>
                            </li>
                        )
                    } )
                }
            </ul>
            :
            <p>cargando...</p>
            }
        </div>
    )
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
    filterPokemonAction,
    TypeActionPokemon
};
export default connect(mapStateToProps, mapDispatchToProps)(TypesPokemon);