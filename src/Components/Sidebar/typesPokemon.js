import React, { useEffect, useState } from 'react';
import {typePokemonsApi, selecTypesPokemon} from '../../Api/typePokemon';
import { connect } from 'react-redux';
import { TypeActionPokemon } from '../../Redux/Actions/typePokemon.action';


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
        arraySelection.push(e.target.value);

        SetSelection(arraySelection);
        selecTypesPokemon(arraySelection);
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
    TypeActionPokemon
};
export default connect(mapStateToProps, mapDispatchToProps)(TypesPokemon);