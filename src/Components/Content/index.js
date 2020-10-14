import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getPokemons, fetchPokemonData,  } from '../../Api/getPokemons';
import { listPokemonAction } from '../../Redux/Actions/listPokemon.action';
import { selecPokemonAction } from '../../Redux/Actions/selecPokemon.action';

//Components
import Card from  './card';
import ModalPokemon from './modal';

function Content(props) {
    const [next, setNext] = useState("");
    async function getData(data){
        getPokemons( data? data : '' ).then( data => {
            setNext(data.next);
            localStorage.setItem('nextPage', data.next)
            data.results.map( pokemon => {
                let listPoke = props.listPokemon;
                fetchPokemonData(pokemon).then( pokeData =>{
                    listPoke.push(pokeData);
                    props.listPokemonAction(listPoke);
                    if(listPoke.length <= 20){
                        localStorage.setItem('listPokemon', JSON.stringify(listPoke))
                    }
                })
                
            })
        })
    }

    useEffect( () => {
        let validateStorage = localStorage.getItem('listPokemon');
        if(validateStorage == null  ){
            getData()
        }else{
            const nexPage = localStorage.getItem('nextPage');
            const listPokemonStorage = JSON.parse(validateStorage);
            props.listPokemonAction(listPokemonStorage);
            setNext(nexPage);
        }
       
    }, [] );

    function selectPokemon(e){
        props.selecPokemonAction(e)
    }
    function hableClose(){
        props.selecPokemonAction({});
    }
    function nextPage(){
        getData(next)
    }

    return (
        <>
            { 
                props.filterPokemon.length == 0 ? 
                    props.listPokemon.map( i => {
                        return(
                            <div key={i.id}>
                                <Card 
                                    name={i.name} 
                                    id={i.id}
                                    images={i.sprites}
                                    type={i.types}
                                    onChange={ () => selectPokemon(i) }
                                />
                            </div>
                        )
                    })
                : props.filterPokemon.map( i => {
                    return(
                        <div key={i.id}>
                            <Card 
                                name={i.name} 
                                id={i.id}
                                images={i.sprites}
                                type={i.types}
                                onChange={ () => selectPokemon(i) }
                            />
                        </div>
                    )
                })
            }
            {
                Object.keys(props.selectPokemon).length >= 1  ?
                    <ModalPokemon 
                        close={ hableClose }
                    />  
                : null
            }
            <div className="moreContend">
                <button onClick={ nextPage }>Load More</button>
            </div>
          
        </>
    )
    
}


const mapStateToProps = state => state;
const mapDispatchToProps = {
    listPokemonAction,
    selecPokemonAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
