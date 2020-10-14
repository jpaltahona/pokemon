import  React , { useState } from 'react';
import {searchPokemon} from '../../Api/searchPokemon';
import {  connect } from 'react-redux';
import { selecPokemonAction } from '../../Redux/Actions/selecPokemon.action';
import { filterPokemonAction } from '../../Redux/Actions/filterPokemon.actions';

function Search(props){
    const [ text, setText ] = useState("");
    const [list, setList] = useState([]);
    const [showList, setShowList] = useState(false);


    function hableList(i){
        let arrayPokemon = list;
        arrayPokemon.push(i);
        setList(arrayPokemon);
        setShowList(true)
    }

    function hanbleSearch(e){
        if(e.length >= 4){
            searchPokemon(e)
            .then( data => {
                if(data != null ) { 
                    hableList(data)
                }else{
                    setList([]);
                    setShowList(false)
                }
            }).catch(error => {
                console.log("error -> ", error);
                setList([]);
                showList(false)
            })
        }else{
            setList([]);
            setShowList(false)
        }
    }
    function hableSelect(e){
        props.selecPokemonAction(e);
        setShowList(false);
    }
    function searchHable(e){
        let arrayPokemonSearch = [];
        if( e != "" ){
            if(props.filterPokemon.length >= 1 ){

                props.filterPokemon.forEach(element => {
                    let arraySpli = element.name.split(e);
                    if( element.name == e ){
                        arrayPokemonSearch.push(element);
                        props.filterPokemonAction(arrayPokemonSearch);
                        
                    } else if( arraySpli.length >=2 ){
                        arrayPokemonSearch.push(element);
                        props.filterPokemonAction(arrayPokemonSearch);
                    }
                });

            }else{
                props.listPokemon.forEach(element => {
                    let arraySpli = element.name.split(e);
                    if( element.name == e ){
                        arrayPokemonSearch.push(element);
                        props.filterPokemonAction(arrayPokemonSearch);
                        
                    } else if( arraySpli.length >=2 ){
                        arrayPokemonSearch.push(element);
                        props.filterPokemonAction(arrayPokemonSearch);
                    }
                });
 
            }
        }else{
            props.filterPokemonAction([])
        }
        
    }
    return(
        <div>
            <input type="text" placeholder="Busca un pokemon" 
                onChange={(e)=> {
                    setText(e.target.value)
                    searchHable(e.target.value)
                } }
            />
            { 
                showList ?
                    <ul className="listResults">
                        {
                            list.map( i => <li key={i.id} onClick={ () => hableSelect(i)}>
                                <div class="infoPoke">
                                    <h3>  {i.name}</h3>
                                    <ul>
                                        {i.types.map(poke => <li className={poke.type.name} >
                                            {poke.type.name}
                                            </li>)
                                        }
                                    </ul>
                                </div>
                              
                                <div className={"photoContent " + i.types[0].type.name}>
                                    <img src={i.sprites.front_default} />
                                </div>
                            </li> )
                        }
                    </ul>    
                : null
            }
            
        </div>
    )
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
    selecPokemonAction,
    filterPokemonAction
};
export default connect(mapStateToProps , mapDispatchToProps)(Search);