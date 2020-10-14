import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getPokemons, fetchPokemonData,  } from '../../Api/getPokemons';
import { listPokemonAction } from '../../Redux/Actions/listPokemon.action';
import { selecPokemonAction } from '../../Redux/Actions/selecPokemon.action';

//Components
import Card from  './card';
import ModalPokemon from './modal';

function Content(props) {
    const [listPokemon, setListPokemon] = useState([]);
    const [showModal, setShowModal] = useState(false);

    async function getData(){
        getPokemons().then( data => {
            data.results.map( pokemon => {
                let listPoke = props.listPokemon;
                fetchPokemonData(pokemon).then( pokeData =>{
                    listPoke.push(pokeData);
                    props.listPokemonAction(listPoke)
                    //  setListPokemon(pokeList);
                })
            })
        })
    }

    useEffect( () => {
        getData()
    }, [] );

    function selectPokemon(e){
        setShowModal(true)
        props.selecPokemonAction(e)
    }
    
    return (
        <>
            {props.listPokemon.length >= 1 ?
                props.listPokemon.map( i => {
                    return(
                       
                        <Card 
                            key={i.id}
                            name={i.name} 
                            id={i.id}
                            images={i.sprites}
                            type={i.types}
                            onChange={ () => selectPokemon(i) }
                        />
                    )
                })
            :<p>Cargando...</p> }
            {
                showModal ?
                    <ModalPokemon 
                        close={ () => setShowModal(false) }
                    />  
                : null
            }
           
        </>
    )
    
}


const mapStateToProps = state => state;
const mapDispatchToProps = {
    listPokemonAction,
    selecPokemonAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
