import React, { useEffect, useState } from 'react'
import Card from  './card';
import { getPokemons, listPokemons } from '../../Api/getPokemons';
import { listPokemonAction } from '../../Redux/Actions/listPokemon.action';
import { connect } from 'react-redux';

function Content(props) {
    async function getData(){
        getPokemons()
        /* const finalData = await listPokemons()
        await props.listPokemonAction(finalData) */
    }

    useEffect( () => {
        getData()
    }, [] );

    console.log(props);

    /* return (
        <>
            {
                listPokemon.length >= 1 ? 
                    listPokemon.map( i => {
                        return (
                            <Card 
                                name={i.name}
                                link={i.url}
                            />
                        )
                    } )
                : <p>Cargando...</p>
            }
        </>
    ) */
    return (
        <p>pokeomnes</p>
    )
}


const mapStateToProps = state => state;
const mapDispatchToProps = {
    listPokemonAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
