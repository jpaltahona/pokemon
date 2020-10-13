import React, { useEffect, useState } from 'react';
import {typePokemonsApi} from '../../Api/typePokemon';
import { connect } from 'react-redux';
import { TypeActionPokemon } from '../../Redux/Actions/typePokemon.reducer';

function TypesPokemon(props) {

    useEffect( () => {
        async function getData(){
            const data = await  typePokemonsApi();
            await props.TypeActionPokemon(data);
        }
        getData();
    }, []);

    console.log(props);
    return (
        <div>
            { Object.keys(props.typePokemonReducer).length >= 1 ?
            <ul className="list-types">
                {
                     props.typePokemonReducer.results.map( i => {
                        return(
                             <li>
                                 <label>
                                    <input type="checkbox" id="cbox1" value={i.url} /> { i.name }
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