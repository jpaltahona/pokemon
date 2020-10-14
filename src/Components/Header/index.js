import React from 'react';
import { FaSistrix } from "react-icons/fa";
import logo from '../../Assets/images/Pokeball.png';
import Search from './SearchCompontent';

function Header () {

    return (
        <div className="header">
            <div>
                <img src={logo} height="40px"/>
            </div>
            <div className="search-container">
               <Search />
                <div className="iconSearch">
                    <FaSistrix/>
                </div>
                
            </div>
        </div>
    );
}

export default Header;
