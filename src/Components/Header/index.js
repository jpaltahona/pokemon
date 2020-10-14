import React from 'react';
import { FaSistrix } from "react-icons/fa";
import logo from '../../Assets/images/Pokeball.png';
import {searchPokemon} from '../../Api/searchPokemon';

function Header () {

    function handleSearch(e){
        let name= e.target.value;

        if(name.length >= 3){
            console.log(name);
            searchPokemon(name).then( info => {
                console.log(info)
            })
        }
    }

    return (
        <div className="header">
            <div>
                <img src={logo} height="40px"/>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Busca un pokemon" 
                    onChange={(e)=> handleSearch(e)}
                />
                <div className="iconSearch">
                    <FaSistrix/>
                </div>
            </div>
        </div>
    );
}

export default Header;
