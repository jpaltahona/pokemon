import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function ModalPokemon(props){
    const  { name, id , weight, height, types, species} = props.selectPokemon;
    const [infoPoke, setInfoPoke] = useState(null);

    function getInfoPokemon(){
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            setInfoPoke(data);
        })
    }
    function evolutionData(){
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
    }
    useEffect( () => {
        getInfoPokemon();
    }, [] )
   

    return(
        <div className="modal">
            <div className="modal__container">
                <div className="modal__container__header">
                    
                    <button onClick={ props.close } >x</button>
                </div>
                <div  className="modal__container__body">
                    <div className={"bodyInfo " + types[0].type.name}>
                        <div className="imgConten">
                            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}/>
                        </div>
                        <div className="infoPokemon">
                            <h2>{name} <b>{id}</b> </h2>
                            <p> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
                            <table>
                                
                                <tr>
                                    <td>Height</td>
                                    <td>{height} m</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{weight} kg</td>
                                </tr>
                                <tr>
                                    <td>Categorys</td>
                                    <td>{types[0].type.name}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>{species.name}</td>
                                </tr>
                                <tr>
                                    <td>Habitat</td>
                                    <td>{ infoPoke ? infoPoke.habitat.name : 'cargando...' }</td>
                                </tr>
                                <tr>
                                    <td>color</td>
                                    <td>{ infoPoke ? infoPoke.color.name : 'cargando...' }</td>
                                </tr>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    )
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {})( ModalPokemon);;